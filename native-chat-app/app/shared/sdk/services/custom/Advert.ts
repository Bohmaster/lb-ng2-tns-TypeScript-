/* tslint:disable */
import { Injectable, Inject, Optional } from '@angular/core';
import { Http, Response } from '@angular/http';
import {
  LoopBackAuth,
  ErrorHandler,
  JSONSearchParams,
  BaseLoopBackApi,
} from '../core/index';
import {
  LoopBackFilter,
  Advert
} from '../../models/index';
import { LoopBackConfig } from '../../lb.config';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/share';

/**
 * Api services for the `Advert` model.
 */
@Injectable()
export class AdvertApi extends BaseLoopBackApi {

  constructor(
    @Inject(Http) http: Http,
    @Inject(LoopBackAuth) protected auth: LoopBackAuth, 
    @Inject(JSONSearchParams) protected searchParams: JSONSearchParams, 
    @Optional() @Inject(ErrorHandler) errorHandler: ErrorHandler
  ) {
    super(http, auth, searchParams, errorHandler);
  }

  /**
   * Create a new instance of the model and persist it into the data source.
   *
   * @param object data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Advert` object.)
   * </em>
   */
  public create(data: any = undefined) {
    let method: string = "POST";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() + "/Adverts";
    let urlParams: any = {
    };
    let params: any = {};
    if (data) params.data = data;
    let result = this.request(method, url, urlParams, params, data)
    return result.map((result: Advert | Array<Advert>) => Array.isArray(result)
                             ? result.map((instance: Advert)=> new Advert(instance))
                             : new Advert(result));
  }
  public onCreate(data: any = undefined) {
    let method: string = "POST";
    let url: string = "/" + LoopBackConfig.getApiVersion() + "/Adverts";
    let urlParams: any = {
    };

    let params: any = {};
    let result = this.request(method, url, urlParams, params, data, true);
    return result;
  }

  /**
   * Update an existing model instance or insert a new one into the data source.
   *
   * @param object data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Advert` object.)
   * </em>
   */
  public upsert(data: any = undefined) {
    let method: string = "PUT";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() + "/Adverts";
    let urlParams: any = {
    };
    let params: any = {};
    if (data) params.data = data;
    let result = this.request(method, url, urlParams, params, data)
    return result.map((result: Advert | Array<Advert>) => Array.isArray(result)
                             ? result.map((instance: Advert)=> new Advert(instance))
                             : new Advert(result));
  }
  public onUpsert(data: any = undefined) {
    let method: string = "PUT";
    let url: string = "/" + LoopBackConfig.getApiVersion() + "/Adverts";
    let urlParams: any = {
    };

    let params: any = {};
    let result = this.request(method, url, urlParams, params, data, true);
    return result;
  }

  /**
   * Check whether a model instance exists in the data source.
   *
   * @param any id Model id
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * Data properties:
   *
   *  - `exists` – `{boolean}` - 
   */
  public exists(id: any) {
    let method: string = "GET";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() + "/Adverts/:id/exists";
    let urlParams: any = {
      id: id
    };
    let params: any = {};
    let result = this.request(method, url, urlParams, params);
    return result;
  }

  /**
   * Find a model instance by id from the data source.
   *
   * @param any id Model id
   *
   * @param object filter Filter defining fields and include
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Advert` object.)
   * </em>
   */
  public findById(id: any, filter: LoopBackFilter = undefined) {
    let method: string = "GET";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() + "/Adverts/:id";
    let urlParams: any = {
      id: id
    };
    let params: any = {};
    if (filter) params.filter = filter;
    let result = this.request(method, url, urlParams, params)
    return result.map((result: Advert | Array<Advert>) => Array.isArray(result)
                             ? result.map((instance: Advert)=> new Advert(instance))
                             : new Advert(result));
  }

  /**
   * Find all instances of the model matched by filter from the data source.
   *
   * @param object filter Filter defining fields, where, include, order, offset, and limit
   *
   * @returns object[] An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Advert` object.)
   * </em>
   */
  public find(filter: LoopBackFilter = undefined) {
    let method: string = "GET";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() + "/Adverts";
    let urlParams: any = {
    };
    let params: any = {};
    if (filter) params.filter = filter;
    let result = this.request(method, url, urlParams, params)
    return result.map((result: Advert | Array<Advert>) => Array.isArray(result)
                             ? result.map((instance: Advert)=> new Advert(instance))
                             : new Advert(result));
  }

