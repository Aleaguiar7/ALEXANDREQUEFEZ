import { Component, Input, OnInit } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Compras } from 'src/app/shared/models/compras.model';

@Component({
  selector: 'app-modal-compras',
  templateUrl: './modal-compras.component.html',
  styleUrls: ['./modal-compras.component.css']
})


export class ModalComprasComponent implements OnInit {

  @Input() compras!: Compras;

  constructor(public NgbActiveModal: NgbActiveModal) {

  }

  ngOnInit(): void {

  }


}
