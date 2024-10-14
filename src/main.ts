import { hello, sayIt } from './utils';

let mike = {
    age: 25, 
    name:"Mike", 
    say: function() { 
        return "My name is " + this.name + 
               " and I'm " + this.age + " years old!"
    }
}

console.log(hello())

console.log(sayIt(mike))