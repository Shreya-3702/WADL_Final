import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] 
})
export class RegisterComponent {

  
  registrationData: any = {};

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmitRegister(registerform: NgForm) {
    console.log("Register button clicked");
    console.log(registerform.value);

    this.router.navigate(['/profile', { data: JSON.stringify(this.registrationData) }]);
  }
}
