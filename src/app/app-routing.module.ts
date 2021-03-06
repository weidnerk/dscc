import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_guards/index';
import { DefaultComponent } from './layouts/default/default.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';

const routes: Routes = [
    {
        path: '',
        component: DefaultComponent,
        children: [{
            path: '',
            component: DashboardComponent,
            canActivate: [AuthGuard]
        },
        {
            path: 'gamma/:listed',
            loadChildren: () => import('./_modules/gamma/gamma.module').then(m => m.GammaModule),
            canActivate: [AuthGuard]
        },
        {
            path: 'gamma',
            loadChildren: () => import('./_modules/gamma/gamma.module').then(m => m.GammaModule),
            canActivate: [AuthGuard]
        },
        {
            path: 'listingdetaildb/:listingID',
            loadChildren: () => import('./_modules/listing/listing.module').then(m => m.ListingdbModule),
            canActivate: [AuthGuard]
        },
        {
            path: 'apikeys',
            loadChildren: () => import('./_modules/apikeys/apikeys.module').then(m => m.ApikeysModule),
            canActivate: [AuthGuard]
        },
        {
            path: 'usersettings',
            loadChildren: () => import('./_modules/usersettings/usersettings.module').then(m => m.UsersettingsModule),
            canActivate: [AuthGuard]
        },
        { path: 'changepassword', 
            component: ChangepasswordComponent
        }
    ]
    },
    { 
        path: 'login', component: LoginComponent 
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    { path: 'forgotpassword', 
        component: ForgotpasswordComponent
    },
    { path: '**', 
        component: DefaultComponent,
        children: [{
            path: '',
            component: DashboardComponent,
            canActivate: [AuthGuard]
        }],
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],    /* This lets Angular know that the AppRoutingModule is a routing module and forRoot() specifies that this is the root routing module */
    exports: [RouterModule]
})
export class AppRoutingModule { }
