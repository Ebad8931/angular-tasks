import { Routes } from '@angular/router';
import { TwoSumComponent } from './components/two-sum/two-sum.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },  // Default route
    { path: 'two-sum', component: TwoSumComponent },
    { path: '**', redirectTo: '' }
];
