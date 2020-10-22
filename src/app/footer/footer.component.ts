import { Component, OnInit } from '@angular/core';
import {lang} from '../global-contents';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  currentLanguage = Number(localStorage.getItem('lang'));

  links = lang.footer_links[this.currentLanguage];

  description = lang.footer_description[this.currentLanguage];

  constructor() {}

  ngOnInit(): void {
  }

}
