import { Component, OnInit } from '@angular/core';
import {AilmentService} from '../../services/ailment.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MealService} from '../../services/meal.service';
import {Meal} from '../../models/meal.model';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {

  meals: Meal[];
  mealArray: string[];

  constructor(
    private mealService: MealService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.mealService.selectMeal(this.activatedRoute.snapshot.params.item).subscribe((data: any) => {
      console.log(data);
      this.meals = data.meals;
      console.log(this.meals)
      // this.mealArray = (this.meals as string).split(';');
    });
  }

}
