import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {

  items:any=[
    {nombre:"Açaí",img:"../../assets/products/açai.jpeg"},
    {nombre:"Banana",img:"../../assets/products/banana.jpeg"},
    {nombre:"Cereza",img:"../../assets/products/cereza.jpeg"},
    // {nombre:"Manzana verde",img:"../../assets/products/mverde.jpeg"},
    {nombre:"Melocotón",img:"../../assets/products/melocoton.jpeg"},
    {nombre:"Piña",img:"../../assets/products/piña.jpeg"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
