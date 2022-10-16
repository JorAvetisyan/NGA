import { Component, OnInit } from '@angular/core';
import {TranslateService} from "../../../shared/Services/translate.service";
import {IDropdownSettings} from "ng-multiselect-dropdown";
import {FormBuilder, Validators} from "@angular/forms";
import {RequestService} from "../../../shared/Services/request.service";

@Component({
  selector: 'app-sign-up-donor',
  templateUrl: './sign-up-donor.component.html',
  styleUrls: ['./sign-up-donor.component.scss']
})
export class SignUpDonorComponent implements OnInit {
  public password = 'password';
  public confirmPassword = 'password'
  public show = false;
  public showConfirm = false;
  public match:Boolean = false
  form_sign_up_donor = this.fb.group({
    name: ['', Validators.compose( [Validators.required, Validators.minLength(3)])],
    last_name: ['',  Validators.compose( [Validators.required, Validators.minLength(3)])],
    email: ['',Validators.compose( [Validators.required, Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)])],
    phone_number_short_code: ['', Validators.required],
    phone_number: ['', Validators.required],
    country: ['', Validators.required],
    region: ['', Validators.required],
    city: ['', Validators.required],
    password: ['',Validators.compose( [Validators.required, Validators.minLength(6), Validators.maxLength(20)])],
    confirm_password: ['', Validators.compose( [Validators.required, Validators.minLength(6),Validators.maxLength(20)])]


  })
  citiesList = [
    {item_id: 1, item_text: this.translate.translate.city_y},
    {item_id: 2, item_text: this.translate.translate.city_g},
    {item_id: 3, item_text: this.translate.translate.city_van}
  ];
  regionList = [
    {item_id: 1, item_text: 'Shirak'},
    {item_id: 2, item_text: 'Lori'},
    {item_id: 3, item_text: 'Aragatsotn'}
  ];
  countriesList = [
    {item_id: 1, item_text: 'Armenia'},
    {item_id: 2, item_text: 'Russia'},
    {item_id: 3, item_text: 'USA'}
  ];
  dropdownSettings: IDropdownSettings = {
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };
  constructor(
    public translate:TranslateService,
    public fb: FormBuilder,
    public  request: RequestService
    ) { }

  ngOnInit(): void {

  }
  onItemSelect(item: any) {

  }

  onSelectAll(items: any) {

  }
  onClickPassword() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }
  onClickConfirmPassword() {
    if (this.confirmPassword === 'password') {
      this.confirmPassword = 'text';
      this.showConfirm = true;
    } else {
      this.confirmPassword = 'password';
      this.showConfirm = false;
    }
  }
  matchPassword(){
    if(this.form_sign_up_donor.controls.password.value !== this.form_sign_up_donor.controls.confirm_password.value){
      this.match = true
    }else{
      this.match = false
    }
  }
  postFormData(){
    this.request.postUserData(this.form_sign_up_donor.getRawValue()).subscribe((res:any)=>{
    })
  }
}
