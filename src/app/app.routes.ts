import { Routes } from '@angular/router';
import { LoanapplicationComponent } from './pages/loanapplication/loanapplication.component';
import { ApplicationlistComponent } from './pages/applicationlist/applicationlist.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'newApplication',
        pathMatch:'full'
    },
    {
        path:'newApplication',
        component: LoanapplicationComponent
    },
    {
        path:'applicationList',
        component: ApplicationlistComponent
    },
];

