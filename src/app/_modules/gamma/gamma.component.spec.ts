import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GammaComponent } from './gamma.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { OrderHistoryService } from 'src/app/_services/orderhistory.service';
import { UserService } from 'src/app/_services';
import { ProgressSpinnerModule } from 'src/app/progress-spinner/progress-spinner.module';
import { AppOverlayModule } from 'src/app/overlay/overlay.module';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('GammaComponent', () => {
  let component: GammaComponent;
  let fixture: ComponentFixture<GammaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GammaComponent],
      imports: [
        BrowserAnimationsModule,
        HttpClientTestingModule,
        MatDialogModule,
        FormsModule,
        ReactiveFormsModule,
        ProgressSpinnerModule,
        AppOverlayModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatMenuModule,
        MatSelectModule,
        MatCheckboxModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatExpansionModule,
        MatSlideToggleModule,
        MatToolbarModule,
        MatDialogModule,
        MatTableModule,
        RouterModule.forRoot([])],
      providers: [OrderHistoryService,
        UserService]
    })
    .compileComponents();

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
