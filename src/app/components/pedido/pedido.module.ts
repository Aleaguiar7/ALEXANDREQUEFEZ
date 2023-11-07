import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ListPedidoComponent } from './list-pedido/list-pedido.component';
import { RegisterPedidoComponent } from './register-pedido/register-pedido.component';

import { PedidoService } from './service/pedido.service';
import { ModalPedidoComponent } from './modal-pedido/modal-pedido.component';

@NgModule({
  declarations: [
    ListPedidoComponent,
    RegisterPedidoComponent,
    ModalPedidoComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule, // Adicione se você estiver usando rotas
  ],
  providers: [PedidoService], // Adicione outros serviços aqui
})
export class PedidoModule {}
