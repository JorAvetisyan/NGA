import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {RequestService} from "../request.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public form = this.fb.group({email: ['', Validators.required]})
  constructor(
    private fb: FormBuilder,
    public request: RequestService,
    private rout:Router
    ) { }

  ngOnInit(): void {

  }
  navigateSignIn(navigate: boolean){
    if(navigate){
      this.rout.navigate(['/sign-in'])
    }
  }


}
