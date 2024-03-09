import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductSService {
  listProduct:Product[]=[
    {id:1,title:"product1", price:100,quantity:5,like:0},
    {id:2,title:"product2", price:50,quantity:5,like:0},
    {id:3,title:"product3", price:10,quantity:2,like:0},
  ]
  constructor() { }
  addproduct(p:Product){
    this.listProduct.push(p)
  }
}
