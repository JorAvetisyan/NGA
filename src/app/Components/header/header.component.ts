import {Component, OnInit, TemplateRef} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {TranslateService} from "../../../shared/Services/translate.service";
import {Router} from "@angular/router";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {BottomSheetComponent} from "../bottom-sheet/bottom-sheet.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public modalRef?: BsModalRef;
  public form = this.fb.group({email: ['', Validators.required]})
  constructor(
    private fb: FormBuilder,
    public translate: TranslateService,
    public rout:Router,
    private modalService: BsModalService,
    private _bottomSheet: MatBottomSheet

    ) { }

  ngOnInit(): void {

  }

  navigateSignIn(navigate: boolean):void{
    if(navigate){
      this.rout.navigate(['/sign-in'])
    }
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetComponent);
  }

}
