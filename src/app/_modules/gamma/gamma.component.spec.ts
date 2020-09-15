import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GammaComponent } from './gamma.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { OrderHistoryService } from 'src/app/_services/orderhistory.service';
import { UserService } from 'src/app/_services';

xdescribe('GammaComponent', () => {
  let component: GammaComponent;
  let fixture: ComponentFixture<GammaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GammaComponent],
      imports: [
        HttpClientTestingModule,
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
    fixture = TestBed.createComponent(GammaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
