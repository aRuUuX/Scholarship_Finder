import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ScholarshipsComponent } from './scholarships.component';


const routes : Routes = [
  {
    path: '',
    component: ScholarshipsComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScholarshipRoutingModule { }
