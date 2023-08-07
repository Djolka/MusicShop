import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

// http://localhost:4200/
const routes: Routes = [
	{path: 'login', component: UserLoginComponent},
	{path: 'signup', component: UserSignupComponent},
	{path: 'profile', component: UserProfileComponent},
	// {path: 'logout', component: UserLogoutComponent},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }
