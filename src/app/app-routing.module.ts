import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrailComponent } from './trail/trail.component';

const routes: Routes = [
  {path:"t",component:TrailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
