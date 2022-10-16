import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecoverPasswordRoutingModule } from './recover-password-routing.module';
import {RecoverPasswordComponent} from "../recover-password.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [RecoverPasswordComponent],
  imports: [
    CommonModule,
    RecoverPasswordRoutingModule,
    ReactiveFormsModule
  ]
})
export class RecoverPasswordModule { }
