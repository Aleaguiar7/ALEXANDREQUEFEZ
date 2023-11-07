import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/shared/models/products.model';
import { ProductsService } from '../service/product.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})
export class RegisterProductComponent implements OnInit{
  @ViewChild("formProduct") formProduct! : NgForm;
  product! : Product;
  
  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    let id = + this.route.snapshot.params['id'];

    const res = this.productService.findById(id);
    if(res !== undefined){
      this.product = res;
    } else {
      this.product = new Product();
    }
  }

  update(): void{
    if(this.formProduct.form.valid){
      if(this.product.id){
        this.productService.update(this.product);
      } else {
        this.productService.insert(this.product);
      }
      this.router.navigate(['/product'])
    }
  }
}
