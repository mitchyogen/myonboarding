import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnboardingViewComponent } from './view/onboarding-view/onboarding-view.component';

const routes: Routes = [
	{ path: '', component: OnboardingViewComponent },
	{ path: 'gfi', component: OnboardingViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
