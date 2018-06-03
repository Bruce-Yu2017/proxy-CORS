import {Component, Input, OnInit} from '@angular/core';
import {Car} from '../types';
import {IntervalObservable} from 'rxjs/observable/IntervalObservable';
import {CarProvider} from '../../../providers/car';

@Component({
  selector: 'app-fuel-level-report',
  templateUrl: './fuel-level-report.component.html',
  styleUrls: ['./fuel-level-report.component.css']
})
export class FuelLevelReportComponent implements OnInit {

  @Input() car: Car;

  constructor(private carProvider: CarProvider) { }

  ngOnInit() {
    IntervalObservable
      .create(1000)
      .subscribe(() => this.refreshFuelLevel());
  }

  fuel_level_warning(): boolean {
    return 0.4 <= this.car.fuel_level && this.car.fuel_level < 0.7;
  }

  fuel_level_danger(): boolean {
    return this.car.fuel_level < 0.4;
  }

  private refreshFuelLevel(): void {
    this.carProvider
      .get(this.car.id)
      .subscribe(car => { this.car = car; });
  }
}
