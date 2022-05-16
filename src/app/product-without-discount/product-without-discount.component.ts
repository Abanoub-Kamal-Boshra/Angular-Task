import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { IProduct } from '../Shared Classes and types/IProduct';

@Component({
  selector: 'app-product-without-discount',
  templateUrl: './product-without-discount.component.html',
  styleUrls: ['./product-without-discount.component.sass']
})
export class ProductWithoutDiscountComponent implements OnInit {

  ProductList:Array<IProduct>=[];
  constructor(private productServiceService:ProductServiceService) { }

  ngOnInit(): void {
    this.ProductList= this.productServiceService.GetAllProducts();
  }

}
