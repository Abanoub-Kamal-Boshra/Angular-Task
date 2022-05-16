import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import {IProduct} from '../Shared Classes and types/IProduct';
import { IUser } from '../Shared Classes and types/IUser';
import { IPost } from '../Shared Classes and types/IPost';
import { DiscountOffers } from '../Shared Classes and types/Enums';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  ProductList:Array<IProduct>=[];
  Discount:DiscountOffers=DiscountOffers.NoDiscount;
  // usersList:Array<IUser>=[];
  // postsList:Array<IPost>=[];
  _usersUrl = 'https://jsonplaceholder.typicode.com/users';
  _postsUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http:HttpClient) {
    this.ProductList=[
      {id:1,name:'product1', quantity:5, price:25, img:'/assets/images/watch.jpg'},
      {id:2,name:'product2', quantity:6, price:22, img:'/assets/images/watch.jpg'},
      {id:3,name:'product3', quantity:4, price:13, img:'/assets/images/watch.jpg'},
      {id:4,name:'product4', quantity:9, price:28, img:'/assets/images/watch.jpg'}
    ];
  }

  setProductDiscount(discount:any){
    this.Discount = discount;
  }

  getProductDiscount(){
    return this.Discount;
  }

  GetAllProducts(){
    return this.ProductList;
  }

  GetProductById(prdId:any){
    if (typeof prdId !== "number") return null;
    return this.ProductList.find(item => item.id === prdId) ?? null;
  }

  getUsers():Observable<IUser[]>
  {
    return this.http.get<IUser[]>(this._usersUrl).pipe(catchError((err)=>{
      return throwError(()=> err.message || "Server Error");
    }))
  }

  getPosts():Observable<IPost[]>
  {
    return this.http.get<IPost[]>(this._postsUrl).pipe(catchError((err)=>{
      return throwError(()=> err.message || "Server Error");
    }))
  }
}
