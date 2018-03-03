import { Component, OnInit } from '@angular/core';
import { User } from '../Entity/user';
import { DataService } from '../service/data-sharing.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {

  private currentUser : User;
  private pathPrefix : string = "../assets/img/";
  
  constructor(private data: DataService) {
    this.currentUser = new User();
   }

  ngOnInit() {
    this.data.currentUser.subscribe(user => this.currentUser = user);
  }


}
