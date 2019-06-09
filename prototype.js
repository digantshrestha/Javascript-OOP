function Person(firstName, lastName, age){
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
    this.getFullName=function(){
        return this.firstName+" "+this.lastName;
    }
}

Person.prototype.getInfo=function(){
    return `My name is ${this.firstName} ${this.lastName} and my age is ${this.age}`;
}

Person.prototype.setFirstName=function(firstName){
    this.firstName=firstName;
}

Person.prototype.getFirstName=function(){
    return this.firstName;
}

const person=new Person("Digant", "Shrestha", 17);

person.setFirstName("Ram");
console.log(person.getInfo());
