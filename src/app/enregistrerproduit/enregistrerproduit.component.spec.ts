import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnregistrerproduitComponent } from './enregistrerproduit.component';

describe('EnregistrerproduitComponent', () => {
  let component: EnregistrerproduitComponent;
  let fixture: ComponentFixture<EnregistrerproduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnregistrerproduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnregistrerproduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
