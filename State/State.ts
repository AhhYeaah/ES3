interface Mood {
  think(): void;
}

class HappyMood implements Mood {
  think() {
    console.log("Wow, Im happy :)");
  }
}

class SadMood implements Mood {
  think() {
    console.log("Wow, Im Sad :(");
  }
}

class NeutralMood implements Mood {
  think() {
    console.log("Im ok. :|");
  }
}

class Human {
  moodState: Mood;
  constructor(mood: Mood) {
    this.moodState = mood;
  }

  think() {
    //no weird mood switch case
    this.moodState.think();
  }
}

const mood = new HappyMood();
const human = new Human(mood);

human.think();
