// interface IEngine {
//     type: string;
//     displacement: string;
//     power: string;
//     torque: string;
//     transmission:string;
//     powerByGallon:string;
// }

// interface IDimensions {
//     length: string;
//     width: string;
//     height: string;
//     wheelbase: string;
// }

// interface ICoordinates{
//     latitude: string;
//     longitude:string;
// }

// interface IStore{
//     name:string;
//     address:string;
//     district:string;
//     phone:string;
//     coordinates: ICoordinates;
// }

// interface IWarranty{
//     km:string;
//     months:string;
// }

// interface IColor{
//     color:string;
// }

// export interface IMotorcycle {
//     id: number;
//     make: string;
//     model: string;
//     year: number;
//     engine: IEngine;
//     dimensions: IDimensions;
//     weight: string;
//     price: string;
//     url:string;
//     type:string;
//     driving_position:string;
//     stores: IStore[];
//     brakes:string;
//     cylinders:string;
//     style:string;
//     warranty:IWarranty;
//     colors:IColor[];
// }


export interface IMotorcycle {
    idModelo: number;
    modelo: string;
    rgb: string;
    precio: number;
    logo: string;
    marca: string;
    imagen: string;
    cilindrada: string;
    potencia: string;
    torque: string;
    combustible: string;
    tanque: string;
    rendimiento: string;
    autonomia: string;
    transmision: string;
    velocidad: string;
    suspension_delantero: string;
    peso: string;
    carga: string;
    largo: string;
    ancho: string;
    alto: string;
}