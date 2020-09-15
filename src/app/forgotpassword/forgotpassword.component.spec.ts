import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotpasswordComponent } from './forgotpassword.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../_services';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ForgotpasswordComponent', () => {
  let component: ForgotpasswordComponent;
  let fixture: ComponentFixture<ForgotpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ForgotpasswordComponent],
      imports:
        [HttpClientTestingModule,
          FormsModule,
          ReactiveFormsModule,
          RouterModule.forRoot([])],
      providers: [
        UserService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
