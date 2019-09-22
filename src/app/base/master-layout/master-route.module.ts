import { NgModule } from '@angular/core';
import {LandingComponent} from '../../pages/landing/landing.component';
import {RouterModule} from '@angular/router';

const masterRoutes = [
  { path: 'home', component: LandingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(masterRoutes)],
  exports: [RouterModule]
})
export class MasterRouteModule { }
