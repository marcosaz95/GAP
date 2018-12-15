import { CarMainComponent } from './components/car-main/car-main.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: CarMainComponent,
    children: [
      { path: '', redirectTo: 'browse', pathMatch: 'full' },
      { path: 'browse', component: CarListComponent },
      { path: 'browse/:id', component: CarListComponent },
      { path: 'compare', component: CarListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarRoutingModule { }