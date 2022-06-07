import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngAppComponent } from './ang-app.component';

describe('AngAppComponent', () => {
  let component: AngAppComponent;
  let fixture: ComponentFixture<AngAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
