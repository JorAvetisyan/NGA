import { Component, OnInit } from '@angular/core';
import {translations} from "../../assets/translations";
import {FormBuilder, Validators} from "@angular/forms";
import {RequestService} from "../request.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  form = this.fb.group({email: ['', Validators.required],})
  constructor(
    private fb: FormBuilder,
    public request: RequestService
    ) { }

  ngOnInit(): void {

  }



}
