import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarCompareComponent } from './components/car-compare/car-compare.component';
import { CarMainComponent } from './components/car-main/car-main.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: CarMainComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: CarListComponent },
      { path: 'list/:id', component: CarDetailComponent },
      { path: 'compare', component: CarCompareComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarRoutingModule { }