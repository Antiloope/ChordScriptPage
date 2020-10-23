import { Component, OnInit } from '@angular/core';
import {lang} from '../global-contents';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {

  currentLanguage = Number(localStorage.getItem('lang'));

  tuto = lang.tutorial_main[this.currentLanguage];

  constructor() { }

  ngOnInit(): void {
  }

}
