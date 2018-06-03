import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Car} from '../app/dashboard/types';
const URL = 'https://yoshi-frontend-challenge.herokuapp.com/cars';

@Injectable()

export class CarProvider {
 
  constructor(private http: HttpClient) {
    

  }

  index() {
    return this.http.get<Car[]>(`/cars/`);
  }

  get(id: number): Observable<Car> {
    return this.http.get<Car>(`/cars/${id}`);
  }

  // rename(car) {
  //   this.http.put(`/cars/${car.id}`, {name: car.name}).toPromise().then((res) => {
  //     console.log(res);
  //   })
  // }
  rename(car) {
    this.http.post(`/cars`, {name: car.name}).toPromise().then((res) => {
      console.log(res);
    })
  }

  // TODO: please add a new method to create a new car
}
