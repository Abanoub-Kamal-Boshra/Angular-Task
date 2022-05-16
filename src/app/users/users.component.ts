import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { IUser } from '../Shared Classes and types/IUser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {

  usersList:Array<IUser>=[];

  constructor(private productService:ProductServiceService) { }

  ngOnInit(): void {
    this.productService.getUsers().subscribe(users =>{
      this.usersList = users;
    })
  }

}
