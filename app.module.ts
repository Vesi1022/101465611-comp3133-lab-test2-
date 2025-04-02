import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { MissionfilterComponent } from './missionfilter/missionfilter.component';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';

const routes: Routes = [
  { path: '', component: MissionlistComponent },
  { path: 'filter', component: MissionfilterComponent },
  { path: 'details/:id', component: MissiondetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MissionlistComponent,
    MissionfilterComponent,
    MissiondetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
