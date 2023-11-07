import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../service/product.service';
import { Product } from 'src/app/shared/models/products.model';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit{

  products: Product[] = []

  constructor(private productService : ProductsService){}
  ngOnInit():void{
    this.products = this.listAll();
  }
  
  listAll():Product[] {
    return this.productService.listAll()
  }
  
  remove($event: any, product: Product): void {
    $event.preventDefault();

    if (confirm(`Deseja realmente remover o cadastro com nome ${product.descrition}?`)) {
      this.productService.remove(product.id!);
      this.products = this.listAll();
    }
  }
}
