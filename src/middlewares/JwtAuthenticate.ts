import { NextFunction, Request, Response } from "express"
import { Result } from "src/services/Result"
import jwt from 'jsonwebtoken'
import config from 'config'

class JwtAuthenticate {
  public static verify(req: Request, res: Response, next: NextFunction): Response<any> {
    const { authorization } = req.headers   

    if(!authorization) {
      return res.status(401).send({ message:'Authorization token not sent'})
    }

    const parts = authorization.split(' ')
    if(!(parts.length === 2)) {
      return res.status(401).send({ message:'Token error'})
    }

    const [ scheme, token ] = parts
    if(!/^Bearer$/i.test(scheme)){
      return res.status(401).send({ message:'Token error'})
    }

    jwt.verify(token, config.get('jwt.secret'), (err, decoded) => {
     if(err){
      return res.status(401).send({ message:'Invalid token'})
     }

     res.locals.jwtDecoded = decoded
     next()
   })

  }
}

export default JwtAuthenticate