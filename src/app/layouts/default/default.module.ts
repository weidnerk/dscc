/*
* Taken from https://www.youtube.com/watch?v=FP7Hs8lTy1k&t=293s
*
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardService } from 'src/app/_services/dashboard.service';
import { DefaultComponent } from './default.component';
import { MatTabsModule } from '@angular/material/tabs';
import { AppOverlayModule } from 'src/app/overlay/overlay.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms'; // not everything in its own module (like login)
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ProgressSpinnerModule } from 'src/app/progress-spinner/progress-spinner.module';
import { LoginComponent } from 'src/app/login/login.component';
import { MatPassToggleVisibilityComponent } from 'src/app/mat-pass-toggle-visibility/mat-pass-toggle-visibility.component';
import { RegisterComponent } from 'src/app/register/register.component';
import { ChangepasswordComponent } from 'src/app/changepassword/changepassword.component';
import { ForgotpasswordComponent } from 'src/app/forgotpassword/forgotpassword.component';
import { PasswordresetComponent } from 'src/app/passwordreset/passwordreset.component';
import { ListingnoteComponent } from 'src/app/listingnote/listingnote.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { ShowmessagesComponent } from 'src/app/showmessages/showmessages.component';
import { ConfirmComponent } from 'src/app/confirm/confirm.component';
import { EndlistingComponent } from 'src/app/endlisting/endlisting.component';
import { ErrordisplayComponent } from 'src/app/errordisplay/errordisplay.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ListCheckService } from 'src/app/_services/listingcheck.service';
import { OrderHistoryService } from 'src/app/_services/orderhistory.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from '../../_services/index';

@NgModule({
  declarations: [ 
    DefaultComponent,
    DashboardComponent,
    LoginComponent,
    MatPassToggleVisibilityComponent,
    RegisterComponent,
    ChangepasswordComponent,
    ForgotpasswordComponent,
    PasswordresetComponent,
    ListingnoteComponent,
    ShowmessagesComponent,
    ConfirmComponent,
    EndlistingComponent,
    ErrordisplayComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatTabsModule,
    AppOverlayModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    ProgressSpinnerModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatInputModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    FlexLayoutModule,
    SharedModule,
    MatDividerModule,
    MatSidenavModule,
    MatDialogModule,
    MatIconModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
      },
    DashboardService, 
    ListCheckService, /* still needed by Listing? */
    OrderHistoryService /* needed by sidebar */
  ]
})
export class DefaultModule { }
