class Person{
    constructor(firstName, lastName, age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }

    static getFirstName(){
        return this.firstName;
    }

    getLastName(){
        return this.lastName;
    }

    getFullName(){
        return this.firstName+" "+this.lastName;
    }

    getInfo(){
        return `My name is ${this.getFullName()} and I am ${this.age} years old`;
    }
}

const person=new Person("Ram", "Bahadur", 29);

console.log(Person.getFirstName());