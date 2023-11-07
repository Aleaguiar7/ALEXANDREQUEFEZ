import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ItemService } from './service/item.service'; // Importe o serviço de item
import { ListItemComponent } from './list-item/list-item.component';
import { RegisterItemComponent } from './register-item/register-item.component';
import { ModalItemComponent } from './modal-item/modal-item.component';

@NgModule({
  declarations: [
    ListItemComponent,
    RegisterItemComponent,
    ModalItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  providers: [
    ItemService, // Adicione o serviço de item aos providers
  ],
})
export class ItemModule {}