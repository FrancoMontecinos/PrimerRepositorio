const Math = {}; //creo un objeto

//Añado propiedades

function add(x1,x2) {
    return x1+x2;
}

function subtract(x1,x2) {
    return x1-x2;
}

function multiply(x1,x2) {
    return x1*x2;
}

function divide(x1,x2) {
    if (x2==0) 
    {
       console.log('Error, division por 0');   
    }
    else
    {
       return x1/x2;
    }
}


//invoco las funciones 
Math.add  =  add;
Math.subtract = subtract;
Math.multiply= multiply;
Math.divide = divide;

function hello(name) {
    console.log('Hola ', name);
    
}

module.exports = hello;

//module.exports = Math; //exporta mi objeto Math


/*exports.add = add; (Importa la propiedad de un objeto)
exports.subtract = subtract;
exports.multiply = multiply;
exports.divide = divide; */



