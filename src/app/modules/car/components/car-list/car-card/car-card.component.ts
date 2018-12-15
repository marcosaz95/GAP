import { Component, OnInit, Input } from '@angular/core';
import { ICar } from 'src/app/models/interfaces/car.interface';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css']
})
export class CarCardComponent implements OnInit {

  @Input() car: ICar;

  constructor() { }

  ngOnInit() {
  }

}
