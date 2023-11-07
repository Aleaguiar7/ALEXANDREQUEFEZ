import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerService } from '../service/customer.service';
import { Customer } from 'src/app/shared/models/customer.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {
  @ViewChild("formCustomer") formCustomer!: NgForm;
  customer: Customer = new Customer();
  loading: boolean = false;

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id_customer = +params['id_customer']; // Obtenha o ID do cliente da URL
      if (id_customer) {
        this.customerService.findById(id_customer).subscribe(
          customer => {
            this.customer = customer; // Carregue os dados do cliente a ser editado
          },
          error => {
            console.error("Erro ao obter os dados do cliente:", error);
          }
        );
      }
    });
  }

  salvar(): void {
    this.loading = true;
    
    if (this.formCustomer.form.valid) {
      if (this.customer.id_customer) {
        this.customerService.update(this.customer).subscribe(
          () => {
            this.loading = false;
            this.router.navigate(["/customer/list"]);
          },
          error => {
            console.error("Erro ao atualizar o cliente:", error);
            this.loading = false;
            // Adicione um tratamento de erro adequado aqui, como exibir uma mensagem de erro ao usuário.
          }
        );
      } else {
        this.customerService.insert(this.customer).subscribe(
          () => {
            this.loading = false;
            this.router.navigate(["/customer/list"]);
          },
          error => {
            console.error("Erro ao inserir o cliente:", error);
            this.loading = false;
            // Adicione um tratamento de erro adequado aqui, como exibir uma mensagem de erro ao usuário.
          }
        );
      }
    }
  }
}
