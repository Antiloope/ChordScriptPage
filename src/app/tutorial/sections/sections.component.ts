import { Component, OnInit } from '@angular/core';
import {lang} from '../../global-contents';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {

  currentLanguage = Number(localStorage.getItem('lang'));

  sections = lang.tutorial_sections[this.currentLanguage];

  constructor() { }

  ngOnInit(): void {
  }

}
