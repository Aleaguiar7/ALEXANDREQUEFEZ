import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerService } from './service/customer.service';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { ModalCustumerComponent } from './modal-custumer/modal-custumer.component';


@NgModule({
  declarations: [
    ListCustomerComponent,
    RegisterCustomerComponent,
    ModalCustumerComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers:[
    CustomerService
  ]
})
export class CustomerModule { }
