import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  StoreName:string="";
  StoreLogo:string="";

  constructor() { 

    this.StoreName="souq";
    this.StoreLogo="/assets/images/souq.png";
  }

  ngOnInit(): void {
  }

}
