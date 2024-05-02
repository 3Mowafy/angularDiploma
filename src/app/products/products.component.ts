import { Component, Input } from '@angular/core';

type Product = {
  name: string,
  image: string,
  price: number,
  description: string
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})

export class ProductsComponent {
  @Input() products!: Product[]
}
