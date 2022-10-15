import { Component, OnInit } from '@angular/core';
import {TranslateService} from "../../../shared/Services/translate.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    public translate: TranslateService

  ) { }

  ngOnInit(): void {
  }

}
