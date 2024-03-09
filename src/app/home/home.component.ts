import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title: string = 'Welcome 4SE5';
  color:string="red"

  msg(){
    alert('hello')
    console.log('hello')
  }
}
