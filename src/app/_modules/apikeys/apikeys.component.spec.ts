import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApikeysComponent } from './apikeys.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from 'src/app/_services';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

xdescribe('ApikeysComponent', () => {
  let component: ApikeysComponent;
  let fixture: ComponentFixture<ApikeysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApikeysComponent ],
      imports: [HttpClientTestingModule,
        MatDialogModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([])],
        providers: [UserService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApikeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
