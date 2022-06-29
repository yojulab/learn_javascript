// function way (legacy) of OOP
function Song(title, artist, duration, release) {
  this.title = title;
  this.artist = artist;
  this.duration = duration;
  this.release = release;

  console.log(
    `${this.title} by ${this.artist} was released in ${this.release}`
  );
}

// add function in Object function
Song.prototype.getInfo = function () {
  return `${this.title} by ${this.artist} is ${this.duration} minutes long and was released in ${this.release}`;
};
const song1 = new Song("The Power of Love", "The Beatles", "3:45", "1963");
const song2 = new Song("DNA", "BTS", "3:45", "2015");

console.log(song1.getInfo());

// ES6 Classes - Classes are syntactic sugar for creating objects.
// include any fields and methods
class Song_ES6 {
  constructor(title, artist, duration, release) {
    this.title = title;
    this.artist = artist;
    this.duration = duration;
    this.release = release;
  }

  getInfo() {
    return `${this.title} by ${this.artist} is ${this.duration} minutes long and was released in ${this.release}`;
  }

  get duration() {
    return this._duration;
  }
  set duration(value) {
    if (value <= "0:00") {
      // throw Error("duration can not be negative!!");
      value = "2:20";
    }
    this._duration = value;
  }
}
const song3 = new Song_ES6("The Power of Love", "The Beatles", "2:45", "1963");
console.log(`song3.getInfo : ${song3.getInfo()}`);

const song4 = new Song_ES6("DNA", "BTS", "0:00", "2015");
console.log(`song4 get duration : ${song4.duration}`);
