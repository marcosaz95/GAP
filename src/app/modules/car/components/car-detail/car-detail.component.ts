import { Car } from './../../../../models/classes/car';
import { ICar } from 'src/app/models/interfaces/car.interface';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  @Input() car?: ICar;

  constructor(private _activatedRoute: ActivatedRoute, private _car: Car, private _router: Router) {
    if (!this._car.carList) {
      this._router.navigate(['list']);
    } else {
      if (!this.car) {
        this._activatedRoute.params.subscribe((params) => {
          if (params['id']) {
            this.car = this._car.getCarById(params['id']);
          }
        });
      }
    }
  }
  
  ngOnInit() {
  }

}
