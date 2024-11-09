// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponentComponent } from './residences-component/residences-component.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { FormComponent } from './form/form.component';
import { UniversityListComponent } from './university-list/university-list.component';
import {NotfoundComponent} from "./notfound/notfound.component";

const routes: Routes = [
  { path: 'residence', component: ResidencesComponentComponent },
  { path: 'home', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'form', component: FormComponent },
  { path: 'university', component: UniversityListComponent },
  { path: '**',component : NotfoundComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
