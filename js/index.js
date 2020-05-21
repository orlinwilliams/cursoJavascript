var variable=3;

console.log(typeof(variable));

//OPERADOR TERNARIO
var nombre="pablo";
var edad=20;
edad >= 18 ? console.log("Es mayor de edad") :console.log("No es mayor de edad") ;
nombre={key:"key",nombre:"holis", edad:18}

var imprime=()=>{
    console.log("si es mayor de edad");
}

var imprime2=()=>{
    console.log("holis que si");
}
nombre.edad>=30? imprime(): imprime2(); 
//FIN OPERADOR TERNARIO

//TEMPLATE STRING ALT 96 ``
var nombre="pancho";
console.log(`Holis ${nombre} ${10+30}`); 


