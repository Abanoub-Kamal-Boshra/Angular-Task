import { Component, ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { ProductServiceService } from './services/product-service.service';

@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})


export class AppComponent {
  title = 'lab1';

  // @ViewChild(ProductsComponent) child : ProductsComponent = new ProductsComponent(new ProductServiceService());
  ngAfterViewInit(): void {}

}
