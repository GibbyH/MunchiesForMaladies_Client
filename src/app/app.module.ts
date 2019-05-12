import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MealComponent } from './components/meal/meal.component';
import { AilmentComponent } from './components/ailment/ailment.component';
import { ItemComponent } from './components/item/item.component';
import { UserComponent } from './components/user/user.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ErrorComponent } from './components/error/error.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ListAilmentsComponent } from './components/list-ailments/list-ailments.component';
import {HttpInterceptorService} from './services/login/http-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    MealComponent,
    AilmentComponent,
    ItemComponent,
    UserComponent,
    NavbarComponent,
    LoginComponent,
    LogoutComponent,
    ErrorComponent,
    ListAilmentsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
