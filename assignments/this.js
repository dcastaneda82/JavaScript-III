// /* The for principles of "this";
// * in your own words. explain the four principle for the "this" keyword below.
// *
// * 1. Global Object Binding will bind 'this' to the window/console making it one big object.
function whatsMyName(name) {
    console.log(this);
    return name;
  }
  console.log(whatsMyName('dii'));
  // whatsMyName("dii");

// * 2. Implicit Binding is when 'this' is binded to the object and becomes anything before the period. 
const who = {
  greeting: 'Hello',
  sayHello: function(name) {
    console.log(`${this.greeting} my name is also ${name}! :) `);
    console.log(this);
  }
};
console.log(who.sayHello('dii'));

// * 3. New binding allows us to use 'this in a constructor function help create new objects by binding attributes.
function Robot(process) {
  this.processing = 'Autobots ';
  this.process = process;
  this.speak = function() {
    console.log(`${this.processing} roll ou...awe come on ${this.process}`);
    console.log(this);
  };
}

const optimus = new Robot('bumblebee');
const bumblebee = new Robot('optimus');

optimus.speak();
bumblebee.speak();

// * 4. Explicit binding allows us override what the constructor is set to.
optimus.speak.call(bumblebee);
bumblebee.speak.apply(optimus);
