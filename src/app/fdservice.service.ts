import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { EmpInterface } from './component-a/EmpInterface';
// <!-- [{"id":"82396","employee_name":"John Elia007","employee_salary":"68734","employee_age":"95","profile_image":""}, -->

@Injectable({
  providedIn: 'root'
})
export class FDServiceService {
  emplUrl = 'http://dummy.restapiexample.com/api/v1/employees';  // URL to web api

  constructor(private http: HttpClient) {}

  public getItems<T>(): Observable<T> {
      return this.http.get<T>(this.emplUrl);
  }
}
