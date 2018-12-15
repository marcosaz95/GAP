import { Car } from './../../../../models/classes/car';
import { Component, OnInit } from '@angular/core';
import { ICar } from 'src/app/models/interfaces/car.interface';
import { brandsValues } from 'src/app/common/constants';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  carList: ICar[];
  brands: string[];
  searchText: string;
  constructor(private _car: Car) { 
    this.searchText = brandsValues.all;
  }

  ngOnInit() {
    this._car.getCars().subscribe((carList: ICar[]) => {
      this.carList = carList.sort((car1: ICar, car2: ICar) => {
        if (car1.brand > car2.brand) {
          return 1;
        }
        return -1;
      })
      this._car.carList = this.carList;
      this.brands = this.carList.map(car => car.brand).filter((value, index, self) => self.indexOf(value) === index);
    });
  }

  searchCarByBrand(searchText: string) {
    if (searchText === brandsValues.all) {
      this.carList = this._car.carList;
    } else {
      this.carList = this._car.carList.filter((car: ICar) => car.brand === searchText);
    }
  }

}
