import { Injectable } from '@angular/core';
import { getViewData } from '@angular/core/src/render3/instructions';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {

  constructor() { }

mydata:any[]= [
    {
        "id": 4,
        "first_name": "Eve",
        "last_name": "Holt",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
    },
    {
        "id": 5,
        "first_name": "Charles",
        "last_name": "Morris",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
    },
    {
        "id": 6,
        "first_name": "Tracey",
        "last_name": "Ramos",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
    }]

getData()
{
  return this.mydata;
}

}

