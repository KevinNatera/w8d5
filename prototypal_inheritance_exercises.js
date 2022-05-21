function Surrogate() {};
    Surrogate.prototype = SuperClass.prototype;
    SubClass.prototype = new Surrogate();
    SubClass.prototype.constructor = SubClass;


// Function.prototype.inherits = function(SuperClass) {
//     function Surrogate() {};
//     Surrogate.prototype = SuperClass.prototype;
//     this.prototype = new Surrogate();
//     this.prototype.constructor = this;
// }

Function.prototype.inherits = function(SuperClass) {
       this.prototype = Object.create(SuperClass.prototype);
       this.prototype.constructor = this;
}


function MovingObject () {}

function Ship () {}
Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);

