class ElectricVehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log("beep");
  }
}

const electricVehicle = new ElectricVehicle("orange");
console.log(electricVehicle.color);

class ElectricCar extends ElectricVehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log("vroom");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const carA = new ElectricCar(4, "red");
carA.startDrivingProcess();
