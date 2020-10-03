import { APP_BASE_HREF } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { UserService } from 'src/app/_services';
import { OrderHistoryService } from 'src/app/_services/orderhistory.service';

import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarComponent],
      imports: [RouterModule.forRoot([]),
        HttpClientTestingModule],
      providers: [
        OrderHistoryService,
        UserService,
        { provide: APP_BASE_HREF, useValue: '/' }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should pass getUserProfile', () => {
    const mockLocalStorage = {
      // supposed to return a string of JSON
      getItem: (key: string): string | null => {
        if (key === "currentUser") {
          return JSON.stringify({ "access_token": "sometoken" });
        }
        else {
          return null;
        }
      }
    };
    spyOn(localStorage, 'getItem')
      .and.callFake(mockLocalStorage.getItem);

    component.getUserProfile();
  });
});
