import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { NgModule }       from '@angular/core';
import {user} from "../form/user"


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

 
userList:user[]=[];


 adduser(form){
   var user:user;
   user=form.value;
   this.userList.push(user);
 }
  ngOnInit() {
    
  }
  
 
  
}
