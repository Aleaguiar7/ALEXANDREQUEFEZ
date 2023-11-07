import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComprasService } from './services/compras.service';
import { ListComprasComponent } from './list-compras/list-compras.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RegisterComprasComponent } from './register-compras/register-compras.component';
import { ModalComprasComponent } from './modal-compras/modal-compras.component';


@NgModule({
  declarations: [
    ListComprasComponent,
    RegisterComprasComponent,
    ModalComprasComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule

  ],

  providers: [
    ComprasService
  ]
})
export class ComprasModule { }
