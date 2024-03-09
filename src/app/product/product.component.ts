import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductSService } from '../services/product-s.service';
import { ConsumerProductService } from '../services/consumer-product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  priceMax!:number;
  listProduct:Product[]=[]

  //Injection du service
  constructor(private ps:ProductSService,private consp:ConsumerProductService){}

  //Remplire listProduct avec la liste du service
  ngOnInit(){
   // this.listProduct=this.ps.listProduct
    this.consp.getProduct().subscribe({
      next:(data)=>this.listProduct=data,
      error:(error)=> console.log(error),
      complete:()=>console.log('done')
    }
    )
  }

  increment(id:number){
    this.listProduct[id].like++;
  }
  buy(i:number){
    this.listProduct[i].quantity--;

  }
  supp(id:number){
    this.consp.DeleteProduct(id).subscribe(
      ()=>this.ngOnInit()
    )
  }
}
