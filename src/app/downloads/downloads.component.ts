import { Component, OnInit } from '@angular/core';
import {lang} from '../global-contents';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.scss']
})
export class DownloadsComponent implements OnInit {

  currentLanguage = Number(localStorage.getItem('lang'));

  workInProgress = lang.work_in_progress[this.currentLanguage];

  constructor() { }

  ngOnInit(): void {
  }

}
