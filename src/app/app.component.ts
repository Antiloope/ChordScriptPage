import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {lang} from './global-contents';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  currentLanguage = Number(localStorage.getItem('lang'));

  options: any[] = [
    {name: lang.header_tutorial[this.currentLanguage], route: '/tutorial'},
    {name: lang.header_docs[this.currentLanguage], route: '/docs'},
    {name: lang.header_downloads[this.currentLanguage], route: '/downloads'},
  ];

  contribute = lang.header_contribute[this.currentLanguage];

  languageIcon = lang.icon[this.currentLanguage];

  // tslint:disable-next-line:variable-name
  private readonly _mobileQueryListener: () => void;

  changeLanguage(language): void {
    this.currentLanguage = language;
    localStorage.setItem('lang', String(this.currentLanguage));
    window.location.reload();
  }

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    if (localStorage.getItem('lang')) {
      localStorage.setItem('lang', String(this.currentLanguage));
    }
    else {
      localStorage.setItem('lang', '0');
      this.currentLanguage = 0;
    }
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
