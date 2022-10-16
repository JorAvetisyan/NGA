import { Component, OnInit } from '@angular/core';
import {TranslateService} from "../../../shared/Services/translate.service";
import {RequestService} from "../../../shared/Services/request.service";
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  public password = 'password';
  public show = false;
  public errorSignIn = false;
  private isSubmitted: boolean = true;
  public form_sign_in = this.fb.group({
    email: ['',[Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/),Validators.required]],
    password: ['',[Validators.required,Validators.maxLength(20),Validators.minLength(6)]],
  })
  constructor(
    public translate:TranslateService,
    public request: RequestService,
    public fb: FormBuilder,
    public route: Router
    ) { }

  ngOnInit(): void {
  }
  onClickPass() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }
  getUserData(){
    if (this.form_sign_in.valid && this.isSubmitted) {
      this.isSubmitted = false;
      this.request.createData('https://reqres.in/api/login', this.form_sign_in.value).subscribe((res: any) => {
        localStorage.setItem('access_token', res['token']);
        this.route.navigateByUrl('/my-profile');
        this.isSubmitted = true;
      })
    }
  }
}
