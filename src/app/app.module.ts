import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HeaderComponent} from './Components/header/header.component';
import {RouterModule, RouterOutlet, Routes} from "@angular/router";
import {AuthGuard} from "../shared/Guards/auth.guard";
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ModalModule} from "ngx-bootstrap/modal";
import {HttpClientModule} from "@angular/common/http";
import {MatListModule} from "@angular/material/list";
import {MatBottomSheetModule} from "@angular/material/bottom-sheet";
import { BottomSheetComponent } from './Components/bottom-sheet/bottom-sheet.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import {ProfileGuard} from "../shared/Guards/profile.guard";


const route: Routes = [
  {
    path: "",
    loadChildren: () => import('./Pages/sign-in/sign-in/sign-in.module').then(m => m.SignInModule)
  },
  {
    path: "my-profile",
    canActivate: [ProfileGuard],
    loadChildren: () => import('./Pages/profile/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: "sign-up",
    loadChildren: () => import('./Pages/sign-up/sign-up/sign-up.module').then(m => m.SignUpModule)  },
  {
    path: "sign-in",
    canActivate: [AuthGuard],
    loadChildren: () => import('./Pages/sign-in/sign-in/sign-in.module').then(m => m.SignInModule)
  },
  {
    path: 'recover-password',
    loadChildren: () => import('./Pages/recover-password/recover-password/recover-password.module').then(m => m.RecoverPasswordModule)
  },
  {
    path: 'sign-up-donors',
    loadChildren: () => import('./Pages/sign-up-donor/sign-up-donor/sign-up-donor.module').then(m => m.SignUpDonorModule)
  },
  {
    path: 'about_us',
    loadChildren: () => import('./Pages/about-us/about-us/about-us.module').then(m => m.AboutUsModule)
  },
  {
    path: 'contact_us',
    loadChildren: () => import('./Pages/contact-us/contact-us/contact-us.module').then(m => m.ContactUsModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./Pages/blog/blog/blog.module').then(m => m.BlogModule)
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
    BottomSheetComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    RouterModule.forRoot(route),
    ReactiveFormsModule,
    BrowserAnimationsModule,
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
