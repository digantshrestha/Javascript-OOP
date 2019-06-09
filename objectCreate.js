// Object of Protos

const person={
    getInfo: function(){
        return `My name is ${this.firstName} ${this.lastName} and my age is ${this.age}`;
    },
    getFullName:function(){
        return `${this.firstName} ${this.lastName}`;
    }
};

//Create Object

const man=Object.create(person);
man.firstName="Ram";
man.lastName="Bahadur";
man.age=23;



console.log(man.getFirstName());

