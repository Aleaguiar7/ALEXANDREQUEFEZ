import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComprasComponent } from './register-compras.component';

describe('RegisterComprasComponent', () => {
  let component: RegisterComprasComponent;
  let fixture: ComponentFixture<RegisterComprasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComprasComponent]
    });
    fixture = TestBed.createComponent(RegisterComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
