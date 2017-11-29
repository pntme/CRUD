import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Inject } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AjaxService {
  private headers = new Headers(
    { 'Content-Type': 'application/json' }
  );
  public self = this;
  constructor(
    private http: Http,
  ) {
  }


  Get(api: string): Promise<any> {
    return this.http.get(api)
      .toPromise()
      .then(response => {
        return response.json();
      })
      .catch(err => {
        console.log(err);
        return Promise.reject(err);
      });
  }


  Post(api, data): Promise<any> {
    return this.http
      .post(api, JSON.stringify(data), { headers: this.headers })
      .toPromise()
      .then(response => {
        return response.json();
      })
      .catch(err => {
        console.log(err);
        return Promise.reject(err);
      });
  }

  Delete(api: string): Promise<any> {
    return this.http.delete(api)
      .toPromise()
      .then(response => {
        return response.json();
      })
      .catch(err => {
        console.log(err);
        return Promise.reject(err);
      });
  }

  Put(api: string, data: any): Promise<any> {
    return this.http.put(api, JSON.stringify(data), { headers: this.headers })
      .toPromise()
      .then(response => {
        return response.json();
      })
      .catch(err => {
        console.log(err);
        return Promise.reject(err);
      });
  }
}
