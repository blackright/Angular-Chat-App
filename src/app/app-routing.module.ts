import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ProfileComponent } from './components/profile/profile.component';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

const redirectToLogin = () => redirectUnauthorizedTo(['login']);
const redirectToHome = () => redirectLoggedInTo(['home']);


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LandingComponent,
    ...canActivate(redirectToHome)
  },
  {
    path: 'login',
    component: LoginComponent,
    ...canActivate(redirectToHome)
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    ...canActivate(redirectToHome)
  },
  {
    path: 'home',
    component: HomeComponent,
    ...canActivate(redirectToLogin)
  },
  {
    path: 'profile',
    component: ProfileComponent,
    ...canActivate(redirectToLogin)
  },
];

@NgModule({
  declarations:[],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
