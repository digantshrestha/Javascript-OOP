function Person(firstName, lastName, age){
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
}

Person.prototype.getInfo=function(){
    return `My name is ${this.firstName} ${this.lastName} and my age is ${this.age}`;
}

Person.prototype.getFullName=function(){
    return this.firstName+" "+this.lastName;
}

function Animal(firstName, age, lastName, type){
    Person.call(this, firstName, lastName, age, type);
    this.type=type;
}

Animal.prototype=Object.create(Person.prototype);

//Use Animal constructor
Animal.prototype.constructor=Animal;

const animal=new Animal("Tommy", 10,"doe", "dog");

console.log(animal);

