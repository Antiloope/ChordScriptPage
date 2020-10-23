import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {FooterComponent} from './footer/footer.component';
import {MatRippleModule} from '@angular/material/core';
import {HomeComponent} from './home/home.component';
import {TutorialComponent} from './tutorial/tutorial.component';
import {ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes} from '@angular/router';
import {DownloadsComponent} from './downloads/downloads.component';
import {DocsComponent} from './docs/docs.component';
import {MatMenuModule} from '@angular/material/menu';
import { SectionsComponent } from './tutorial/sections/sections.component';
import { MainComponent } from './tutorial/main/main.component';
import {MatExpansionModule} from '@angular/material/expansion';

const routes: Routes = [
  { path: 'tutorial', component: TutorialComponent, children: [
      {path: 'sections', component: SectionsComponent},
      {path: '', component: MainComponent},
    ]
  },
  { path: 'about',
    component: HomeComponent,
    resolve: { url: 'externalUrlRedirectResolver' },
    data: { externalUrl: 'https://github.com/Antiloope/ChordScript' }
    },
  { path: 'contribute',
    component: HomeComponent,
    resolve: { url: 'externalUrlRedirectResolver' },
    data: { externalUrl: 'https://github.com/Antiloope/ChordScript/wiki' }
  },
  { path: 'FAQ',
    component: HomeComponent,
    resolve: { url: 'externalUrlRedirectResolver' },
    data: { externalUrl: 'https://github.com/Antiloope/ChordScript/wiki' }
  },
  { path: 'externalDoc',
    component: DocsComponent,
    resolve: { url: 'externalUrlRedirectResolver' },
    data: { externalUrl: 'https://github.com/Antiloope/ChordScript/wiki/Language-Documentation' }
  },
  { path: '', component: HomeComponent },
  { path: 'docs', component: DocsComponent },
  { path: 'downloads', component: DownloadsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    TutorialComponent,
    DownloadsComponent,
    DocsComponent,
    SectionsComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatCheckboxModule,
    FormsModule,
    MatListModule,
    MatRippleModule,
    RouterModule.forRoot(routes),
    MatMenuModule,
    MatExpansionModule,
  ],
  exports: [RouterModule],
  providers: [
    {
      provide: 'externalUrlRedirectResolver',
      useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
      {
        window.location.href = (route.data as any).externalUrl;
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
