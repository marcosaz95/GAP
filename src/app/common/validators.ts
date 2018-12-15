import { ValidationErrors, FormGroup } from '@angular/forms';
import { Injectable } from "@angular/core";

@Injectable()
export class GapValidator {

    constructor() { }

    carSelectedValidator(group: FormGroup): ValidationErrors | null {
        const firstCarId = group.get('firstCar') && group.get('firstCar').value ? group.get('firstCar').value.id : 0;
        const secondCarId = group.get('secondCar') && group.get('secondCar').value ? group.get('secondCar').value.id : 0;
        const thirdCarId = group.get('thirdCar') && group.get('thirdCar').value ? group.get('thirdCar').value.id : 0;
        if ((firstCarId && secondCarId) || (thirdCarId && secondCarId) || (firstCarId && thirdCarId))  {
            if (firstCarId === secondCarId || firstCarId === thirdCarId || secondCarId === thirdCarId) {
                return { isCarDuplicated: true };
            } 
        }
        return null;
    }
}