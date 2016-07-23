/* tslint:disable */
import {
  AccessToken,
  Room,
  Message
} from '../index';

export interface AccountInterface {
  
  realm?: string;    
  username?: string;    
  password: string;    
  credentials?: any;    
  challenges?: any;    
  email: string;    
  emailVerified?: boolean;    
  verificationToken?: string;    
  status?: string;    
  created?: any;    
  lastUpdated?: any;    
  id?: number;  
  accessTokens?: Array<AccessToken>;
  rooms?: Array<Room>;
  messages?: Array<Message>;
  
}

export class Account implements AccountInterface {
    
  realm: string;  
  username: string;  
  password: string;  
  credentials: any;  
  challenges: any;  
  email: string;  
  emailVerified: boolean;  
  verificationToken: string;  
  status: string;  
  created: any;  
  lastUpdated: any;  
  id: number;  
  accessTokens: Array<AccessToken>;
  rooms: Array<Room>;
  messages: Array<Message>;
  
  constructor(instance?: Account) {
    Object.assign(this, instance);
  }
}
