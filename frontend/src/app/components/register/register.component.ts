import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import { ValidateService } from '../../services/validate.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  email: String;
  password: String;

  constructor(
    private validateService: ValidateService,
    private flashMessagesService: FlashMessagesService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      name: this.name,
      email: this.email,
      password: this.password
    }

    // Required fields
    if(!this.validateService.validateRegister(user)) {
      this.flashMessagesService.show('Por favor llena todos los campos', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }

    // Valid email
    if(!this.validateService.validateEmail(user.email)) {
      this.flashMessagesService.show('Proporciona una dirección valida de email', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }      
  
    // Register user
    this.authenticationService.registerUser(user).subscribe(data => {
      if(data.success) {
        this.flashMessagesService.show('Te has registrado correctamente, ahora puedes ingresar', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/login']);
      }
      else {
        this.flashMessagesService.show('Algo salio mal', { cssClass: 'alert-danger', timeout: 3000 });
        this.router.navigate(['/register']);
      }
    })
  }
}


