import { Component, OnInit } from '@angular/core';
import {lang} from '../global-contents';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent implements OnInit {

  currentLanguage = Number(localStorage.getItem('lang'));

  workInProgress = lang.work_in_progress[this.currentLanguage];

  constructor() { }

  ngOnInit(): void {
  }

}
