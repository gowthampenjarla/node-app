import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ActionService {


  constructor(private _http: HttpClient) { }

  getCategories() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = { headers: headers };
    return this._http.get('http://localhost:3000/categories', options)
  }

  getProducts(category) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = { headers: headers };
    return this._http.get(`http://localhost:3000/categories/${category}`, options)
  }

  deleteProducts(category) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = { headers: headers };
    return this._http.delete(`http://localhost:3000/categories/delCat/${category}`, options)
  }
}
