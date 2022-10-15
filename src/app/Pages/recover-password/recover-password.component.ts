import { Component, OnInit } from '@angular/core';
import {TranslateService} from "../../../shared/Services/translate.service";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent implements OnInit {
  public  form_recover_password = this.fb.group({
    email: ['', Validators.compose( [Validators.required, Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)])]
  })
  constructor(
    public translate:TranslateService,
    public fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

}
