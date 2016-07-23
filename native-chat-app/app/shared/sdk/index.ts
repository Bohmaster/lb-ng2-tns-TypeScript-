/* tslint:disable */
import { HTTP_PROVIDERS } from '@angular/http';
import {
  LoopBackAuth,
  ErrorHandler,
  LoggerService,
  JSONSearchParams,
  AccountApi,
  RoomApi,
  MessageApi,
  AdvertApi
} from './services/index'
export const API_PROVIDERS: any[] = [
	HTTP_PROVIDERS,
	LoopBackAuth,
	ErrorHandler,
	LoggerService,
  JSONSearchParams,
  AccountApi,
  RoomApi,
  MessageApi,
  AdvertApi
];
export * from './models/index';
export * from './services/index';
export * from './lb.config';
export * from './sockets/index';
