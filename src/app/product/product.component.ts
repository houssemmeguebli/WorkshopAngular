import { Component } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  priceMax!: number;
  like: number=0;
  listProduct:Product[]=[
    {id:1,title:"product1",price:100,quantity:5,like:0},
    {id:2,title:"product2",price:5,quantity:5,like:0},
    {id:3,title:"product3",price:50,quantity:2,like:0}
  ]
  increment(id:number){
    this.listProduct[id].like ++;
  }
  incrementquantity(id:number){
    this.listProduct[id].quantity --;
  }
}
