import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
// import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeComponent } from './home/home.component';
import { ProductInfoComponent } from './product-info/product-info.component';

// http://localhost:4200/
const routes: Routes = [
	{path: '', component: HomeComponent},
	{path: ':id', component: ProductInfoComponent},
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
