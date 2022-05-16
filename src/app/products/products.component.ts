import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from '../Shared Classes and types/Enums';
import { ICategory } from '../Shared Classes and types/ICategory';
import { IProduct } from '../Shared Classes and types/IProduct';
import { ProductServiceService } from '../services/product-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})

export class ProductsComponent implements OnInit {

  Discount:DiscountOffers=DiscountOffers.NoDiscount;
  StoreName:string="";
  StoreLogo:string="";
  ProductList:Array<IProduct>=[];
  myProduct:any={id:1,name:'', quantity:5, price:25, img:''};
  CategoryList:Array<ICategory>=[];
  ClientName:string="";
  IsPurshased:boolean=false;
  IsRendered:boolean=false;

  constructor(private productServiceService:ProductServiceService, private activatedRoute:ActivatedRoute , private router:Router) {

    this.Discount = DiscountOffers.fiveteen;
    productServiceService.setProductDiscount(this.Discount);
    this.StoreName="souq";
    this.StoreLogo="/assets/images/souq.png";
    this.CategoryList=[{id:1,name:'category1'}, {id:2,name:'category2'}];
    this.ClientName="Abanoub";
    this.IsPurshased=false;
  }



  doBuyingAction(){
    this.IsPurshased=!this.IsPurshased;
  }

  ngOnInit(): void {
  }

  renderValues(){
    this.ProductList= this.productServiceService.GetAllProducts();
    this.IsRendered= !this.IsRendered;
  }

  withDiscount(){
    this.router.navigate(['withDiscount'],{relativeTo:this.activatedRoute})
  }

  withoutDiscount(){
    this.router.navigate(['withoutDiscount'],{relativeTo:this.activatedRoute})
  }
}
