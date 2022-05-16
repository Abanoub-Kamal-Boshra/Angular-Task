import { Component, OnInit } from '@angular/core';
import { IUser } from '../Shared Classes and types/IUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  socials=["facebook","twitter","google"];
  userModel:IUser = {
    name: "",
    username:"",
    email:"",
    password:"",
    confirmPassword:"",
    social:"",
  }
  constructor() { }

  ngOnInit(): void {
  }

  SaveData(){
    
  }

}
