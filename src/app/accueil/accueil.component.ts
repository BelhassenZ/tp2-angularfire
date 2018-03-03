import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../Entity/user';
import { Router } from '@angular/router';
import { DataService } from '../service/data-sharing.service';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
    private user : User;
    private pathPrefix : string = "../assets/img/";

    constructor(private router: Router, private data: DataService) { 
      this.user = new User();
  }

  ngOnInit() {
    this.data.currentUser.subscribe(user => this.user = user);
  }

  onSubmit() {
    this.data.changeUser(this.user);
    this.router.navigate(['/publications']);
  }

}
