import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bucketlist',
  templateUrl: './bucketlist.component.html',
  styleUrls: ['./bucketlist.component.css']
})
export class BucketlistComponent implements OnInit {
  itemCount: number;
  btnText: string='Add an item';
  goalText: string="My first life goal";
  goals=[];
  constructor(){ }
  ngOnInit(){
this.itemCount=this.goals.length;
  }
addItem(){
  this.goals.push(this.goalText);
  this.goalText='';
  this.itemCount=this.goals.length;
}
}
