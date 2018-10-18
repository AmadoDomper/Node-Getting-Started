class Person {
    constructor(naasdfme1){
        this.name = naasdfme1;
    }
    greet1(){
        console.log(`Hello I'm, you know, ${this.name}!`);
    }

    greet(){
        console.log(`Hello I'm ${this.name}!`);
    }
}

class Student extends Person{
    constructor(name, level){
        super(name);
        this.level = level;
    }
    greet(){
        console.log(`Hello ${this.name} from ${this.level}`);
    }
}

const o1 = new Person("Max");
const o2 = new Student("Tina", "1st Grade");
const o3 = new Student("Mary", "2nd Grade");


o1.greet1();
o1.greet();

o1.greet = () => console.log('I am very special!');

o1.greet();

o2.greet();

o3.greet();

o3.greet = () => console.log('I am special!');

o3.greet();