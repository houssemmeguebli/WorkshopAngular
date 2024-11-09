import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';  // <-- Import HttpClientModule here

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ResidencesComponentComponent } from './residences-component/residences-component.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormComponent } from './form/form.component';

// Angular modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material modules
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

// Animations module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {UniversityListComponent} from "./university-list/university-list.component";
import {MatDialogModule} from "@angular/material/dialog";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ResidencesComponentComponent,
    NavbarComponent,
    NotfoundComponent,
    FormComponent// <-- Add the component to the declarations array
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    UniversityListComponent,
    MatDialogModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
