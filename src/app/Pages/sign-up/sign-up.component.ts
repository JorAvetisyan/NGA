import {Component, OnInit} from '@angular/core';
import {TranslateService} from "../../../shared/Services/translate.service";
import {IDropdownSettings} from 'ng-multiselect-dropdown';
import {FormBuilder, Validators} from "@angular/forms";
import {RequestService} from "../../../shared/Services/request.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public password = 'password';
  public confirmPassword = 'password'
  public show = false;
  public showConfirm = false;
  public match = false;

  citiesList = [
    {item_id: 1, item_text: this.translate.translate.city_y},
    {item_id: 2, item_text: this.translate.translate.city_g},
    {item_id: 3, item_text: this.translate.translate.city_van}
  ];
  schoolList = [
    {item_id: 1, item_text: this.translate.translate.school_1},
    {item_id: 2, item_text: this.translate.translate.school_2},
    {item_id: 3, item_text: this.translate.translate.school_3}
  ];
  subjectsList = [
    {item_id: 1, item_text: this.translate.translate.subject_1},
    {item_id: 2, item_text: this.translate.translate.subject_2},
    {item_id: 3, item_text: this.translate.translate.subject_3}
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
    email: ['',[Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/),Validators.required]],
    phone_short_code: ['',Validators.required],
    phone_number: ['',Validators.required],
    pass: ['',[Validators.required,Validators.maxLength(20),Validators.minLength(6)]],
    confirm_pass: ['', Validators.compose( [Validators.required, Validators.minLength(6), Validators.maxLength(20)])],
    reg: ['', [Validators.required]],
    city: ['', [Validators.required]],
    school: ['', [Validators.required]],
    subject: ['', [Validators.required]],
    grade: ['', [Validators.required]]
  })
  public body:any = this.form_sign_up.getRawValue()
  constructor(
    public translate: TranslateService,
    public fb:FormBuilder,
    public request:RequestService
    ) {
  }

  ngOnInit(): void {
  }
  getFormData(){

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
  postFormData(){
    this.request.postUserData(this.form_sign_up.getRawValue()).subscribe((res:any)=>{

    })
  }
}
