const person={
    firstName:"digant",
    lastName:"shrestha",
    age:"17",
    getFullName:function(){
        return this.firstName+" "+this.lastName;
    },
    getInfo : function(fName, lName, year){
        return `My name is ${fName} ${lName} and my age is ${year}`;
    }
};

console.log(person.getInfo("Ram", "Bahadur", 60));