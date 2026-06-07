import { Routes } from '@angular/router';
import { TwoSumComponent } from './components/two-sum/two-sum.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ImageContainerComponent } from './components/image-container/image-container.component';
import { BasicCounterComponent } from './components/basic-counter/basic-counter.component';
import { KeyboardCounterComponent } from './components/keyboard-counter/keyboard-counter.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },  // Default route
    { path: 'two-sum', component: TwoSumComponent },
    { path: 'image-container', component: ImageContainerComponent },
    { path: 'basic-counter', component: BasicCounterComponent },
    { path: 'keyboard-counter', component: KeyboardCounterComponent },
    { path: '**', redirectTo: '' }
];
