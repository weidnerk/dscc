import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListinglogComponent } from './listinglog.component';
import { RouterModule } from '@angular/router';
import { OrderHistoryService } from '../_services/orderhistory.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ListinglogComponent', () => {
  let component: ListinglogComponent;
  let fixture: ComponentFixture<ListinglogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListinglogComponent],
      imports: [HttpClientTestingModule,
        RouterModule.forRoot([])],
      providers: [OrderHistoryService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListinglogComponent);
    component = fixture.componentInstance;
    // component.listingID = 1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
