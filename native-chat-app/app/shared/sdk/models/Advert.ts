/* tslint:disable */
import {
} from '../index';

export interface AdvertInterface {
  
  title?: string;    
  description?: string;    
  id?: number;  
  
}

export class Advert implements AdvertInterface {
    
  title: string;  
  description: string;  
  id: number;  
  
  constructor(instance?: Advert) {
    Object.assign(this, instance);
  }
}
