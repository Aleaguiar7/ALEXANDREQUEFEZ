import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { Customer } from 'src/app/shared/models/customer.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalCustumerComponent } from '../modal-custumer/modal-custumer.component';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customers: Customer[] = [];

  constructor(
    private customerService: CustomerService,
    private modalService: NgbModal,
  ) {}

  ngOnInit(): void {
    this.customers = [];
    this.listAllCustomers();
  }

  listAllCustomers(): Customer[]{
    this.customerService.listAll().subscribe({
      next: (data: Customer[]) => {
        if (data == null){
          this.customers = [];
        }
        else {
          this.customers = data;
        }
        }
      });
      return this.customers;
  }

  remover(customer: Customer): void {
    if (confirm(`Deseja realmente remover o usuário "${customer.firstName}"?`)) {
      this.customerService.remove(customer.id_customer!).subscribe(() => {
        this.listAllCustomers();
      });
    }
  }

  abrirModal (customer: Customer) {
    const modalRef = this.modalService.open(ModalCustumerComponent);
    modalRef.componentInstance.customer = customer;
    
  }

  

}
