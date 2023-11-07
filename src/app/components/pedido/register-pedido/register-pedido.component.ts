import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/shared/models/pedido.model';
import { Customer } from 'src/app/shared/models/customer.model';
import { Item } from 'src/app/shared/models/item.model';
import { PedidoService } from '../service/pedido.service';
import { CustomerService } from '../../customer/service/customer.service';
import { ItemService } from '../../item/service/item.service';

@Component({
  selector: 'app-register-pedido',
  templateUrl: './register-pedido.component.html',
  styleUrls: ['./register-pedido.component.css'],
})
export class RegisterPedidoComponent implements OnInit {
  id_customer!: number;
  customer: Customer | undefined;
  id_item!: number;
  item: Item | undefined = undefined;
  quantidade: number | undefined;
  valorFinal: number | undefined;
  firstName!: string;
  secondName!: string;
  nome_item!: string;
  valor!: number;
  itens: Item[] = [];

  pedidos: Pedido[] = [];

  constructor(
    private pedidoService: PedidoService,
    private customerService: CustomerService,
    private itemService: ItemService
  ) {}

  ngOnInit(): void {
    this.carregarItens();
  }

  buscarCliente() {
    if (this.id_customer) {
      this.customerService.findById(this.id_customer).subscribe((customer) => {
        this.customer = customer;
        this.firstName = customer.firstName || '';
        this.secondName = customer.secondName || '';
      });
    }
  }

  buscarItem() {
    if (this.id_item) {
      this.itemService.findById(this.id_item).subscribe((item) => {
        this.item = item;
        this.nome_item = item.nome_item || '';
        this.valor = item.valor || 0;
        this.calcularValorFinal();
      });
    }
  }

  calcularValorFinal() {
    if (this.item && this.quantidade) {
      this.valorFinal = this.item.valor && this.quantidade ? this.item.valor * this.quantidade : undefined;
    } else {
      this.valorFinal = undefined;
    }
  }

  cadastrarPedido() {
    if (this.customer && this.item && this.quantidade) {
      const novoPedido = new Pedido(
        undefined, // id_pedido é indefinido, pois será gerado pelo servidor
        this.quantidade,
        this.customer,
        this.item
      );

      this.pedidoService.insert(novoPedido).subscribe(
        (response) => {
          console.log('Pedido cadastrado com sucesso:', response);
          // Aqui você pode redirecionar ou fazer outras ações após o cadastro bem-sucedido.
        },
        (error) => {
          console.error('Erro ao cadastrar pedido:', error);
          // Trate o erro adequadamente
        }
      );
    }
  }

  carregarItens() {
    this.itemService.listAll().subscribe((itens) => {
      this.itens = itens;
    });
  }

  
}
