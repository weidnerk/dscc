import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowmessagesComponent } from './showmessages.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

describe('ShowmessagesComponent', () => {
  let component: ShowmessagesComponent;
  let fixture: ComponentFixture<ShowmessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowmessagesComponent ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowmessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
