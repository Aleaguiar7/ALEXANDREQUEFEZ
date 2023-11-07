import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/shared/models/pedido.model';
import { ComprasService } from '../services/compras.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerService } from '../../customer/service/customer.service';
import { Customer } from 'src/app/shared/models/customer.model';

@Component({
  selector: 'app-list-compras',
  templateUrl: './list-compras.component.html',
  styleUrls: ['./list-compras.component.css'],
})
export class ListComprasComponent implements OnInit {
  id_customer!: number;
  customer!: Customer;
  pedidos!: Pedido[]; // Lista de todos os pedidos
  pedidosFiltrados!: Pedido[]; // Lista de pedidos filtrados

  constructor(private comprasService: ComprasService, private customerService: CustomerService) {}

  ngOnInit(): void {}

  carregarCustomer() {
    this.comprasService.findById(this.id_customer).subscribe((customer: Customer) => {
      this.customer = customer;
  
      // Carregue a lista completa de pedidos
      this.comprasService.getAllPedidos().subscribe((pedidos: Pedido[]) => {
        this.pedidos = pedidos;
  
        // Filtrar os pedidos do Customer especificado
        this.filtrarPedidos();
      });
    });
  }

  filtrarPedidos() {
    // Verifique se this.pedidos está definido
    if (this.pedidos) {
      // Filtrar os pedidos do Customer especificado
      this.pedidosFiltrados = this.pedidos.filter((pedido) => {
        return pedido?.cliente?.id_customer === this.id_customer;
      });
    }
  }
}

