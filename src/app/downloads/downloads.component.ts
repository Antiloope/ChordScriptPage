import { Component, OnInit } from '@angular/core';
import {lang} from '../global-contents';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.scss']
})
export class DownloadsComponent implements OnInit {

  currentLanguage = Number(localStorage.getItem('lang'));

  win = lang.downloads_windows[this.currentLanguage];

  other = lang.downloads_other[this.currentLanguage];

  sources = lang.downloads_sources[this.currentLanguage];

  constructor() { }

  ngOnInit(): void {
  }

}
