class Observer {
  update(emiter: Emiter) {
    console.log(emiter.message);
  }
}

class ObserverA extends Observer {
  update(emiter: Emiter) {
    console.log(" Observer A listened to: ");
    super.update(emiter);
  }
}
class ObserverB extends Observer {
  update(emiter: Emiter) {
    console.log(" Observer B listened to: ");
    super.update(emiter);
  }
}

class Emiter {
  private observers: Observer[] = [];
  message: string | null = null;

  subscribe(observer: Observer) {
    this.observers.push(observer);
  }

  emit(message: string) {
    this.message = message;
    this.observers.forEach((observer) => {
      observer.update(this);
    });
  }
}

const observerA = new ObserverA();
const observerB = new ObserverB();

const emiter = new Emiter();
emiter.emit("Ninguem para ouvir essa mensagem");
emiter.subscribe(observerA);
emiter.emit("Agora o A");
console.log("\n");
emiter.subscribe(observerB);
emiter.emit("E agora os dois!");
