import { HotToastModule } from '@ngneat/hot-toast';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';

import {} from '@angular/material/form-field';
import {} from '@angular/material/input';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage()),
    HotToastModule.forRoot(),
    MatMenuModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
