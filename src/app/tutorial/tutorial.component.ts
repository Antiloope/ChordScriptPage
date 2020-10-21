import { Component, OnInit } from '@angular/core';
import {lang} from '../global-contents';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {

  currentLanguage = Number(localStorage.getItem('lang'));

  workInProgress = lang.work_in_progress[this.currentLanguage];

  constructor() { }

  ngOnInit(): void {
  }

}
