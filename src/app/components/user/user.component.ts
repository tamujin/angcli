import { Component, OnInit } from '@angular/core';

import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string
  address:Address;
  hobbies:string[];
  posts: Posts[];

  constructor(private dataService:DataService) {
    console.log("constructor Ran..");
   }

  ngOnInit() {
    console.log("ngOnInit Ran..");

    this.name= "willi";
    this.age =  33;
    this.address= {
      city:'Berlin',
      street:'stresemannstr',
      state:'Berlin'
    }
    this.hobbies = ['motorcycle','skydive','fitness'];
    
    this.dataService.getPosts().subscribe((posts)=> { 
     // console.log(posts); 
      this.posts = posts;
    });

  }
  onClick(){
    this.name = "Willi Wonka";  
}
  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }
  deleteHobby(hobby){
    console.log(hobby);
    for(let i=0;i<this.hobbies.length;i++)
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i,1);
      }
  }
}

interface Address{
    street:string,
    city:string,
    state:string
  }
interface Posts{
  id:number,
  title:string,
  body:string,
  userid:number
}