import {Component, OnInit, TemplateRef} from '@angular/core';
import {TranslateService} from "../../../shared/Services/translate.service";
import {Router} from "@angular/router";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss']
})
export class BottomSheetComponent implements OnInit {
  public modalRef?: BsModalRef;
  constructor(
    public translate: TranslateService,
    public rout:Router,
    private modalService: BsModalService,
  ) { }

  ngOnInit(): void {
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  navigateSignIn(navigate: boolean):void{
    if(navigate){
      this.rout.navigate(['/sign-in'])
    }
  }
}
