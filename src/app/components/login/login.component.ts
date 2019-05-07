import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../services/login.service';
import {Token} from '../../services/token';

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
        (token: Token) => {
          localStorage.setItem('authToken', token.idToken);
          const url = 'welcome/' + this.username;
          this.router.navigate([url]);
        },
        err => {
          console.log(err.status);
        }
      );
  }
}
