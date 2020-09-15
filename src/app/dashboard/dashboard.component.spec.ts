import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { OrderHistoryService } from '../_services/orderhistory.service';
import { RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from '../_services';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [HttpClientTestingModule,
        RouterModule.forRoot([])],
      providers: [OrderHistoryService,
        UserService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
