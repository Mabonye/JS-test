class Person {
    constructor(firstname){
        this.firstname = firstname;
    }
    sayHello() {
        console.log(`Hello my name is ${this.firstname}`);
    }
}

const mima = new Person("mima");
mima.sayHello();