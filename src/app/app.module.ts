import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, ActivatedRoute, ParamMap } from '@angular/router';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PublicationsComponent } from './publications/publications.component';
import { DataService } from './service/data-sharing.service';


const config = {
  apiKey: "AIzaSyARK6BkOSafTHHU6eRzgGLnATdnmmXCKfg",
  authDomain: "tp2-angularfire.firebaseapp.com",
  databaseURL: "https://tp2-angularfire.firebaseio.com",
  projectId: "tp2-angularfire",
  storageBucket: "tp2-angularfire.appspot.com",
  messagingSenderId: "394838274472"
};

const appRoutes: Routes = [
  { path: 'publications', component: PublicationsComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: '', redirectTo: 'accueil', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    PublicationsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    FormsModule

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
