import { CarMainComponent } from './components/car-main/car-main.component';
import { CarRoutingModule } from './car-routing.module';
import { NgModule } from '@angular/core';
import { CarListComponent } from './components/car-list/car-list.component';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
        CarListComponent,
        CarMainComponent
    ],

    imports: [
        CommonModule,
        CarRoutingModule
    ],
    providers: [],
    bootstrap: []
})
export class CarModule { }
