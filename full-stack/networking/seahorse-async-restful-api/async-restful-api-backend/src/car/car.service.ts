import { Injectable } from '@nestjs/common';
import { Car } from './car.entity';

@Injectable()
export class CarService {

	private cars: Car[] = [
		{
			id: 1,
			make: 'Honda',
			model: 'Civic',
			year: 2010
		},
		{
			id: 2,
			make: 'Toyota',
			model: 'Corolla',
			year: 2015
		}
	];

	getCars(): Promise<Car[]> {
		return new Promise<Car[]>((resolve) => setTimeout(() => resolve(this.cars), 2000));
	}
}
