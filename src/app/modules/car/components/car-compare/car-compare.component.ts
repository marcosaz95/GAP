import { GapValidator } from './../../../../common/validators';
import { Component, OnInit } from '@angular/core';
import { ICar } from 'src/app/models/interfaces/car.interface';
import { Car } from 'src/app/models/classes/car';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-car-compare',
  templateUrl: './car-compare.component.html',
  styleUrls: ['./car-compare.component.css']
})
export class CarCompareComponent implements OnInit {

  cars: ICar[]
  JSON = JSON;
  carsForm: FormGroup;
  carsToShow: ICar[];

  constructor(private _car: Car, private _router: Router, private fb: FormBuilder, private _validators: GapValidator) {
    this.carsToShow = [];
  }

  ngOnInit() {
    if (!this._car.carList) {
      this._router.navigate(['list']);
    } else {
      this.carsForm = this.fb.group({
        firstCar: null,
        secondCar: null,
        thirdCar: null
      }, { validator: [this._validators.carSelectedValidator.bind(this)] });
      this.cars = this._car.carList;
    }
  }

  compareCars() {
    this.carsToShow = [];
    const firstCar = this.carsForm.get('firstCar') && this.carsForm.get('firstCar').value ? this.carsForm.get('firstCar').value : null;
    const secondCar = this.carsForm.get('secondCar') && this.carsForm.get('secondCar').value ? this.carsForm.get('secondCar').value : null;
    const thirdCar = this.carsForm.get('thirdCar') && this.carsForm.get('thirdCar').value ? this.carsForm.get('thirdCar').value : null;
    if (firstCar) {
      this.carsToShow.push(firstCar)
    }
    if (secondCar) {
      this.carsToShow.push(secondCar)
    }
    if (thirdCar) {
      this.carsToShow.push(thirdCar)
    }
  }

  isSelectedTwoCars() {
    const firstCarId = this.carsForm.get('firstCar') && this.carsForm.get('firstCar').value ? this.carsForm.get('firstCar').value.id : 0;
    const secondCarId = this.carsForm.get('secondCar') && this.carsForm.get('secondCar').value ? this.carsForm.get('secondCar').value.id : 0;
    const thirdCarId = this.carsForm.get('thirdCar') && this.carsForm.get('thirdCar').value ? this.carsForm.get('thirdCar').value.id : 0;
    return (firstCarId && secondCarId) || (thirdCarId && secondCarId) || (firstCarId && thirdCarId);
  }

}
