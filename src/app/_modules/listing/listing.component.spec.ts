import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Listing, SupplierItem} from '../../_models/orderhistory';
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
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ListingComponent', () => {
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
    /* 
    not needed yet
    service = TestBed.get(UserService);
    */
    fixture = TestBed.createComponent(ListingdbComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  })
  it('should be valid when not empty', () => {

    let listingPrice = component.listingForm.controls['listingPrice'];
    listingPrice.setValue(100.00);

    let listingQty = component.listingForm.controls['listingQty'];
    listingQty.setValue(1);

    let sourceURL = component.listingForm.controls['sourceURL'];
    sourceURL.setValue('some source URL');

    let description = component.listingForm.controls['description'];
    description.setValue('item description');

    let sellerItemID = component.listingForm.controls['sellerItemID'];
    sellerItemID.setValue('itemID');

    expect(component.listingForm.valid).toBeTruthy();
  })
  it('should pass isFormValid()', () => {
    component.listing = new Listing();
    component.listing.PictureURL = "www.pictureurl.com";

    let listingTitle = component.listingForm.controls['listingTitle'];
    listingTitle.setValue('some listing title');

    let description = component.listingForm.controls['description'];
    description.setValue('item description');

    let supplierItem = new SupplierItem();
    supplierItem.SupplierPrice = 100;
    component.listing.SupplierItem = supplierItem;

    expect(component.isFormValid()).toBeNull();
  })
  it('should not pass isFormValid() when supplier price = 0', () => {
    component.listing = new Listing();
    component.listing.PictureURL = "www.pictureurl.com";

    let listingTitle = component.listingForm.controls['listingTitle'];
    listingTitle.setValue('some listing title');

    let description = component.listingForm.controls['description'];
    description.setValue('item description');

    let supplierItem = new SupplierItem();
    supplierItem.SupplierPrice = 0;
    component.listing.SupplierItem = supplierItem;

    expect(component.isFormValid()).not.toBeNull();
  })
  it('should not pass isFormValid() when listing price < 0', () => {
    component.listing = new Listing();
    component.listing.PictureURL = "www.pictureurl.com";

    let listingTitle = component.listingForm.controls['listingTitle'];
    listingTitle.setValue('some listing title');

    let listingPrice = component.listingForm.controls['listingPrice'];
    listingPrice.setValue(-1);

    let description = component.listingForm.controls['description'];
    description.setValue('item description');

    let supplierItem = new SupplierItem();
    supplierItem.SupplierPrice = 0;
    component.listing.SupplierItem = supplierItem;

    expect(component.isFormValid()).not.toBeNull();
  })
  it('should not pass isTitleValid() when title has a comma', () => {
    component.listing = new Listing();

    let listingTitle = component.listingForm.controls['listingTitle'];
    listingTitle.setValue('some, listing title');

    expect(component.isTitleValid()).not.toBeNull();
  })
  it('should not pass isTitleValid() when title contains the word, SHIPPING', () => {
    component.listing = new Listing();

    let listingTitle = component.listingForm.controls['listingTitle'];
    listingTitle.setValue('SHIPPING listing title');

    expect(component.isTitleValid()).not.toBeNull();
  })
  it('should not pass isTitleValid() when title contains the word, MULTIPLE', () => {
    component.listing = new Listing();

    let listingTitle = component.listingForm.controls['listingTitle'];
    listingTitle.setValue('MULTIPLE listing title');

    expect(component.isTitleValid()).not.toBeNull();
  })
});
