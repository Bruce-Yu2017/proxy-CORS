import {Component, OnInit} from '@angular/core';
import {Car} from '../types';
import {CarProvider} from '../../../providers/car';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars: Car[] = [];

  constructor(private carProvider: CarProvider) {}

  ngOnInit() {
    this.refreshCars();
  }

  private refreshCars() {
    this.carProvider
      .index()
      .subscribe(cars => { 
        console.log('cars: ', cars);
        
        this.cars = cars; });
  }
}
