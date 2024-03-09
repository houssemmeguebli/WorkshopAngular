import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  login=new FormControl('amir',Validators.required)
  pwd=new FormControl('',Validators.required)

  registerForm:FormGroup=new FormGroup({
    login:new FormControl('',[Validators.required,Validators.minLength(6)]),
    pwd:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*')]),

  })

  save(){
    console.log(this.registerForm.value)

  }
  reset(){
    this.registerForm.reset()
  }
}
