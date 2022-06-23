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

Song.prototype.getInfo = function () {
  return `${this.title} by ${this.artist} is ${this.duration} minutes long and was released in ${this.release}`;
};
const song1 = new Song("The Power of Love", "The Beatles", "3:45", "1963");
const song2 = new Song("DNA", "BTS", "3:45", "2015");

console.log(song1.getInfo());

// ES6 Classes - Classes are syntactic sugar for creating objects.
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
}
const song3 = new Song_ES6("The Power of Love", "The Beatles", "3:45", "1963");
const song4 = new Song_ES6("DNA", "BTS", "3:45", "2015");
console.log(song3.getInfo());
