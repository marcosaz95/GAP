import { CarService } from './../services/car.service';
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ICar } from '../interfaces/car.interface';

@Injectable()
export class Car {
    private _carList: ICar[];

    constructor(private _carService: CarService) { }

    getCars(): Observable<any> {
        return this._carService.getCars();
    }

    set carList(carList: ICar[]) {
        this._carList = carList;
    }

    get carList(): ICar[] {
        return this._carList;
    }
}