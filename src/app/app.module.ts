import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FieldsComponent } from './fields/fields.component';
import { WhatsnewComponent } from './whatsnew/whatsnew.component';
import {RouterModule,Routes} from '@angular/router';

const approutes:Routes=[
{path: 'home',component:HomeComponent},
{path: 'fields',component:FieldsComponent},
{path: 'whatsnew',component:WhatsnewComponent},
{path: '',redirectTo:'/home',pathMatch:'full'},
{path: '**',redirectTo:'/home',pathMatch:'full'},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FieldsComponent,
    WhatsnewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
