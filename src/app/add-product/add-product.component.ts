import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

type Product = {
  name: string,
  image: string,
  price: number,
  description: string
}

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {
  @Output() newProductEvent = new EventEmitter<Product>();
  isSubmitted: boolean = false

  addProduct: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  })


  uploadImg(event: any) {
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file)
    fileReader.onload = () => {
      this.addProduct.value.image = fileReader.result
    }
  }

  emitProduct() {
    this.newProductEvent.emit(this.addProduct.value)
    this.isSubmitted = true
  }

  resetImg(event: any) {
    if (this.isSubmitted) {
      this.addProduct.reset()
      event.value = null
    }

  }
}
