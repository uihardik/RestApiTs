import { Injectable } from '@nestjs/common';
import * as data from './data/users.json';
const dataPath = require('./data/users.json');
@Injectable()
export class AppService {
  
  userDetail(): any {
    return data;
  }
  getUser(id):any{
    let newD = data.filter(value => value.id == id)[0]
    console.log(newD,'newD')
    return newD
  }
}
