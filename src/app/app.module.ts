import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FilterPipe} from './home/filter.pipe'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FieldsComponent } from './fields/fields.component';
import { WhatsnewComponent } from './whatsnew/whatsnew.component';
import {RouterModule,Routes} from '@angular/router';
import { BucketlistComponent } from './bucketlist/bucketlist.component';
import { FormsModule} from '@angular/forms';
import { UserdetailsService} from './userdetails.service';
import { FormComponent } from './form/form.component';
import {ReactiveFormsModule} from '@angular/forms';

const approutes:Routes=[
{path: 'home',component:HomeComponent},
{path: 'fields',component:FieldsComponent},
{path: 'whatsnew',component:WhatsnewComponent},
{path: 'bucketlist',component:BucketlistComponent},
{path: 'form',component:FormComponent},
{path: '',redirectTo:'/home',pathMatch:'full'},
{path: '**',redirectTo:'/home',pathMatch:'full'},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FieldsComponent,
    WhatsnewComponent,
    BucketlistComponent,
    FilterPipe,
    FormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(approutes),
    
  ],
  providers: [UserdetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
