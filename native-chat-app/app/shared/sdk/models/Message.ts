/* tslint:disable */
import {
  Room,
  Account
} from '../index';

export interface MessageInterface {
  
  text: string;    
  id?: number;    
  roomId?: number;    
  accountId?: number;  
  room?:Room;
  account?:Account;
  
}

export class Message implements MessageInterface {
    
  text: string;  
  id: number;  
  roomId: number;  
  accountId: number;  
  room:Room;
  account:Account;
  
  constructor(instance?: Message) {
    Object.assign(this, instance);
  }
}
