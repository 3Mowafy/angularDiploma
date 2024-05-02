import { Component } from '@angular/core';

type Product = {
  name: string,
  image: string,
  price: number,
  description: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  products: Product[] = [
    {
      name: "iPhone 9",
      image: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
      price: 549,
      description: "An apple mobile which is nothing like apple"
    },
    {
      name: "iPhone X",
      image: "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
      price: 899,
      description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with"
    },
    {
      name: "Samsung Universe 9",
      image: "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
      price: 1249,
      description: "Samsung's new variant which goes beyond Galaxy to the Universe"
    },
    {
      name: "OPPOF19",
      image: "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg",
      price: 280,
      description: "OPPO F19 is officially announced on April 2021."
    },
    {
      name: "Huawei P30",
      image: "https://cdn.dummyjson.com/product-images/5/thumbnail.jpg",
      price: 499,
      description: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK."
    },
    {
      name: "MacBook Pro",
      image: "https://cdn.dummyjson.com/product-images/6/thumbnail.png",
      price: 1749,
      description: "MacBook Pro 2021 with mini-LED display may launch between September, November"
    },
    {
      name: "Samsung Galaxy Book",
      image: "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg",
      price: 1499,
      description: "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched"
    },
    {
      name: "Microsoft Surface Laptop 4",
      image: "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg",
      price: 1499,
      description: "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen."
    },
  ];

  addProduct(event: Product) {
    this.products.unshift(event)
  }

}
