import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ERS_JPA_API_URL} from '../../app.constants';
import {IAuth} from '../i.auth';
import BackendUser from '../../models/backend.user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(body: IAuth): Observable<BackendUser> {
    return this.http.post<BackendUser>(`${ERS_JPA_API_URL}/auth/sign`, body);
  }

}
