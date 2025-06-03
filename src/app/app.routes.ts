import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { ContactusComponent } from './features/contactus/contactus/contactus.component';

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
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: '/dashboard' }
];
