import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { ContactusComponent } from './features/contactus/contactus/contactus.component';
import { ServicesComponent } from './features/services/services/services.component';
import { PricingComponent } from './features/pricing/pricing/pricing.component';

export const routes: Routes = [
    // {
    //     path: 'login',
    //     component: LoginComponent,
    //     canActivate: [loginGuard]
    // },
    {
        path: 'dashboard',
        component: DashboardComponent,
        //canActivate: [authGuard]
    },
    {
        path: 'contactus',
        component: ContactusComponent
    },
    {
        path: 'services',
        component: ServicesComponent
    },
    {
        path: 'pricing',
        component: PricingComponent
    },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: '/dashboard' }
];
