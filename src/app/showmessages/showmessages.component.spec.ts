import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowmessagesComponent } from './showmessages.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

describe('ShowmessagesComponent', () => {
  let component: ShowmessagesComponent;
  let fixture: ComponentFixture<ShowmessagesComponent>;

  // mock object with close method
  const dialogMock = {
    close: () => { }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShowmessagesComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: [] },
        { provide: MatDialogRef, useValue: dialogMock }
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

  /**
   * Taken from https://stackoverflow.com/questions/54108924/this-dialogref-close-is-not-a-function-error/54109919
   * Used so I can get coverage on the component method, onCancel().
   */
  it('dialog should be closed after onCancel()', () => {
    let spy = spyOn(component.dialogRef, 'close').and.callThrough();
    component.onCancel();
    expect(spy).toHaveBeenCalled(); 
  });
});
