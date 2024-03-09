import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ConsumerProductService {

  constructor(private http:HttpClient) { }
  url:string='http://localhost:3000/products'
  getProduct(){
    return this.http.get<Product[]>(this.url)
  }

  getProductById(id:number){
    return this.http.get<Product>('http://localhost:3000/products'+'/'+id)
  }
  AddProduct(p:Product){
    return this.http.post('http://localhost:3000/products',p)
  }
  DeleteProduct(id:number){
    return this.http.delete('http://localhost:3000/products'+'/'+id)
  }
  updateProduct(p:Product,id:number){
    return this.http.put('http://localhost:3000/products'+'/'+id,p)
  }
}
