
class Calculator {
    constructor(){
        this.number = 0
    }
    add = (a,b) => {
      return a + b;  
    }

    subtract = (a,b) => a - b;
    
    divide = (a,b) => a / b;

    multiply = (a,b) => a * b;
}

module.exports = Calculator;