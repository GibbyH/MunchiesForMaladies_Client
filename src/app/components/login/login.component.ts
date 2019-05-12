import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../services/login/login.service';
import BackendUser from '../../models/backend.user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
  }

  login() {
    this.loginService.login({ username: this.username, password: this.password })
      .subscribe(
        (backendUser: BackendUser) => {
          localStorage.setItem('loggedUser', JSON.stringify(backendUser));
          localStorage.setItem('authToken', backendUser.token);
          this.router.navigate(['list-ailments']);
        },
        err => {
          console.log(err.status);
        }
      );
  }
}
