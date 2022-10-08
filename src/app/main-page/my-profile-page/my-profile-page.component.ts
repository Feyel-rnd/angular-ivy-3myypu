import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile-page',
  templateUrl: './my-profile-page.component.html',
  styleUrls: ['./my-profile-page.component.css']
})
export class MyProfilePageComponent implements OnInit {
  constructor() { }

user : any;
mongo : any;
collection : any;
  ngOnInit() {
  //   this.user = this.app.allUsers[sessionStorage.getItem("userId")]
    
  // this.mongo =this.user.mongoClient('Cluster0');
  // this.collection = this.mongo.db('Data').collection("users");
  // this.collection.find({'id':this.user.id}).then((value)=>{ 

  // })

  }

}