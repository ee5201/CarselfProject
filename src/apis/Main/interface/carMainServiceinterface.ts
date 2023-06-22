import { CreateCarInput } from '../dto/createCarInput';

export interface ICarMainCreate {
  createCarInput: CreateCarInput;
}

export interface IPropsFetchOne {
  carId: string;
}
