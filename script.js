"use strict";

const solucion = document.getElementById("solucion");

const calcular=()=>{
    const val = document.getElementById("val").value;
    const se = document.getElementById("se").value;
    const ch = document.getElementById("ch").value;

    if(val !== "" && se !== "" && ch !== "" && val !== undefined && se !== undefined && ch !== undefined) {
        
    const ldc = val * se;
    const mldc = ldc/1000;
    const modo = modoDeDesarrollo(ldc);
    const esfuerzo = (modo[0]* Math.pow(mldc,modo[1])).toFixed(2);
    const tiempo = (modo[2]* Math.pow(esfuerzo,modo[3])).toFixed(2);
    const personal = (esfuerzo/tiempo).toFixed(2);
    const productividad = (ldc/esfuerzo).toFixed(2);
    const costo = (esfuerzo*ch).toFixed(2);
    solucion.innerHTML = 
    `
     <div class="shadow">
        <h2 class="text-white fw-lighter text-start">Estimación de la cantidad de instrucciones</h2>
        <p>LDC =  <span>${val}</span>*<span>${se}</span> </p>
        <p>LINEAS DE CODIGO: <span>${ldc}</span></p>
        <p>MILES DE LINEAS DE CODIGO: <u class="text-white">${mldc}</u></p>
     </div>
     <div class="shadow">
        <h2 class="text-white fw-lighter text-start">Estimación de esfuerzo</h2>
        <p>E = <span>${modo[0]}</span> * (<span >${mldc}</span>)<span class="align-top size">${modo[1]}</span> </p>
        <p>ESFUERZO: <u class="text-white">${esfuerzo}</u></p>
    </div>
    
    <div class="shadow">
        <h2 class="text-white fw-lighter text-start">Estimación el tiempo de desarrollo</h2>
        <p>TD = <span >${modo[2]}</span> * (<span >${esfuerzo}</span>)<span class="align-top size">${modo[3]}</span> </p>
        <p>TIEMPO DE DESARROLLO: <u class="text-white">${tiempo}</u></p>
    </div>
    <div class="shadow">
        <h2 class="text-white fw-lighter text-start">Estimación del personal nesesario</h2>
        <p> PN = <span >${esfuerzo}</span> / <span>${tiempo}</span> </p>
        <p>PERSONAL NESESARIO: <u class="text-white">${personal}</u></p>
     </div>
    <div class="shadow">
        <h2 class="text-white fw-lighter text-start">Estimación de productividad</h2>
        <p> P = <span >${ldc}</span> / <span >${esfuerzo}</span> </p>
        <p>PRODUCTIVIDAD: <u class="text-white">${productividad}</u></p>
    </div>
    <div class="shadow">
        <h2 class="text-white fw-lighter text-start">Estimación de costo</h2>
        <p> C = <span >${esfuerzo}</span> * <span>${ch}</span> </p>
        <p>COSTO: <u class="text-white">${costo}</u></p>
    </div>
    `;
    }
    
};
    const modoDeDesarrollo=(ldc)=>{
        if(ldc <= 30000) return [3.2,1.05,2.5,0.38]; 
        if(ldc > 30000) return [3.0,1.12,2.5,0.35];
        if(ldc >= 100000) return [2.8,1.20,2.5,0.32];
    };


    //PUNTO DE FUNCION
const solucionPuntoFuncion = document.getElementById("solucionPuntoFuncion");

const calcularPuntoFuncion=()=>{
const entrada = document.getElementById("entrada").value;
const salida = document.getElementById("salida").value;
const consulta = document.getElementById("consulta").value;
const archivoInterno = document.getElementById("archivoInterno").value;
const archivoExterno = document.getElementById("archivoExterno").value;
const factor = factorDePonderacion(entrada,salida,consulta,archivoInterno,archivoExterno);
let suma=0;
for (let i = 0; i < factor.length; i++) {
    suma += factor[i];
}

const suma1 = cambiar();
const puntoFuncion = suma + (0.65 + (0.01 * suma1));
solucionPuntoFuncion.innerHTML = 
`
<div class="shadow">
        <p> PFNA = <span >${factor[0]} + ${factor[1]} + ${factor[2]} + ${factor[3]} + ${factor[4]}</span></p>
        <p> PUNTO DE FUNCIÓN NO AJUSTADO: <u class="text-white">${suma}</u></p>
 </div>
 <div class="shadow">
        <p> PF = <span >${suma} * [0.65 + 0.01 * ${suma1}]</span></p>
        <p> PUNTO DE FUNCIÓN AJUSTADO: <u class="text-white">${puntoFuncion}</u></p>
 </div>
`;

}

const factorDePonderacion=(e,s,c,ai,ae)=>{
    const simple = document.getElementById("simple");
    const medio = document.getElementById("medio");
    const complejo = document.getElementById("complejo");
    if(simple.checked) return [e*3,s*4,c*3,ai*7,ae*5];
    if(medio.checked) return [e*4,s*5,c*4,ai*10,ae*7];
    if(complejo.checked) return [e*6,s*7,c*6,ai*15,ae*10];
}

const cambiar=()=>{
    let suma1=0;
    const preguntas = document.querySelectorAll(".pregunta");
    for (let i = 0; i < preguntas.length; i++) {
        suma1 += parseInt(preguntas[i].value);
    }
    console.log(suma1);
    return suma1;
}
    

    // document.querySelectorAll(".ldc")[0].innerHTML = ldc;
    
    // document.querySelectorAll(".mldc")[0].innerHTML = mldc;
    // document.querySelectorAll(".mldc")[1].innerHTML = mldc;
    // document.getElementById("a").innerHTML = modo[0];
    // document.getElementById("b").innerHTML = modo[1];
   
    // document.querySelectorAll(".esfuerzo")[0].innerHTML = esfuerzo;
    

    // document.getElementById("c").innerHTML = modo[2];
    // document.getElementById("d").innerHTML = modo[3];
    // document.querySelectorAll(".esfuerzo")[1].innerHTML = esfuerzo;
   
    // document.querySelectorAll(".tiempo")[0].innerHTML = tiempo;

    // document.querySelectorAll(".esfuerzo")[2].innerHTML = esfuerzo;
    // document.querySelectorAll(".tiempo")[1].innerHTML = tiempo;
    
    // document.querySelectorAll(".personal")[0].innerHTML = personal;

    // document.querySelectorAll(".ldc")[1].innerHTML = ldc;
    // document.querySelectorAll(".esfuerzo")[3].innerHTML = esfuerzo;
  
    // document.querySelectorAll(".productividad")[0].innerHTML = productividad;

    // document.querySelectorAll(".esfuerzo")[4].innerHTML = esfuerzo;
    // document.querySelectorAll(".ch")[0].innerHTML = ch;
   
    // document.getElementById("costo").innerHTML = costo;





