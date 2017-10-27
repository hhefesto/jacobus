import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: String;
  password: String;

  constructor(
    private flashMessagesService: FlashMessagesService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    const user = {
      email: this.email,
      password: this.password
    }

    this.authenticationService.authenticateUser(user).subscribe(data => {
      if(data.success) {
        this.authenticationService.storeUserData(data);
        this.flashMessagesService.show('Has ingresado', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/dashboard']);
      }
      else {
        this.flashMessagesService.show(data.msg, { cssClass: 'alert-info', timeout: 3000 });
        this.router.navigate(['/login']);
      }
    });
  }
}
