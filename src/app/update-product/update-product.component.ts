import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConsumerProductService } from '../services/consumer-product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  id!:number
  p!:Product
  constructor(private consP:ConsumerProductService,private route:Router,private act:ActivatedRoute){}
  registerForm=new FormGroup({
    id:new FormControl('',Validators.required),
    title:new FormControl('',[Validators.required,Validators.minLength(5)]),
    price:new FormControl('',[Validators.required,Validators.min(0)]),
    quantity:new FormControl('',[Validators.required,Validators.min(0)]),
    like:new FormControl('',[Validators.required,Validators.min(0)])
  })

  ngOnInit(){
    //1- recuperer l'id depuis l'url
    this.id=this.act.snapshot.params['id']
    //2- recuperer le produit de l'id deja recuperer
    this.consP.getProductById(this.id).subscribe(
      (data)=>{this.p=data
        //3- remplir formulaire avec p
        this.registerForm.patchValue(this.p as any)
      }
    )
  }
  save(){
    //-4Etape : la mise à jour
    this.consP.updateProduct(this.registerForm.value as any,this.id).subscribe(
      ()=>this.route.navigateByUrl('/product')
    )

  }

}

