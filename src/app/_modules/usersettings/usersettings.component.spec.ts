import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersettingsComponent } from './usersettings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderHistoryService } from 'src/app/_services/orderhistory.service';
import { RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from 'src/app/_services';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('UsersettingsComponent', () => {
  let component: UsersettingsComponent;
  let fixture: ComponentFixture<UsersettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsersettingsComponent],
      imports: [HttpClientTestingModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
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
