//operaciones
const resta = document.querySelector(".resta");
const suma = document.querySelector('.suma');
const multiplicacion = document.querySelector('.multiplicacion');
const dividir = document.querySelector('.dividir')

const LCD = document.querySelector(".LCD");

//opciones
const igual = document.querySelector('.igual');
const del = document.querySelector('.borrar');

//numeros
const uno = document.querySelector('.one'); 
const dos = document.querySelector('.two'); 
const tres = document.querySelector('.three'); 
const cuatro = document.querySelector('.four'); 
const cinco = document.querySelector('.five'); 
const seis = document.querySelector('.six'); 
const siete = document.querySelector('.seven'); 
const ocho = document.querySelector('.eight'); 
const nueve = document.querySelector('.nine'); 
const cero = document.querySelector('.zero'); 

let numeroA = 0;
let numeroAstring = '';
let numeroB = 0;
let numeroBstring = '';
let isNumeroA = false;
let isSuma = false;
let operacion = '';
let inOperacion = false;
let isResta = false;
let isMultiplicacion = false;
let isDivision = false;
let resultado = 0;

uno.addEventListener("click", (e)=>{
    e.preventDefault();
    if (isNumeroA && inOperacion){
        numeroBstring += '1'
        LCD.value = numeroAstring + operacion + numeroBstring
    }else{
        numeroAstring += '1';
        LCD.value = numeroAstring
    }
})

dos.addEventListener("click", (e)=>{
    e.preventDefault();
    if (isNumeroA  && inOperacion){
        numeroBstring += '2'
        LCD.value = numeroAstring + operacion + numeroBstring
    }else{
        numeroAstring += '2';
        LCD.value = numeroAstring
    }
})

tres.addEventListener("click", (e)=>{
    e.preventDefault();
    if (isNumeroA  && inOperacion){
        numeroBstring += '3'
        LCD.value = numeroAstring + operacion + numeroBstring
    }else{
        numeroAstring += '3';
        LCD.value = numeroAstring
    }
})

cuatro.addEventListener("click", (e)=>{
    e.preventDefault();
    if (isNumeroA  && inOperacion){
        numeroBstring += '4'
        LCD.value = numeroAstring + operacion + numeroBstring
    }else{
        numeroAstring += '4';
        LCD.value = numeroAstring
    }
})


cinco.addEventListener("click", (e)=>{
    e.preventDefault();
    if (isNumeroA  && inOperacion){
        numeroBstring += '5'
        LCD.value = numeroAstring + operacion + numeroBstring
    }else{
        numeroAstring += '5';
        LCD.value = numeroAstring
    }
})


seis.addEventListener("click", (e)=>{
    e.preventDefault();
    if (isNumeroA  && inOperacion){
        numeroBstring += '6'
        LCD.value = numeroAstring + operacion + numeroBstring
    }else{
        numeroAstring += '6';
        LCD.value = numeroAstring
    }
})

siete.addEventListener("click", (e)=>{
    e.preventDefault();
    if (isNumeroA  && inOperacion){
        numeroBstring += '7'
        LCD.value = numeroAstring + operacion + numeroBstring
    }else{
        numeroAstring += '7';
        LCD.value = numeroAstring
    }
})

ocho.addEventListener("click", (e)=>{
    e.preventDefault();
    if (isNumeroA  && inOperacion){
        numeroBstring += '8'
        LCD.value = numeroAstring + operacion + numeroBstring
    }else{
        numeroAstring += '8';
        LCD.value = numeroAstring
    }
})

nueve.addEventListener("click", (e)=>{
    e.preventDefault();
    if (isNumeroA  && inOperacion){
        numeroBstring += '9'
        LCD.value = numeroAstring + operacion + numeroBstring
    }else{
        numeroAstring += '9';
        LCD.value = numeroAstring
    }
})

cero.addEventListener("click", (e)=>{
    e.preventDefault();
    if (isNumeroA  && inOperacion){
        numeroBstring += '0'
        LCD.value = numeroAstring + operacion + numeroBstring
    }else{
        numeroAstring += '0';
        LCD.value = numeroAstring
    }
})


del.addEventListener("click", (e)=>{
    e.preventDefault();
    inOperacion = false;
    isSuma = false;
    isResta = false;
    isMultiplicacion = false;
    isDivision = false;
    isNumeroA = false;
    operacion = ''
    numeroBstring = ''
    numeroAstring = ''
    numeroA = 0
    numeroB = 0
    resultado = 0
    LCD.value = ''
})

suma.addEventListener("click", (e)=>{
    e.preventDefault();
    inOperacion = true;
    if (isNumeroA == false){
        isNumeroA = true;
    }
    isSuma = true;
    isResta = false;
    isMultiplicacion = false;
    isDivision = false;
    operacion = '+'
    LCD.value = numeroAstring + operacion + numeroBstring
    numeroA = parseInt(numeroAstring);
})

resta.addEventListener("click", (e)=>{
    e.preventDefault();
    inOperacion = true;
    if (isNumeroA == false){
        isNumeroA = true;
    }
    isResta = true;
    isMultiplicacion = false;
    isDivision = false;
    isSuma = false;
    operacion = '-'
    LCD.value = numeroAstring + operacion + numeroBstring
    numeroA = parseInt(numeroAstring);
})

multiplicacion.addEventListener("click", (e)=>{
    e.preventDefault();
    inOperacion = true;
    if (isNumeroA == false){
        isNumeroA = true;
    }
    isResta = false;
    isSuma = false;
    isMultiplicacion = true;
    isDivision = false;
    operacion = 'x'
    LCD.value = numeroAstring + operacion + numeroBstring
    numeroA = parseInt(numeroAstring);
})

dividir.addEventListener("click", (e)=>{
    e.preventDefault();
    inOperacion = true;
    if (isNumeroA == false){
        isNumeroA = true;
    }
    isResta = false;
    isSuma = false;
    isMultiplicacion = false;
    isDivision = true;
    operacion = '/'
    LCD.value = numeroAstring + operacion + numeroBstring
    numeroA = parseInt(numeroAstring);
})


igual.addEventListener("click", (e)=>{
    e.preventDefault();
    if (isSuma){
        numeroB = parseInt(numeroBstring);
        resultado = parseFloat(numeroA) + parseFloat(numeroB);
        numeroA = resultado;
        LCD.value = resultado;
        numeroAstring = resultado;
        isSuma = false;
    }
    else if(isResta){
        numeroB = parseInt(numeroBstring);
        resultado = parseFloat(numeroA) - parseFloat(numeroB);
        numeroA = resultado;
        LCD.value = resultado;
        numeroAstring = resultado;
        isResta = false;
    }
    else if(isMultiplicacion){
        numeroB = parseInt(numeroBstring);
        resultado = parseFloat(numeroA) * parseFloat(numeroB);
        numeroA = resultado;
        LCD.value = resultado;
        numeroAstring = resultado;
        isMultiplicacion = false;
    }
    else if(isDivision){
        numeroB = parseInt(numeroBstring);
        resultado = parseFloat(numeroA) / parseFloat(numeroB);
        numeroA = resultado;
        LCD.value = resultado;
        numeroAstring = resultado;
        isDivision = false;
    }  
    resultado = 0;
    numeroBstring = '';
    numeroB = 0;
    operacion = ''
    inOperacion = false;
})