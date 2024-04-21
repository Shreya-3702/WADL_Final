import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  onSubmitLogin(loginform : NgForm){
    console.log("Login button clicked");
    console.log(loginform.value);
  }
}
