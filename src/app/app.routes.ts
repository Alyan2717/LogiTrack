import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';

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
    // {
    //     path: 'contacts',
    //     component: ContactComponent
    // },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: '/dashboard' }
];
