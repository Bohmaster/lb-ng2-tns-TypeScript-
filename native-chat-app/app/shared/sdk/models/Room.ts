/* tslint:disable */
import {
  Account,
  Message
} from '../index';

export interface RoomInterface {
  
  name: string;    
  id?: number;  
  accounts?: Array<Account>;
  messages?: Array<Message>;
  
}

export class Room implements RoomInterface {
    
  name: string;  
  id: number;  
  accounts: Array<Account>;
  messages: Array<Message>;
  
  constructor(instance?: Room) {
    Object.assign(this, instance);
  }
}
