import { Component, OnInit } from '@angular/core';
import {RequestService} from "../request.service";
import {IDropdownSettings} from "ng-multiselect-dropdown";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-up-donor',
  templateUrl: './sign-up-donor.component.html',
  styleUrls: ['./sign-up-donor.component.scss']
})
export class SignUpDonorComponent implements OnInit {
  password = 'password';
  confirmPassword = 'password'
  show = false;
  show_confirm = false;
  form_sign_up_donor = this.fb.group({
    name: ['', Validators.required],
    last_name: ['', Validators.required],
    email: ['', Validators.required],
    phone_number: ['', Validators.required],
    country: ['', Validators.required],
    region: ['', Validators.required],
    city: ['', Validators.required],
    password: ['',Validators.required],
    confirm_password: ['', Validators.required]


  })
  citiesList = [
    {item_id: 1, item_text: this.request.translate.city_y},
    {item_id: 2, item_text: this.request.translate.city_g},
    {item_id: 3, item_text: this.request.translate.city_van}
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
    public request:RequestService,
    public fb: FormBuilder
    ) { }

  ngOnInit(): void {
  }
  onItemSelect(item: any) {
    console.log(item);
  }

  onSelectAll(items: any) {
    console.log(items);
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
      this.show_confirm = true;
    } else {
      this.confirmPassword = 'password';
      this.show_confirm = false;
    }
  }
}
