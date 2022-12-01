class HidraulicSystem {
  stateFirstValve = false;
  stateSecondValve = false;
  stateMasterValve = false;
}

class EnergySystem {
  stateFirstSwitch = false;
  stateSecondSwitch = false;
  stateMasterSwitch = false;
}

class House {
  private hidraulicSystem = new HidraulicSystem();
  private energySystem = new EnergySystem();

  turnSystemsOn() {
    //lot of complicated code
    this.hidraulicSystem.stateFirstValve = true;
    this.hidraulicSystem.stateSecondValve = true;
    this.hidraulicSystem.stateMasterValve = true;

    this.energySystem.stateFirstSwitch = true;
    this.energySystem.stateSecondSwitch = true;
    this.energySystem.stateMasterSwitch = true;
  }

  turnSystemsOff() {
    //lot of complicated code
    this.hidraulicSystem.stateFirstValve = false;
    this.hidraulicSystem.stateSecondValve = false;
    this.hidraulicSystem.stateMasterValve = false;

    this.energySystem.stateFirstSwitch = false;
    this.energySystem.stateSecondSwitch = false;
    this.energySystem.stateMasterSwitch = false;
  }
}

const house = new House();

//simple implementation
house.turnSystemsOff();
house.turnSystemsOn();
