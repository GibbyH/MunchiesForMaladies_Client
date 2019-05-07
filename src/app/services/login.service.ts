import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ERS_JPA_API_URL} from '../app.constants';
import {IAuth} from './i.auth';
import {Token} from './token';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(body: IAuth): Observable<Token> {
    return this.http.post<Token>(`${ERS_JPA_API_URL}/auth/sign`, body);
  }

}
