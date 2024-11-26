import { Component } from '@angular/core';
import { Car } from './car.interface';
import { ListService } from './car-list.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent {

	cars: Observable<Car[]> = of([]);
  
  constructor(protected listService : ListService) {}

	loadCars() {
		this.cars = this.listService.getCars();
	}
}