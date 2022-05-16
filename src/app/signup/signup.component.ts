import { Component, OnInit } from '@angular/core';
import { IUser } from '../Shared Classes and types/IUser';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {

  
  socials=["facebook","twitter","google"];
  userModel:IUser = {
    name: "",
    username:"",
    email:"",
    password:"",
    confirmPassword:"",
    social:"",
  }

  // private enrollService:EnrollService
  constructor() { }

  ngOnInit(): void {
  }

  SaveData(){
    // this.enrollService.enroll(this.userModel).subscribe(data=>
    //   {
    //     console.log(data)
    //   },
    //   error=>
    //   {
    //     console.log(error)
    //   })
    // }
  }

}
