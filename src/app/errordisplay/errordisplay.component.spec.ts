import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrordisplayComponent } from './errordisplay.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

describe('ErrordisplayComponent', () => {
  let component: ErrordisplayComponent;
  let fixture: ComponentFixture<ErrordisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrordisplayComponent ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrordisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
