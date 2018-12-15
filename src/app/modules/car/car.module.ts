import { GapValidator } from './../../common/validators';
import { CarService } from './../../models/services/car.service';
import { Car } from './../../models/classes/car';
import { CarMainComponent } from './components/car-main/car-main.component';
import { CarRoutingModule } from './car-routing.module';
import { NgModule } from '@angular/core';
import { CarListComponent } from './components/car-list/car-list.component';
import { CommonModule } from '@angular/common';
import { CarCardComponent } from './components/car-list/car-card/car-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarCompareComponent } from './components/car-compare/car-compare.component';


@NgModule({
    imports: [
        CommonModule,
        CarRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        NavbarComponent,
        CarListComponent,
        CarMainComponent,
        CarCardComponent,
        CarDetailComponent,
        CarCompareComponent,
    ],
    providers: [
        Car,
        CarService,
        GapValidator
    ],
    bootstrap: []
})
export class CarModule { }
