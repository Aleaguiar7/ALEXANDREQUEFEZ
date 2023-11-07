import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPedidoComponent } from './register-pedido.component';

describe('RegisterPedidoComponent', () => {
  let component: RegisterPedidoComponent;
  let fixture: ComponentFixture<RegisterPedidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterPedidoComponent]
    });
    fixture = TestBed.createComponent(RegisterPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
