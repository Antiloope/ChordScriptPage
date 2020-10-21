import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {lang} from '../global-contents';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  currentLanguage = Number(localStorage.getItem('lang'));

  welcomeTitle = lang.home_welcome_title[this.currentLanguage];

  mainButtons: any[] = [
    {name: lang.home_btn_what_is[this.currentLanguage], route: '.'},
    {name: lang.home_btn_get_started[this.currentLanguage], route: '.'},
  ];

  // tslint:disable-next-line:variable-name
  private readonly _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
