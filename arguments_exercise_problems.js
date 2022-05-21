// function sum() {
//   let total = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     total += arguments[i];
//   }
//   return total;
// }

function sum(...args) {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}

Function.prototype.myBind = function(context) {
  const that = this;
  const bindArgs = Array.from(arguments).slice(1);
  return function() {
    const callArgs = Array.from(arguments);

    return that.apply(context, bindArgs.concat(callArgs))
  }
}

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

const notMarkovSays = markov.says.myBind(pavlov);
notMarkovSays("meow", "me");