import {Component, OnInit} from '@angular/core';
import {RequestService} from "../request.service";
import {IDropdownSettings} from 'ng-multiselect-dropdown';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  password = 'password';
  confirmPassword = 'password'
  show = false;
  show_confirm = false;
  citiesList = [
    {item_id: 1, item_text: this.request.translate.city_y},
    {item_id: 2, item_text: this.request.translate.city_g},
    {item_id: 3, item_text: this.request.translate.city_van}
  ];
  schoolList = [
    {item_id: 1, item_text: this.request.translate.school_1},
    {item_id: 2, item_text: this.request.translate.school_2},
    {item_id: 3, item_text: this.request.translate.school_3}
  ];
  subjectsList = [
    {item_id: 1, item_text: this.request.translate.subject_1},
    {item_id: 2, item_text: this.request.translate.subject_2},
    {item_id: 3, item_text: this.request.translate.subject_3}
  ];
  gradeList = [
    {item_id: 1, item_text: '1'},
    {item_id: 2, item_text: '2'},
    {item_id: 3, item_text: '3'},
    {item_id: 4, item_text: '4'},
    {item_id: 5, item_text: '5'}
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
  form_sign_up = this.fb.group({
    name: ['', Validators.required],
    last_name: ['',Validators.required],
    email: ['',[Validators.email,Validators.required,Validators.pattern(/^[a-zA-Z0-9_\.\-]+\@[a-zA-Z0-9\-]+\.+[a-zA-Z0-9]{2,7}/),Validators.required]],
    phone_short_code: ['',Validators.pattern(/[^a-zA-Z]^[0-9]$/)],
    phone_number: [''],
    pass: ['',[Validators.required,Validators.maxLength(20),Validators.minLength(6)]],
    confirm_pass: [''],
    reg: ['', [Validators.required]],
    city: ['', [Validators.required]],
    school: ['', [Validators.required]],
    subject: ['', [Validators.required]],
    grade: ['', [Validators.required]]
  })
  constructor(
    public request: RequestService,
    public fb:FormBuilder
    ) {
  }

  ngOnInit(): void {
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

  onItemSelect(item: any) {
    console.log(item);
  }

  onSelectAll(items: any) {
    console.log(items);
  }

}
