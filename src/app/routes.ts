import {Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
<<<<<<< HEAD
import { ItemComponent } from './components/item/item.component';
import { AilmentComponent } from './components/ailment/ailment.component';
import { MealComponent } from './components/meal/meal.component';
=======
>>>>>>> 1855d7a4c8d99c346cb66d6d6486b18b2fd8f309



/*
Routing is a feature that Angular uses to acheive
true single page application format.

Routing entails setting up a page to be injected
through the URL that we are connected to. The URLs
themselves don't point to separate files to be
displayed due to the fact that this would be a
multipage application.
*/

/*NOTE: If your routes don't work, try switching the
order of your routes to match the order in which
 */

export const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    }
]
