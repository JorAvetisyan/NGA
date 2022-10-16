import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpDonorRoutingModule } from './sign-up-donor-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatStepperModule} from "@angular/material/stepper";
import {NgMultiSelectDropDownModule} from "ng-multiselect-dropdown";
import {SignUpDonorComponent} from "../sign-up-donor.component";


@NgModule({
  declarations: [SignUpDonorComponent],
  imports: [
    CommonModule,
    SignUpDonorRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatStepperModule,
    NgMultiSelectDropDownModule
  ]
})
export class SignUpDonorModule { }
