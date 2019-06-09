function Person(firstName, lastName, age){
    this.fName=firstName;
    this.lName=lastName;
    this.year=age;
    this.getFullName=function(){
        return this.fName+" "+this.lName;
    }
    this.getInfo=function(){
        return `My name is ${this.fName} ${this.lName} and my age is ${this.year}`;
    }
}

const person=new Person("Digant", "Shrestha", 17);

console.log(person.getAge());
