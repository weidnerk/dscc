import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListinglogComponent } from './listinglog.component';
import { RouterModule } from '@angular/router';
import { OrderHistoryService } from '../_services/orderhistory.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { ListingLogView } from '../_models/orderhistory';

describe('ListinglogComponent', () => {
  let component: ListinglogComponent;
  let fixture: ComponentFixture<ListinglogComponent>;
  let orderHistoryService: OrderHistoryService;
  let created = new Date();
  let expectedArg: ListingLogView[] = [{ id: 123, listingID: 1, note: 'note', message: 'msg', userName: 'user', created: created }];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListinglogComponent],
      imports: [HttpClientTestingModule,
        RouterModule.forRoot([])],
      providers: [
        {
          provide: OrderHistoryService, useValue: {
            getListingLog: () => of(expectedArg)
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListinglogComponent);
    component = fixture.componentInstance;

    orderHistoryService = TestBed.get(OrderHistoryService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   * Taken from https://medium.com/@ranostaj/unit-testing-angular-8-components-with-services-2863ed2b5fed
   */
  it('should load listing log', () => {
    spyOn(orderHistoryService, 'getListingLog')
      .and
      .callThrough();
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.dataSource.data).toEqual(expectedArg);
  });
});
