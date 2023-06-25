import { CreateCarInput } from '../dto/createCarInput';
import { UpdateCarInput } from '../dto/updateCarInput';

export interface ICarMainCreate {
  createCarInput: CreateCarInput;
}

export interface IPropsFetchOne {
  carId?: string;

  carName: string;
}

export interface ICarMainDelete {
  carId: string;
}

export interface ICarMainUpdate {
  carName: string;

  updateCarInput: UpdateCarInput;
}
