import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Observable,
  throwError,
} from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private baseUrl = 'http://localhost:3000/api/';
  private urlBase = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }


  userLogin(loginData) {
    return this.http
    .post<any>(this.urlBase+'login', loginData);
  }

  getEmployeeDetails() {
    return this.http
      .get<any>(this.baseUrl+'employees');
  }

  postEmployeeDetails(data) {
    return this.http
      .post<any>(this.baseUrl+'create', data);
  }

  getEmployeeById(id){
    return this.http
      .get<any>(this.baseUrl+'employee/'+ id);
  }

  postSignUp(data){
    return this.http
    .post<any>(this.urlBase+ 'signup', data);
  }

}



