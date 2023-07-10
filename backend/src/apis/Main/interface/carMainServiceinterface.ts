import { CreateCarInput } from '../dto/createCarInput';
import { UpdateCarInput } from '../dto/updateCarInput';

export interface ICarMainCreate {
  createCarInput: CreateCarInput;
}

export interface ICarmainFetchOne {
  carId?: string;

  carName: string;
}

export interface ICarMainDelete {
  carId: string;
}

export interface ICarmainFetchCar {
  carName: string[];
}

export interface IPropsCarServiceBulkInsert {
  names: {
    name: string;
  }[];
}

export interface ICarmainCreate {
  createCarInput: CreateCarInput;
}

export interface ICarmainUpdate {
  carId: string;
  carName: string;
  updateCarInput: UpdateCarInput;
}
