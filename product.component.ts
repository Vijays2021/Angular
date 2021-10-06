import { Component} from '@angular/core';
import {Product} from './product';

@Component({

  selector: 'app-product',

  templateUrl: './product.component2.html',

  styleUrls: ['./product.component.css']

})

export class ProductComponent {

  productCatalog : Product[];

  selectedCategory : string = "";

  minPrice : number=1.0;
  maxPrice : number=2000.0;

  constructor() { 

    this.productCatalog = [

     new Product("P01","PEN",10.00,10,"Stationary"),

     new Product("P02","PENCIL",20.00,10,"Stationary"),

     new Product("P03","ERASER",5.00,10,"Stationary"),

     new Product("P04","COKE",50.00,10,"Bevarages"),

     new Product("P05","PEPSI",50.00,10,"Bevarages"),

     new Product("P06","MOBILECHARGER",50.00,10,"Electronics"),

     new Product("P07","PENDRIVE",50.00,10,"Electronics"),

     new Product("P08","SCALE",50.00,10,"Stationary")

    ];

    }
  }