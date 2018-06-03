import {Component, Input, OnInit} from '@angular/core';
import {Car} from '../types';
import { CarProvider } from '../../../providers/car';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css']
})
export class CarCardComponent implements OnInit {

  @Input() car: Car;

  edit = false;

  constructor(private provider: CarProvider) {}

  ngOnInit() {
  }

  onSubmit() {
    this.edit = false;
    this.provider.rename(this.car);
  }

}
