abstract class Button {
  abstract click(): void;
}

class WindowsButton extends Button {
  click() {
    console.log("WindowsClick");
  }
}

class LinuxButton extends Button {
  click() {
    console.log("LinuxClick");
  }
}

class ButtonFactory {
  static getButtonInstance(os: string): Button {
    switch (os) {
      case "Linux":
        return new LinuxButton();
      case "Windows":
        return new WindowsButton();
      default:
        throw Error("Unsuported system");
    }
  }
}

const os: string = "Windows";
console.log(ButtonFactory.getButtonInstance(os));
