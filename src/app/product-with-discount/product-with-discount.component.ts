import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { DiscountOffers } from '../Shared Classes and types/Enums';
import { IProduct } from '../Shared Classes and types/IProduct';

@Component({
  selector: 'app-product-with-discount',
  templateUrl: './product-with-discount.component.html',
  styleUrls: ['./product-with-discount.component.sass']
})
export class ProductWithDiscountComponent implements OnInit {

  ProductList:Array<IProduct>=[];
  Discount:DiscountOffers=DiscountOffers.NoDiscount;
  constructor(private productServiceService:ProductServiceService) { }

  ngOnInit(): void {
    this.Discount = this.productServiceService.getProductDiscount();
    this.ProductList= this.productServiceService.GetAllProducts();
    // this.ProductList = this.ProductList.forEach(product => product.price = product.price*(1.0 - parseFloat(this.Discount)));
  }

}
