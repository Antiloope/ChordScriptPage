import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import { FooterComponent } from './footer/footer.component';
import {MatRippleModule} from '@angular/material/core';
import { HomeComponent } from './home/home.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { Routes, RouterModule } from '@angular/router';
import { DownloadsComponent } from './downloads/downloads.component';
import { DocsComponent } from './docs/docs.component';
import {MatMenuModule} from '@angular/material/menu';

const routes: Routes = [
  { path: 'tutorial', component: TutorialComponent },
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
    DocsComponent
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
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
