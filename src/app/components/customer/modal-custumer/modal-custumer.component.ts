import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from 'src/app/shared/models/customer.model';

@Component({
  selector: 'app-modal-custumer',
  templateUrl: './modal-custumer.component.html',
  styleUrls: ['./modal-custumer.component.css']
})
export class ModalCustumerComponent implements OnInit {
  @Input() customer: Customer = new Customer ();

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() : void {

  }
}
