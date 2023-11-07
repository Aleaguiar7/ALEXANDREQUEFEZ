import { Component, OnInit } from '@angular/core';
import { ItemService } from '../service/item.service';
import { Item } from 'src/app/shared/models/item.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalItemComponent } from '../modal-item/modal-item.component';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  items: Item[] = [];

  constructor(
    private itemService: ItemService,
    private modalService: NgbModal,
  ) {}

  ngOnInit(): void {
    this.items = [];
    this.listAllItems();
  }

  listAllItems(): void {
    this.itemService.listAll().subscribe({
      next: (data: Item[]) => {
        if (data == null) {
          this.items = [];
        } else {
          this.items = data;
        }
      }
    });
  }

  remover(item: Item): void {
    if (confirm(`Deseja realmente remover o item "${item.nome_item}"?`)) {
      this.itemService.remove(item.id_item!).subscribe(() => {
        this.listAllItems();
      });
    }
  }

  abrirModal(item: Item): void {
    const modalRef = this.modalService.open(ModalItemComponent);
    modalRef.componentInstance.item = item;
  }
}
