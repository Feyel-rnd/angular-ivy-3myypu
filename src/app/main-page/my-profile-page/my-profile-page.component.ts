import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-my-profile-page',
  templateUrl: './my-profile-page.component.html',
  styleUrls: ['./my-profile-page.component.css']
})
export class MyProfilePageComponent implements OnInit {
  constructor() { }
app = environment.application
// user : any;
// mongo : any;
// collection : any;
user_mail : any;
username : any;
created : any;
last_login : any;

  ngOnInit() {
   const user = this.app.allUsers[sessionStorage.getItem("userId")]
    
  const mongo =user.mongoClient('Cluster0');
  const collection = mongo.db('Data').collection("users");
  collection.find({'id':user.id}).then((value:any)=>{ 
    this.user_mail = value[0].user_mail
    this.username = value[0].username
    this.created = value[0].created.getDay() + "/" + (value[0].created.getMonth()+1) + "/" + value[0].created.getFullYear() + "à " + value[0].created.getHours() + "h" +  value[0].created.getMinutes()
    this.last_login = value[0].last_login.getDay() + "/" + (value[0].last_login.getMonth()+1) + "/" + value[0].last_login.getFullYear() + "à " + value[0].last_login.getHours() + "h" +  value[0].last_login.getMinutes()
  })


  }

}