import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarListComponent } from './car-list/car-list.component';
import { CarCardComponent } from './car-card/car-card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FuelLevelReportComponent } from './fuel-level-report/fuel-level-report.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [CarListComponent, CarCardComponent, DashboardComponent, FuelLevelReportComponent],
  exports: [DashboardComponent]
})
export class DashboardModule { }
