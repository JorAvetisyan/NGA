import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignUpDonorComponent} from "../sign-up-donor.component";

const routes: Routes = [{
  path: '',
  component: SignUpDonorComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignUpDonorRoutingModule { }
