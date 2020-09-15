import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersettingsComponent } from './usersettings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderHistoryService } from 'src/app/_services/orderhistory.service';
import { RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from 'src/app/_services';
import { MatDialogModule } from '@angular/material/dialog';

xdescribe('UsersettingsComponent', () => {
  let component: UsersettingsComponent;
  let fixture: ComponentFixture<UsersettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsersettingsComponent],
      imports: [HttpClientTestingModule,
        MatDialogModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([])],
      providers: [OrderHistoryService,
        UserService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
