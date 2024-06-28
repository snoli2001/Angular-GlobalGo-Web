interface IEngine {
    type: string;
    displacement: string;
    power: string;
    torque: string;
    transmission:string;
    powerByGallon:string;
}

interface IDimensions {
    length: string;
    width: string;
    height: string;
    wheelbase: string;
}

interface ICoordinates{
    latitude: string;
    longitude:string;
}

interface IStore{
    name:string;
    address:string;
    district:string;
    phone:string;
    coordinates: ICoordinates;
}

interface IWarranty{
    km:string;
    months:string;
}

interface IColor{
    color:string;
}

interface IMotorcycle {
    id: number;
    make: string;
    model: string;
    year: number;
    engine: IEngine;
    dimensions: IDimensions;
    weight: string;
    price: string;
    url:string;
    type:string;
    driving_position:string;
    stores: IStore[];
    brakes:string;
    cylinders:string;
    style:string;
    warranty:IWarranty;
    colors:IColor[];
}
