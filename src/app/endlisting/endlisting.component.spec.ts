import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndlistingComponent } from './endlisting.component';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

describe('EndlistingComponent', () => {
  let component: EndlistingComponent;
  let fixture: ComponentFixture<EndlistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EndlistingComponent],
      imports: [MatDialogModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndlistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
