import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsService } from './service/product.service';
import { ListProductComponent } from './list-product/list-product.component';

import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RegisterProductComponent } from './register-product/register-product.component';

@NgModule({
  declarations: [
    ListProductComponent,
    RegisterProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers:[
    ProductsService
  ]
})
export class ProductsModule { }
