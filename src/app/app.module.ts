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
import {AboutUsComponent} from './Pages/about-us/about-us.component';
import {ContactUsComponent} from './Pages/contact-us/contact-us.component';
import {BlogComponent} from './Pages/blog/blog.component';
import {SignUpComponent} from "./Pages/sign-up/sign-up.component";
import { ModalModule} from "ngx-bootstrap/modal";
import { ProfileComponent } from './Pages/profile/profile.component';
import {HttpClientModule} from "@angular/common/http";
import {MatListModule} from "@angular/material/list";
import {MatBottomSheetModule} from "@angular/material/bottom-sheet";
import { BottomSheetComponent } from './Components/bottom-sheet/bottom-sheet.component';


const route: Routes = [
  {
    path: "",
    component: SignInComponent
  },
  {
    path: "my-profile",
    canActivate: [AuthGuard],
    component: ProfileComponent
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
    SignInComponent,
    RecoverPasswordComponent,
    SignUpDonorComponent,
    AboutUsComponent,
    ContactUsComponent,
    BlogComponent,
    SignUpComponent,
    ProfileComponent,
    BottomSheetComponent
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
