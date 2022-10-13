import { Component, OnInit } from '@angular/core';
import {RequestService} from "../request.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(public request: RequestService) { }

  ngOnInit(): void {
  }

}