import { Routes } from '@angular/router';
import { TwoSumComponent } from './components/two-sum/two-sum.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ImageContainerComponent } from './components/image-container/image-container.component';
import { BasicCounterComponent } from './components/basic-counter/basic-counter.component';
import { KeyboardCounterComponent } from './components/keyboard-counter/keyboard-counter.component';
import { SimpleCartComponent } from './components/simple-cart/simple-cart.component';
import { ShowModalComponent } from './components/show-modal/show-modal.component';
import { VotingAgeValidatorComponent } from './components/voting-age-validator/voting-age-validator.component';
import { DarkModeToggleComponent } from './components/dark-mode-toggle/dark-mode-toggle.component';
import { NameValidatorComponent } from './components/name-validator/name-validator.component';
import { SimpleProfileCardComponent } from './components/simple-profile-card/simple-profile-card.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },  // Default route
    { path: 'two-sum', component: TwoSumComponent },
    { path: 'image-container', component: ImageContainerComponent },
    { path: 'basic-counter', component: BasicCounterComponent },
    { path: 'keyboard-counter', component: KeyboardCounterComponent },
    { path: 'simple-cart', component: SimpleCartComponent },
    { path: 'show-modal', component: ShowModalComponent },
    { path: 'voter-age-checker', component: VotingAgeValidatorComponent },
    { path: 'dark-mode-toggle', component: DarkModeToggleComponent },
    { path: 'name-validator', component: NameValidatorComponent },
    { path: 'simple-profile-card', component: SimpleProfileCardComponent },
    { path: '**', redirectTo: '' }
];
