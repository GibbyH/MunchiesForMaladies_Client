import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {ErrorComponent} from './components/error/error.component';
import {ListAilmentsComponent} from './components/list-ailments/list-ailments.component';
import {ItemComponent} from './components/item/item.component';
import {MealComponent} from './components/meal/meal.component';

const routes: Routes = [
  { path: '', component: LoginComponent  },
  { path: 'login', component: LoginComponent },
  { path: 'recipes/:item', component: MealComponent},
  { path: 'list-ailments', component: ListAilmentsComponent},
  { path: 'food-items/:problemId', component: ItemComponent},
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
