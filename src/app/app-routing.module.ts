import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LocationComponent } from './location/location.component';
import { OkifyComponent } from './okify/okify.component';
import { ProductsComponent } from './products/products.component';
import { TechnologiesComponent } from './technologies/technologies.component';

const routes: Routes = [
  {path: '', component:AboutComponent},
  {path: 'about', component:AboutComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'products', component:ProductsComponent},
  {path: 'location', component:LocationComponent},
  {path: 'okify', component: OkifyComponent},
  {path: 'tech', component:TechnologiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
