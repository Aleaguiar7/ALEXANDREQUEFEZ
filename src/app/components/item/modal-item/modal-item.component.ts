import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Item } from 'src/app/shared/models/item.model'; // Importe o modelo Item

@Component({
  selector: 'app-modal-item',
  templateUrl: './modal-item.component.html',
  styleUrls: ['./modal-item.component.css']
})
export class ModalItemComponent implements OnInit {
  @Input() item: Item = new Item();

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    // Lógica de inicialização, se necessário
  }
}
