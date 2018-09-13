import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

/*
  Generated class for the ValueApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const API = 'http://localhost:5000/api/values';
@Injectable()
export class ValueApiProvider {

  constructor(public http: Http) {
    console.log('Hello ValueApiProvider Provider');
  }

  getValues(){
    return this.http.get(API)
        .map(response => response.json());
  }

}
