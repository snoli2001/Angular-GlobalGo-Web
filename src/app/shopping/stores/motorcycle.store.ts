import { IMotorcycle } from "../models/Motorcycle";

export interface MotorcycleState {
  motorcycles: IMotorcycle[];
}

export const initialState: MotorcycleState = {
  motorcycles: []
};

// export const MotorcycleStore = signalStore()
