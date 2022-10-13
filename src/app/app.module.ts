import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, RouterOutlet, Routes} from "@angular/router";
import {AuthGuard} from "./auth.guard";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {NgMultiSelectDropDownModule} from "ng-multiselect-dropdown";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatStepperModule} from "@angular/material/stepper";
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { SignUpDonorComponent } from './sign-up-donor/sign-up-donor.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BlogComponent } from './blog/blog.component';

const route:Routes = [
  {
    path: "",
    component: SignInComponent
  },
  {
    path: "home",
    canActivate: [AuthGuard],
    component: HomeComponent
  },
  {
    path: "sign-up",
    component: SignUpComponent
  },
  {
    path: "sign-in",
    component: SignInComponent
  },
  {
    path: 'recover-password',
    component: RecoverPasswordComponent
  },
  {
    path: 'sign-up-donors',
    component: SignUpDonorComponent
  },
  {
    path: 'about_us',
    component: AboutUsComponent
  },
  {
    path: 'contact_us',
    component: ContactUsComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    RecoverPasswordComponent,
    SignUpDonorComponent,
    AboutUsComponent,
    ContactUsComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    RouterModule.forRoot(route),
    ReactiveFormsModule,
    NgMultiSelectDropDownModule,
    FormsModule,
    BrowserAnimationsModule,
    MatStepperModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
