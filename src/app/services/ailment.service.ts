import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ERS_JPA_API_URL} from '../app.constants';
import {Ailment} from '../models/ailment.model';

@Injectable({
  providedIn: 'root'
})
export class AilmentService {

  constructor(
    private http: HttpClient
  ) {
  }

  retrieveAllAilments() {
    return this.http.get<Ailment[]>(`${ERS_JPA_API_URL}/api/ailments`);

  }

  selectAilment(id) {
    console.log('inside retrieve reimbursements');
    return this.http.get<Ailment>(`${ERS_JPA_API_URL}/api/topItemsToConsume/${id}`);
  }
}
