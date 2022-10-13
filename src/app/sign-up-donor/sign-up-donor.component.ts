import { Component, OnInit } from '@angular/core';
import {RequestService} from "../request.service";

@Component({
  selector: 'app-sign-up-donor',
  templateUrl: './sign-up-donor.component.html',
  styleUrls: ['./sign-up-donor.component.scss']
})
export class SignUpDonorComponent implements OnInit {

  constructor(public request:RequestService) { }

  ngOnInit(): void {
  }

}
