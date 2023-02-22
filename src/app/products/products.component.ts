import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {

  items:any=[
    {nombre:"Açaí",precio:"1€",img:"../../assets/products/açai.jpeg"},
    {nombre:"Banana",precio:"1€",img:"../../assets/products/banana.jpeg"},
    {nombre:"Cereza",precio:"1€",img:"../../assets/products/cereza.jpeg"},
    {nombre:"Melocotón",precio:"1€",img:"../../assets/products/melocoton.jpeg"},
    {nombre:"Piña",precio:"1€",img:"../../assets/products/piña.jpeg"},
    {nombre:"Fresa",precio:"1€",img:"../../assets/products/fresa.jpeg"},
  ]

  title="soy tooltip";
  imred=true;
  constructor() { }

  ngOnInit(): void {
  }

  changeRed(dato:any){
    console.log(dato);
    this.imred=!this.imred;
  }

}
