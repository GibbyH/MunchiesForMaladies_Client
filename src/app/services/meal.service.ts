import { Injectable } from '@angular/core';
import {ERS_JPA_API_URL} from '../app.constants';
import {Meal} from '../models/meal.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  constructor(
    private http: HttpClient
  ) {
  }


  selectMeal(item) {
    console.log('inside retrieve meal');
    console.log(item);
    return this.http.get(`${ERS_JPA_API_URL}/api/recipes/${item}`);
  }
}
