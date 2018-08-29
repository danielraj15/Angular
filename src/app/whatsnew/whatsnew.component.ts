import { Component, OnInit } from '@angular/core';
import {UserdetailsService} from '../userdetails.service';
import { getViewData } from '@angular/core/src/render3/instructions';
@Component({
  selector: 'app-whatsnew',
  templateUrl: './whatsnew.component.html',
  styleUrls: ['./whatsnew.component.css']
})
export class WhatsnewComponent implements OnInit {

  constructor(private myservice:UserdetailsService) { }
  myarray:any[];
  ngOnInit() {
  this.myarray=this.myservice.getData();
  }

}
