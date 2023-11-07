import { Injectable } from '@angular/core';

import { Product } from 'src/app/shared/models/products.model';

const LS_KEY: string = 'product'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  listAll(): Product[] {
    const products = localStorage[LS_KEY];
    return products ? JSON.parse(products) : [];
  }

  insert(product: Product): void {
    const products = this.listAll();
    product.id = new Date().getTime();
    products.push(product);
    localStorage[LS_KEY] = JSON.stringify(products);
  }

  findById(id: number): Product | undefined {
    const products: Product[] = this.listAll();
    return products.find(product => product.id === id);
  }

  update(product: Product): void {
    const products: Product[] = this.listAll();

    products.forEach((obj, index, objs) => {
      if (product.id === obj.id) {
        console.log("obj", obj, "index", index, "objs", objs);
        objs[index] = product;
      }
    });

    localStorage[LS_KEY] = JSON.stringify(products);
  }

  remove(id: number): void {
    let products: Product[] = this.listAll();

    products = products.filter(product => product.id !== id);
    localStorage[LS_KEY] = JSON.stringify(products);
  }
}
