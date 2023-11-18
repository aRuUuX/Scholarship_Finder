import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScholarshipsComponent } from './scholarships.component';
import { ScholarshipRoutingModule } from './scholarship-routing.module';



@NgModule({
  declarations: [
    ScholarshipsComponent
  ],
  imports: [
    CommonModule,
    ScholarshipRoutingModule
  ]
})
export class ScholarshipsModule { }
