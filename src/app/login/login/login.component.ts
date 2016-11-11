import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {LoggedService} from './../logged.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

complexForm : FormGroup;

constructor(fb: FormBuilder, private LoggedService: LoggedService, private router: Router){
    this.complexForm = fb.group({
      // To add a validator, we must first convert the string value into an array. 
      //The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
      'firstName' : [null, Validators.required],
      // We can use more than one validator per field.
      // If we want to use more than one validator we have to wrap our array of validators with a Validators.compose function. Here we are using a required, minimum length and maximum length validator.
      'lastName': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      'gender' : [null, Validators.required],
      'hiking' : false,
      'running' :false,
      'swimming' :false
    })
  }

  submitForm(value: any){
    console.log(value);
     this.login();  
  }

  

    login() {if (this.LoggedService.login(this.complexForm.value.firstName, this.complexForm.value.lastName))
    {this.router.navigate(['dashboard'])}};


  ngOnInit() {
  }

}
