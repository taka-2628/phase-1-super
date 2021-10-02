class Pet {
    constructor(name) {
        this.name = name;
        this._owner = null;
    }
  
    get owner() {
        return this._owner;
    }
  
    set owner(owner) {
        this._owner = owner;
    }
}

class Dog extends Pet {
    constructor(name, breed) {
        super(name); /* new */
        this._breed = breed;
    }
  
    get breed() {
        return this._breed;
    }
  
    get info() {
        if (super.owner) {
            return `${this.name} is a ${this.breed} owned by ${super.owner}`;
        }
        return `${this.name} is a ${this.breed}`;
    }
}

let charlie = new Dog('Charlie', 'Bulldog');
console.log(charlie)
// => Dog { name: 'Charlie', _owner: null, _breed: 'Bulldog' }
console.log(charlie.info)
// => Charlie is a Bulldog

let lucky = new Dog('Lucky', 'Golden Retriever')
lucky.owner = 'Rose'
console.log(lucky)
// => Dog { name: 'Lucky', _owner: 'Rose', _breed: 'Golden Retriever' }
console.log(lucky.info)
// => Lucky is a Golden Retriever owned by Rose


/* Call Parent Class's Method inside its method
class Rectangle {
    static logNumberOfSides() {
        return 'I have 4 sides';
    }
}

class Square extends Rectangle {
    static logDescription() {
        return super.logNumberOfSides() + ' which are all equal';
    }
}

console.log(Square.logDescription())
// => I have 4 sides which are all equal
*/

/* Call Parent Class's Constructor 
class Rectangle {
    constructor(height, width) {
        this.name = 'Rectangle';
        this.height = height;
        this.width = width;
    }
    sayName() {
        console.log('Hi, I am a ', this.name + '.');
    }
    get area() {
        return this.height * this.width;
    }
}
  
class Square extends Rectangle {
    constructor(length) {
        // Here, it calls the parent class's constructor with lengths provided for the Rectangle's width and height
        super(length, length);
  
        // Note: In derived classes, super() must be called before you can use 'this'
        this.name = 'Square';
    }
}

const square = new Square(6)
console.log(square)
// => Square { name: 'Square', height: 6, width: 6 }
console.log(square.area)
// => 36
square.sayName()
// => Hi, I am a  Square.
*/