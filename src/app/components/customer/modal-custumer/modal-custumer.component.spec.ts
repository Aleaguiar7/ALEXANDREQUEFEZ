import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCustumerComponent } from './modal-custumer.component';

describe('ModalCustumerComponent', () => {
  let component: ModalCustumerComponent;
  let fixture: ComponentFixture<ModalCustumerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalCustumerComponent]
    });
    fixture = TestBed.createComponent(ModalCustumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
