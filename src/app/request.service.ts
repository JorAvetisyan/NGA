import { Injectable } from '@angular/core';
import {translations} from "../assets/translations";

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  language: any = translations;
  translate = this.language['en'];
  constructor() { }
  changeLang (lang: string) {
    this.translate = this.language[lang];
  }
}
