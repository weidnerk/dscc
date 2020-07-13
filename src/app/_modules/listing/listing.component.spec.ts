import { ComponentFixture, TestBed, fakeAsync, tick, inject } from '@angular/core/testing';
import { ListingdbComponent } from './listing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { AppOverlayModule } from '../../overlay/overlay.module';
import { ProgressSpinnerModule } from '../../progress-spinner/progress-spinner.module';
import { RouterModule } from '@angular/router';
import { OrderHistoryService } from '../../_services/orderhistory.service';
import { HttpClientModule } from '@angular/common/http';
import { ParamService } from '../../_services/param.service';
import { ListCheckService } from '../../_services/listingcheck.service';
import { MatCardModule } from '@angular/material/card';
import { UserService } from 'src/app/_services';
import { UserSettingsView } from 'src/app/_models/userprofile';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


fdescribe('Listing Component tests', () => {
  userSettingsView: UserSettingsView;
  let service: UserService;
  let component: ListingdbComponent;
  let fixture: ComponentFixture<ListingdbComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations:
        [ListingdbComponent
        ],
      imports:
        [HttpClientTestingModule,
          FormsModule,
          ReactiveFormsModule,
          MatButtonModule,
          MatCheckboxModule,
          MatExpansionModule,
          MatFormFieldModule,
          MatIconModule,
          MatInputModule,
          MatMenuModule,
          MatPaginatorModule,
          MatProgressBarModule,
          MatProgressSpinnerModule,
          MatSelectModule,
          MatSlideToggleModule,
          MatSortModule,
          MatTableModule,
          MatToolbarModule,
          MatTooltipModule,
          MatDialogModule,
          MatTabsModule,
          AppOverlayModule,
          ProgressSpinnerModule,
          HttpClientModule,
          MatCardModule,
          RouterModule.forRoot([])
        ],
      providers: [
        OrderHistoryService,
        ParamService,
        ListCheckService,
        UserService]
    })
    service = TestBed.get(UserService);
    fixture = TestBed.createComponent(ListingdbComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  });

  it('is listing component defined', () => {
    expect(component).toBeDefined();
  })
  it('is form valid when empty', () => {

    let listingTitle = component.listingForm.controls['listingTitle'];
    listingTitle.setValue('some listing title');
    
    let listingPrice = component.listingForm.controls['listingPrice'];
    listingPrice.setValue(100.00);

    let listingQty = component.listingForm.controls['listingQty'];
    listingQty.setValue(1);

    let sourceURL = component.listingForm.controls['sourceURL'];
    sourceURL.setValue('some source URL');

    let description = component.listingForm.controls['description'];
    description.setValue('description');

    let sellerItemID = component.listingForm.controls['sellerItemID'];
    sellerItemID.setValue('itemID');

    expect(component.listingForm.valid).toBeTruthy();
  })
});
