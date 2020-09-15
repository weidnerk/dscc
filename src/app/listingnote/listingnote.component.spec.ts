import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingnoteComponent } from './listingnote.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderHistory } from '../_models/orderhistory';
import { OrderHistoryService } from '../_services/orderhistory.service';
import { RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';

xdescribe('ListingnoteComponent', () => {
  let component: ListingnoteComponent;
  let fixture: ComponentFixture<ListingnoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListingnoteComponent],
      imports: [HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([])],
      providers: [
        OrderHistoryService,
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
