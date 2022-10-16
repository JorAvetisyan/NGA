import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HeaderComponent} from './Components/header/header.component';
import {RouterModule, RouterOutlet, Routes} from "@angular/router";
import {AuthGuard} from "../shared/Guards/auth.guard";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SignInComponent} from './Pages/sign-in/sign-in.component';
import {NgMultiSelectDropDownModule} from "ng-multiselect-dropdown";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatStepperModule} from "@angular/material/stepper";
import {RecoverPasswordComponent} from './Pages/recover-password/recover-password.component';
import {SignUpDonorComponent} from './Pages/sign-up-donor/sign-up-donor.component';
import {ContactUsComponent} from './Pages/contact-us/contact-us.component';
import {SignUpComponent} from "./Pages/sign-up/sign-up.component";
import { ModalModule} from "ngx-bootstrap/modal";
import { ProfileComponent } from './Pages/profile/profile.component';
import {HttpClientModule} from "@angular/common/http";
import {MatListModule} from "@angular/material/list";
import {MatBottomSheetModule} from "@angular/material/bottom-sheet";
import { BottomSheetComponent } from './Components/bottom-sheet/bottom-sheet.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';


const route: Routes = [
  {
    path: "",
    loadChildren: () => import('./Pages/sign-in/sign-in/sign-in-routing.module').then(m => m.SignInRoutingModule)
  },
  {
    path: "my-profile",
    canActivate: [AuthGuard],
    loadChildren: () => import('./Pages/profile/profile/profile-routing.module').then(m => m.ProfileRoutingModule)
  },
  {
    path: "sign-up",
    loadChildren: () => import('./Pages/sign-up/sign-up/sign-up-routing.module').then(m => m.SignUpRoutingModule)  },
  {
    path: "sign-in",
    loadChildren: () => import('./Pages/sign-in/sign-in/sign-in-routing.module').then(m => m.SignInRoutingModule)
  },
  {
    path: 'recover-password',
    loadChildren: () => import('./Pages/recover-password/recover-password/recover-password-routing.module').then(m => m.RecoverPasswordRoutingModule)
  },
  {
    path: 'sign-up-donors',
    loadChildren: () => import('./Pages/sign-up-donor/sign-up-donor/sign-up-donor-routing.module').then(m => m.SignUpDonorRoutingModule)
  },
  {
    path: 'about_us',
    loadChildren: () => import('./Pages/about-us/about-us/about-us-routing.module').then(m => m.AboutUsRoutingModule)
  },
  {
    path: 'contact_us',
    loadChildren: () => import('./Pages/contact-us/contact-us/contact-us-routing.module').then(m => m.ContactUsRoutingModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./Pages/blog/blog/blog-routing.module').then(m => m.BlogRoutingModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignInComponent,
    RecoverPasswordComponent,
    SignUpDonorComponent,
    SignUpComponent,
    ProfileComponent,
    BottomSheetComponent,
    NotFoundComponent
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
    ModalModule.forRoot(),
    HttpClientModule,
    MatListModule,
    MatBottomSheetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
