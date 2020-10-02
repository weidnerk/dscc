import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingnoteComponent } from './listingnote.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderHistoryService } from '../_services/orderhistory.service';
import { RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Listing } from '../_models/orderhistory';

describe('ListingnoteComponent', () => {
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
    const stubListing = new Listing();
    stubListing.ItemID = "000";
    stubListing.StoreID = 4;
    component.listing = stubListing; 
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
