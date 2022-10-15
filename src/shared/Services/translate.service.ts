import { Injectable } from '@angular/core';
import {translations} from "../../assets/Translate/translations";

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  language: any = translations;
  translate = this.language['en'];
  constructor() { }
  changeLang (lang: string) {
    this.translate = this.language[lang];
  }
}