  /**
   * Find first instance of the model matched by filter from the data source.
   *
   * @param object filter Filter defining fields, where, include, order, offset, and limit
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Advert` object.)
   * </em>
   */
  public findOne(filter: LoopBackFilter = undefined) {
    let method: string = "GET";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() + "/Adverts/findOne";
    let urlParams: any = {
    };
    let params: any = {};
    if (filter) params.filter = filter;
    let result = this.request(method, url, urlParams, params)
    return result.map((result: Advert | Array<Advert>) => Array.isArray(result)
                             ? result.map((instance: Advert)=> new Advert(instance))
                             : new Advert(result));
  }

  /**
   * Update instances of the model matched by where from the data source.
   *
   * @param object where Criteria to match model instances
   *
   * @param object data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * The number of instances updated
   */
  public updateAll(where: any = undefined, data: any = undefined) {
    let method: string = "POST";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() + "/Adverts/update";
    let urlParams: any = {
    };
    let params: any = {};
    if (where) params.where = where;
    if (data) params.data = data;
    let result = this.request(method, url, urlParams, params, data)
    return result.map((result: Advert | Array<Advert>) => Array.isArray(result)
                             ? result.map((instance: Advert)=> new Advert(instance))
                             : new Advert(result));
  }
  public onUpdateAll(where: any = undefined,  data: any = undefined) {
    let method: string = "POST";
    let url: string = "/" + LoopBackConfig.getApiVersion() + "/Adverts/update";
    let urlParams: any = {
    };

    let params: any = {};
    if (where !== undefined) {
      params.where = where;
    }
    let result = this.request(method, url, urlParams, params, data, true);
    return result;
  }

  /**
   * Delete a model instance by id from the data source.
   *
   * @param any id Model id
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Advert` object.)
   * </em>
   */
  public deleteById(id: any) {
    let method: string = "DELETE";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() + "/Adverts/:id";
    let urlParams: any = {
      id: id
    };
    let params: any = {};
    let result = this.request(method, url, urlParams, params);
    return result;
  }
  public onDeleteById(id: any) {
    let method: string = "DELETE";
    let url: string = "/" + LoopBackConfig.getApiVersion() + "/Adverts/:id";
    let urlParams: any = {
      id: id
    };

    let params: any = {};
    let result = this.request(method, url, urlParams, params, true);
    return result;
  }

  /**
   * Count instances of the model matched by where from the data source.
   *
   * @param object where Criteria to match model instances
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * Data properties:
   *
   *  - `count` – `{number}` - 
   */
  public count(where: any = undefined) {
    let method: string = "GET";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() + "/Adverts/count";
    let urlParams: any = {
    };
    let params: any = {};
    if (where) params.where = where;
    let result = this.request(method, url, urlParams, params);
    return result;
  }

  /**
   * Update attributes for a model instance and persist it into the data source.
   *
   * @param any id PersistedModel id
   *
   * @param object data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Advert` object.)
   * </em>
   */
  public updateAttributes(id: any, data: any = undefined) {
    let method: string = "PUT";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() + "/Adverts/:id";
    let urlParams: any = {
      id: id
    };
    let params: any = {};
    if (data) params.data = data;
    let result = this.request(method, url, urlParams, params, data);
    return result;
  }
  public onUpdateAttributes(id: any,  data: any = undefined) {
    let method: string = "PUT";
    let url: string = "/" + LoopBackConfig.getApiVersion() + "/Adverts/:id";
    let urlParams: any = {
      id: id
    };

    let params: any = {};
    let result = this.request(method, url, urlParams, params, data, true);
    return result;
  }

  /**
   * Create a change stream.
   *
   * @param object data Request data.
   *
   *  - `options` – `{object}` - 
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * Data properties:
   *
   *  - `changes` – `{ReadableStream}` - 
   */
  public createChangeStream(options: any = undefined) {
    let method: string = "POST";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() + "/Adverts/change-stream";
    let urlParams: any = {
    };
    let params: any = {};
    if (options) params.options = options;
    let result = this.request(method, url, urlParams, params, options);
    return result;
  }
  public onCreateChangeStream(options: any = undefined) {
    let method: string = "POST";
    let url: string = "/" + LoopBackConfig.getApiVersion() + "/Adverts/change-stream";
    let urlParams: any = {
    };

    let params: any = {};
    let result = this.request(method, url, urlParams, params, options, true);
    return result;
  }


  /**
   * The name of the model represented by this $resource,
   * i.e. `Advert`.
   */
  public getModelName() {
    return "Advert";
  }
}
