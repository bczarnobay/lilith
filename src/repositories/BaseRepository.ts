import { IWrite } from '../models/interfaces/write'
import { IRead } from '../models/interfaces/read'
// import { Collection } from 'mongoose'
import { Db, Collection } from 'mongodb'
import { Model } from 'mongoose'

// export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
  export abstract class BaseRepository<T, I> {

  public readonly _model: Model<any>

  constructor(model: Model<any>){
    this._model = model
  }

  public async create(item: I): Promise<T> {
    return this._model.create(item)
  }

  public async findOne(id: string): Promise<T> {
    return this._model.findOne({ id })
  }

  public async count(where: any): Promise<number> {
    return this._model.count(where)
  }

  // update(id: string, item: T): Promise<boolean> {
  //   throw new Error('Method not implemented.')
  // }
  // delete(id: string): Promise<boolean> {
  //   throw new Error('Method not implemented.')
  // }
  // find(item: T): Promise<T[]> {
  //   throw new Error('Method not implemented.')
  // }

  

}
