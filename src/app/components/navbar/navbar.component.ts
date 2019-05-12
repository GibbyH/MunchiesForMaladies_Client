import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/login/AuthenticationService';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  logout() {
    this.authenticationService.logout();
  }

  loggedUser() {
    return this.authenticationService.getLoggedUserUsername();
  }

  isLoggedIn() {
    return this.authenticationService.isLoggedIn();
  }

}
