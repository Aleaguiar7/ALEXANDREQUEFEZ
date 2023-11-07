import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from './components/home/home.module';
import { ProductsModule } from './components/product/product.module';
import { ComprasModule } from './components/compras/compras.module';
import { CustomerModule } from './components/customer/customer.module';
import { ItemModule } from './components/item/item.module';
import { PedidoModule } from './components/pedido/pedido.module';


@NgModule({
  declarations: [AppComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    ProductsModule,
    ComprasModule,
    CustomerModule,
    ItemModule,
    PedidoModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
