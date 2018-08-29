import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  myformm:FormGroup;



  ngOnInit() {
    this.myformm = new FormGroup(
      {
        firstname : new FormControl(),
        phonenum : new FormControl()

      }
    );
  }

  myfun=function(variable)
  {
    console.log(variable);
  }
}
