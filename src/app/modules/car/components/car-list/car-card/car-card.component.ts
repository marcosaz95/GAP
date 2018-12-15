import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { ICar } from 'src/app/models/interfaces/car.interface';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css']
})
export class CarCardComponent implements OnInit {

  @Input() car: ICar;

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  redirectToDetail() {
    this._router.navigate(['list', this.car.id]);
  }

}
