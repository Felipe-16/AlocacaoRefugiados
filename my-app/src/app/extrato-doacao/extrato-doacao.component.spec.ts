import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtratoDoacaoComponent } from './extrato-doacao.component';

describe('ExtratoComponent', () => {
  let component: ExtratoDoacaoComponent;
  let fixture: ComponentFixture<ExtratoDoacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtratoDoacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtratoDoacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
