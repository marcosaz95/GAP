import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  carList: any;
  constructor(private _http: HttpClient) { }

  ngOnInit() {
    this._http.get('./assets/cars.json').subscribe((data) => this.carList = data);
  }

}
