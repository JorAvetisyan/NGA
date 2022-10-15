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
  public form_sign_in = this.fb.group({
    name: ['', Validators.required],
    last_name: ['',Validators.required],
    email: ['',[Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/),Validators.required]],
    phone_short_code: ['',Validators.required],
    phone_number: ['',Validators.required],
    pass: ['',[Validators.required,Validators.maxLength(20),Validators.minLength(6)]],
    confirm_pass: ['', [Validators.required]],
    reg: ['', [Validators.required]],
    city: ['', [Validators.required]],
    country: ['', [Validators.required]]
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
    this.request.getUserData().subscribe((res:any)=>{
      res.forEach((item:any)=>{
        if((this.form_sign_in.controls.email.value == item.email) && (this.form_sign_in.controls.pass.value == item.password)){
          this.route.navigateByUrl('/my-profile')
        }else{
          this.errorSignIn = true
        }
      })
    })
  }
}
