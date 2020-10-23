import { Component, OnInit } from '@angular/core';
import {lang} from '../../global-contents';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  currentLanguage = Number(localStorage.getItem('lang'));

  tuto = lang.tutorial_main[this.currentLanguage];

  constructor() { }

  ngOnInit(): void {
  }

}
