import { Component, OnInit } from '@angular/core';
import {lang} from '../global-contents';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent implements OnInit {

  currentLanguage = Number(localStorage.getItem('lang'));

  docs = lang.docs_text[this.currentLanguage];

  constructor() { }

  ngOnInit(): void {
  }

}
