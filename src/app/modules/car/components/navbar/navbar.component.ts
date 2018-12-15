import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentRoute: string;

  constructor(private _router: Router) { 
    this.currentRoute = 'list';
  }

  ngOnInit() {
  }

  redirectTo(route: string) {
    this.currentRoute = route;
    this._router.navigate([route]);
  }

}
