import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  addUserForm = false;
  newUserFirstName :string;
  newUserLastName :string;
  newUserEmail :string;
  constructor() { }

  ngOnInit() {
    this.users = [
      {firstName: "Devesh", lastName: "Chaudhari", email: "devesh@gmail.com", userIf: false},
      {firstName: "Bhushan", lastName: "Lahane", email: "bhushan@gmail.com", userIf: false},
      {firstName: "Sandeep", lastName: "Nawghane", email: "sandeep@gmail.com", userIf: false}
    ]; 
    
    }
    showUser(){
      this.addUserForm = !this.addUserForm
    }
    adduser(){
      this.users.push({firstName:this.newUserFirstName
        , lastName: this.newUserLastName, email: this.newUserEmail});
      this.addUserForm = !this.addUserForm
    }

    showUserDetails(i){
      this.users[i].userIf = !this.users[i].userIf
    }

    deleteUser(i){
      this.users.splice(i,1)  
    }
    
  }
