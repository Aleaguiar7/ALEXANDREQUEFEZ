import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCustomerComponent } from './components/customer/list-customer/list-customer.component';
import { RegisterCustomerComponent } from './components/customer/register-customer/register-customer.component';
import { IndexComponent } from './components/home/index/index.component';
import { ListItemComponent } from './components/item/list-item/list-item.component';
import { RegisterItemComponent } from './components/item/register-item/register-item.component';
import { ListPedidoComponent } from './components/pedido/list-pedido/list-pedido.component';
import { RegisterPedidoComponent } from './components/pedido/register-pedido/register-pedido.component';
import { ListComprasComponent } from './components/compras/list-compras/list-compras.component';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    pathMatch: 'full',
  },

  {
    path: 'item',
    children: [
      { path: 'list', component: ListItemComponent },
      { path: 'register', component: RegisterItemComponent },
      { path: 'register/:id_item', component: RegisterItemComponent },
    ],
  },

  {
    path: 'customer',
    children: [
      { path: 'list', component: ListCustomerComponent },
      { path: 'register', component: RegisterCustomerComponent },
      { path: 'register/:id_customer', component: RegisterCustomerComponent },
    ],
  },
  {
    path: 'pedido',
    children: [
      { path: 'list', component: ListPedidoComponent },
      { path: 'register', component: RegisterPedidoComponent },
      { path: 'register/:id_pedido', component: RegisterPedidoComponent },
    ],
  },
  {
    path: 'compras',
    children: [
      { path: 'list', component: ListComprasComponent },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
