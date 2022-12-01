class PowerPlugWithTwoPins {
  firstPin = false;
  secondPin = false;

  connectFirstPin() {
    this.firstPin = true;
  }
  connectSecondPin() {
    this.secondPin = true;
  }

  turnEnergyOn() {
    const allPinsConnected = this.firstPin && this.secondPin;
    if (allPinsConnected) {
      console.log("Energy is on!");
    } else {
      throw Error("Pins not connected");
    }
  }
}

class PowerPlugWithThreePins {
  firstPin = false;
  secondPin = false;
  thirdPin = false;

  connectFirstPin() {
    this.firstPin = true;
  }
  connectSecondPin() {
    this.secondPin = true;
  }

  connectThirdPin() {
    this.thirdPin = true;
  }

  turnEnergyOn() {
    const allPinsConnected = this.firstPin && this.secondPin && this.thirdPin;
    if (allPinsConnected) {
      console.log("Energy is on!");
    } else {
      throw Error("Pins not connected");
    }
  }
}

class ThreePinsAdapter extends PowerPlugWithTwoPins {
  constructor(private powerPlug: PowerPlugWithThreePins) {
    super();
  }

  connectFirstPin() {
    this.powerPlug.connectFirstPin();
  }
  connectSecondPin() {
    this.powerPlug.connectSecondPin();

    //adapting!!!!
    this.powerPlug.connectThirdPin();
  }
  turnEnergyOn() {
    this.powerPlug.turnEnergyOn();
  }
}

class SocketWithTwoHoles {
  connect(powerPlug: PowerPlugWithTwoPins) {
    powerPlug.connectFirstPin();
    powerPlug.connectSecondPin();
    powerPlug.turnEnergyOn();
  }
}

const twoPinPlug = new PowerPlugWithTwoPins();
const threePinPlug = new PowerPlugWithThreePins();
const socket = new SocketWithTwoHoles();

socket.connect(twoPinPlug); //works

try {
  socket.connect(threePinPlug); // ERROR!! cant be called because of third pin not being connected
} catch (error: any) {
  console.log(error.message); // Pins not connected
}

const threePinPlugWithAdapter = new ThreePinsAdapter(threePinPlug);
socket.connect(threePinPlugWithAdapter); // works, solves the problem by adapting!
