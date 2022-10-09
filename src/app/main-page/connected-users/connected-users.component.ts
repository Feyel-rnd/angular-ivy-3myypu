import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { environment } from '../../../environments/environment';



export interface User {
  _id: any;
  id: string;
  active: boolean;
  last_login: Date;
  username: string;
  created: Date;
  user_mail : string;
}


@Component({
  selector: 'app-connected-users',
  templateUrl: './connected-users.component.html',
  styleUrls: ['./connected-users.component.css']
})
export class ConnectedUsersComponent implements OnInit {

  
  app = environment.application
  user : any;
  mongo : any;
  collection : any;
  
  analysis:User[];


sortedData: User[];

constructor() {
  this.user = this.app.allUsers[sessionStorage.getItem("userId")]
  
  this.mongo =this.user.mongoClient('Cluster0');
  this.collection = this.mongo.db('Data').collection("users");
  this.collection.find({}).then((value)=>{
       //console.log(value)
       this.analysis = value
       //console.log(this.analysis)
  this.sortedData = this.analysis.slice();
    })

    
}



sortData(sort: Sort) {
  
  const data = this.analysis.slice();
  if (!sort.active || sort.direction === '') {
    this.sortedData = data;
    return;
  }

  this.sortedData = data.sort((a, b) => {
    const isAsc = sort.direction === 'asc';
    switch (sort.active) {
      case 'username':
        return compare(a.username, b.username, isAsc);
      case 'email':
        return compare(a.user_mail, b.user_mail, isAsc);
      case 'active':
        return compare(a.active, b.active, isAsc);
      
      // case 'carbs':
      //   return compare(a.carbs, b.carbs, isAsc);
      // case 'protein':
      //   return compare(a.protein, b.protein, isAsc);
      default:
        return 0;
    }
  });
}

async logOut(id:string) {
  await this.app.allUsers[id].logOut()
  window.location.reload()
}
  ngOnInit() {
    try {
    
    
  } catch(err) {
    console.error("Echec",err)

  }
  }
}
function compare(a: number | string | boolean, b: number | string | boolean, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}