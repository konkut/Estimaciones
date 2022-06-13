"use strict";



const calcular = () => {
    //contenedor
    const solucion = document.getElementById("solucion");
    //inputs
    const val = document.getElementById("val").value;
    const se = document.getElementById("se").value;
    const ch = document.getElementById("ch").value;
    //validacion
    if (
        val !== "" &&
        se !== "" &&
        ch !== "" &&
        val !== undefined &&
        se !== undefined &&
        ch !== undefined
    ) {
        //calculos
        const ldc = val * se;
        //funcion
        const modo = modoDeDesarrollo(ldc);
        const mldc = ldc / 1000;
        const esfuerzo = (modo[0] * Math.pow(mldc, modo[1])).toFixed(2);
        const tiempo = (modo[2] * Math.pow(esfuerzo, modo[3])).toFixed(2);
        const personal = (esfuerzo / tiempo).toFixed(2);
        const productividad = (ldc / esfuerzo).toFixed(2);
        const costo = (esfuerzo * ch).toFixed(2);
        

        solucion.innerHTML = `
        <div class="shSSSadow">
            <h2 class="text-white fw-lighter text-start">Estimación de la cantidad de instrucciones</h2>
            <p>LDC =  <span>${val}</span>*<span>${se}</span> </p>
            <p>LINEAS DE CODIGO: <span>${ldc}</span></p>
            <p>MILES DE MILES DE CODIGO: <u class="text-white">${mldc}</u></p>
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
const modoDeDesarrollo = (ldc) => {
    if (ldc <= 30000)  return [3.2, 1.05, 2.5, 0.38];
    if (ldc > 30000) return [3.0, 1.12, 2.5, 0.35];
    if (ldc >= 100000) return [2.8, 1.2, 2.5, 0.32];    
  };





//PUNTO DE FUNCION

const calcularPuntoFuncion = () => {
    //contenedor
    const solucionPuntoFuncion = document.getElementById("solucionPuntoFuncion");
    //inputs
    const entrada = document.getElementById("entrada").value;
    const salida = document.getElementById("salida").value;
    const consulta = document.getElementById("consulta").value;
    const archivoInterno = document.getElementById("archivoInterno").value;
    const archivoExterno = document.getElementById("archivoExterno").value;
    const desarrolladores = document.getElementById("desarrolladores").value;
    const horas = document.getElementById("horas").value;
    //funcion
    const factor = factorDePonderacion(
        entrada,
        salida,
        consulta,
        archivoInterno,
        archivoExterno
      );
    const SumaFav = cambiar();
    console.log(SumaFav);
    console.log(typeof(SumaFav));
    //calculos
    let suma = 0;
    for (let i = 0; i < factor.length; i++) {
        suma += factor[i];
    }
    const puntoFuncion = (suma * (0.65 + 0.01 * SumaFav[0])).toFixed(2);
    const esfuerzopf = (puntoFuncion / (1 / horas)).toFixed(2);
    const horasPorDesarrollador = (esfuerzopf/ desarrolladores).toFixed(2);
    const duracionpf = (esfuerzopf / desarrolladores).toFixed(2);
    
    

    solucionPuntoFuncion.innerHTML = `
    <div class="shadow">
        <h2 class="text-white fw-lighter text-start">Punto de función no ajustado</h2>
        <p> PFNA = <span >[${factor[0]} + ${factor[1]} + ${factor[2]} + ${factor[3]} + ${factor[4]}]</span></p>
        <p> PUNTO DE FUNCIÓN NO AJUSTADO: <u class="text-white">${suma}</u></p>
    </div>
    <div class="shadow">
        <h2 class="text-white fw-lighter text-start">Factores de ajuste de valor(FAV)</h2>
        <p> FAV = <span >[${SumaFav[1][0]} + ${SumaFav[1][1]} + ${SumaFav[1][2]} + ${SumaFav[1][3]} + ${SumaFav[1][4]} + ${SumaFav[1][5]} + ${SumaFav[1][6]} + ${SumaFav[1][7]} + ${SumaFav[1][8]} + ${SumaFav[1][9]} + ${SumaFav[1][10]} + ${SumaFav[1][11]} + ${SumaFav[1][12]} + ${SumaFav[1][13]}]</span></p>
        <p> FACTOR DE AJUSTE DE VALOR: <u class="text-white">${SumaFav[0]}</u></p>
    </div>
    <div class="shadow">
        <h2 class="text-white fw-lighter text-start">Punto de función ajustado</h2>
        <p> PF = <span >${suma} * [0.65 + 0.01 * ${SumaFav[0]}]</span></p>
        <p> PUNTO DE FUNCIÓN AJUSTADO: <u class="text-white">${puntoFuncion}</u></p>
    </div>
    <div class="shadow">
        <h2 class="text-white fw-lighter text-start">Estimación de esfuerzo horas / personas</h2>
        <p> E = <span >${puntoFuncion} / (1 / ${horas})</span></p>
        <p> ESFUERZO HORAS/PERSONAS: <u class="text-white">${esfuerzopf}</u></p>
    </div>
    <div class="shadow">
        <h2 class="text-white fw-lighter text-start">Estimación de horas por desarrollador</h2>
        <p> HD = <span >${esfuerzopf} / ${desarrolladores})</span></p>
        <p> HORAS POR DESARROLLADOR: <u class="text-white">${horasPorDesarrollador}</u></p>
    </div>
    <div class="shadow">
        <h2 class="text-white fw-lighter text-start">Estimación de duracion</h2>
        <p> PF = <span >${esfuerzopf} / ${desarrolladores}</span></p>
        <p> DURACIÓN DEL PROYECTO EN HORAS: <u class="text-white">${duracionpf}</u></p>
        <p> DURACIÓN DEL PROYECTO EN DIAS: <u class="text-white">${duracionpf/24}</u></p>
    </div>
    `;
};

const factorDePonderacion = (e, s, c, ai, ae) => {
  const simple = document.getElementById("simple");
  const medio = document.getElementById("medio");
  const complejo = document.getElementById("complejo");
  if (simple.checked) return [e * 3, s * 4, c * 3, ai * 7, ae * 5];
  if (medio.checked) return [e * 4, s * 5, c * 4, ai * 10, ae * 7];
  if (complejo.checked) return [e * 6, s * 7, c * 6, ai * 15, ae * 10];
};

const cambiar = () => {
  let suma1 = 0;
  let fav = [];
  const preguntas = document.querySelectorAll(".pregunta");
  for (let i = 0; i < preguntas.length; i++) {
    suma1 += parseInt(preguntas[i].value);
    fav[i] = parseInt(preguntas[i].value);
  }
  return [suma1,fav];
};





//LINEAS DE CODIGO

const calcularlineasDeCodigo = () => {
  //contenedor
  const solucionLdc = document.getElementById("solucionLdc");
  //inputs
  const ldc1 = document.getElementById("ldc1").value;
  const ch1 = document.getElementById("ch1").value;
  //funcion
  const modo1 = modoDeDesarrollo(ldc1);
  //calculos
  const mldc1 = ldc1 / 1000;
  const esfuerzoLdc = (modo1[0] * Math.pow(mldc1, modo1[1])).toFixed(2);
  const productividadLdc = (ldc1/esfuerzoLdc).toFixed(2);
  const costoLdc = (esfuerzoLdc*ch1).toFixed(2);
  const costoLineasLdc = (costoLdc/ldc1).toFixed(2);
 

  solucionLdc.innerHTML = `
    <div class="shadow">
        <h2 class="text-white fw-lighter text-start">Estimación de esfuerzo</h2>
        <p> E = <span>${modo1[0]}</span> * (<span >${mldc1}</span>)<span class="align-top size">${modo1[1]}</span></p>
        <p> ESFUERZO: <u class="text-white">${esfuerzoLdc}</u></p>
    </div>
    <div class="shadow">
        <h2 class="text-white fw-lighter text-start">Estimación de la productividad</h2>
        <p> P = <span >${ldc1}/${esfuerzoLdc}</span></p>
        <p> PRODUCTIVIDAD: <u class="text-white">${productividadLdc}</u></p>
    </div>
    <div class="shadow">
        <h2 class="text-white fw-lighter text-start">Estimación de costo</h2>
         <p> C = <span >${esfuerzoLdc}</span> * <span>${ch1}</span> </p>
         <p> COSTO: <u class="text-white">${costoLdc}</u></p> 
    </div>
    <div class="shadow">
        <h2 class="text-white fw-lighter text-start">Estimación de costo por lineas de codigo</h2>
        <p> COSTO LCD = <span >${costoLdc}/${ldc1}</span></p>
        <p> COSTO POR LINEAS DE CODIGO: <u class="text-white">${costoLineasLdc}</u></p>
    </div>
    `;
};

//cosmic

const calcularCosmic=()=>{
    //contenedor
    const solucionCosmic = document.getElementById("solucionCosmic");
    //inputs
    const cc = document.getElementById("cc").value;
    const pfc = document.getElementById("pfc").value;
    const mldcc = document.getElementById("mldcc").value;
    //calculos
    const costoFuncion = (cc / pfc).toFixed(2);
    const costoProyecto = (mldcc *costoFuncion).toFixed(2);
    const duracion = (mldcc/pfc).toFixed(2);
    const costoFinal = (costoProyecto*6.96).toFixed(2);

    solucionCosmic.innerHTML = `
    <div class="shadow">
        <h2 class="text-white fw-lighter text-start">Estimación costo por punto de funcion</h2>
        <p> CPF = <span>${cc}</span> / <span >${pfc}</span></p>
        <p> COSTO POR PUNTO FUNCIÓN: <u class="text-white">${costoFuncion}</u></p>
    </div>
    <div class="shadow">
        <h2 class="text-white fw-lighter text-start">Estimación costo del proyecto del software</h2>
        <p> CPS = <span >${mldcc}*${costoFuncion}</span></p>
        <p> COSTO PROYECTO: <u class="text-white">${costoProyecto}</u></p>
    </div>
    <div class="shadow">
        <h2 class="text-white fw-lighter text-start">Estimación duración del proyecto</h2>
         <p> DP = <span >${mldcc}</span> / <span>${pfc}</span> </p>
         <p> DURACIÓN PROYECTO EN MESES: <u class="text-white">${duracion}</u></p> 
    </div>
    <div class="shadow">
        <h2 class="text-white fw-lighter text-start">Estimación costo final software</h2>
        <p> COSTARÁ = <span >${costoProyecto} * 6.96</span></p>
        <p> COSTO FINAL: <u class="text-white">${costoFinal}</u></p>
    </div>
    `;
}

//COCOMO INTERMEDIO

const calcularCocomoInt=()=>{
    //contenedor
    const solucionCocomoInt = document.getElementById("solucionCocomoInt");
    //inputs
    const mldcci = document.getElementById("mldcci").value;
    const cci = document.getElementById("cci").value;

    
    const modo1 = modoDeDesarrollo(mldcci*1000);
    const esfuerzoNominal = (modo1[0] * Math.pow(mldcci, modo1[1])).toFixed(2);

    const valor = complejidadSoftware();
    console.log(valor);
    let totalCococomoInt = 1;
    for (let i = 0; i < valor.length; i++) {
        totalCococomoInt *= valor[i];
    }

    const esfuerzoPerMes = (esfuerzoNominal * totalCococomoInt).toFixed(2);

    const costoci= (esfuerzoPerMes * cci).toFixed(2);
    const tiempoci = (modo1[2] * Math.pow(esfuerzoPerMes, modo1[3])).toFixed(2);
    const personalci = (esfuerzoPerMes / tiempoci).toFixed(2);

    solucionCocomoInt.innerHTML = `
    <div class="shadow">
        <h2 class="text-white fw-lighter text-start">Estimación esfuerzo nominal</h2>
        <p> EN = <span>${modo1[0]}</span> * (<span >${mldcci}</span>)<span class="align-top size">${modo1[1]}</span> </p>
        <p> ESFUERZO NOMINAL: <u class="text-white">${esfuerzoNominal}</u></p>
    </div>
    <div class="shadow">
        <h2 class="text-white fw-lighter text-start">Estimación EPM con todos los factores de coste del modelo</h2>
        <p> EPM = [<span >${esfuerzoNominal}*${valor[0]}*${valor[1]}*${valor[2]}*${valor[3]}*${valor[4]}*${valor[5]}*${valor[6]}*${valor[7]}*${valor[8]}*${valor[9]}*${valor[10]}*${valor[11]}*${valor[12]}*${valor[13]}*${valor[14]}]</span></p>
        <p> ESFUERZO PERSONAS MES: <u class="text-white">${esfuerzoPerMes}</u></p>
    </div>
    <div class="shadow">
        <h2 class="text-white fw-lighter text-start">Estimación del costo</h2>
         <p> C = <span >${esfuerzoPerMes}</span> * <span>${cci}</span> </p>
         <p> COSTO: <u class="text-white">${costoci}</u></p> 
    </div>
    <div class="shadow">
        <h2 class="text-white fw-lighter text-start">Estimación tiempo de desarrollo</h2>
        <p> EN = <span>${modo1[2]}</span> * (<span >${esfuerzoPerMes}</span>)<span class="align-top size">${modo1[3]}</span> </p>
        <p> TIEMPO DE DESARROLLO EN MESES: <u class="text-white">${tiempoci}</u></p>
    </div>
    <div class="shadow">
        <h2 class="text-white fw-lighter text-start">Estimación personal</h2>
        <p> P = <span>${esfuerzoPerMes}/${tiempoci}</span> </p>
        <p> NÚMERO DE PERSONAS: <u class="text-white">${personalci}</u></p>
    </div>
    `;

}
const metodoCambio=()=>{
    const organico = document.getElementById("organico");
    const semiAcoplado = document.getElementById("semiAcoplado");
    const acoplado = document.getElementById("acoplado");
    const mldcci = document.getElementById("mldcci").value;
    const ldc3 = mldcci * 1000;
    if (ldc3 <= 30000) {
        organico.setAttribute("checked","true");
    }
    if (ldc3 > 30000) {
        semiAcoplado.setAttribute("checked","true");
    }
    if (ldc3 >= 100000){
        acoplado.setAttribute("checked","true");  
    } 
}

const complejidadSoftware=()=>{
    const muyBajo = document.getElementById("muyBajo");
    const bajo = document.getElementById("bajo");
    const medioci = document.getElementById("medioci");
    const alto = document.getElementById("alto");
    const muyAlto = document.getElementById("muyAlto");
    const extra = document.getElementById("extra");
    if(muyBajo.checked) return [0.75,1,0.70,1,1,1,1,1.46,1.29,1.21,1.14,1.42,1.24,1.24,1.23];
    if(bajo.checked) return [0.88,0.94,0.85,1,1,0.87,0.87,1.19,1.13,1.10,1.07,1.17,1.10,1.10,1.08];
    if(medioci.checked) return [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
    if(alto.checked) return [1.15,1.08,1.15,1.11,1.06,1.15,1.07,0.86,0.91,0.90,0.95,0.86,0.91,0.91,1.04];
    if(muyAlto.checked) return [1.40,1.16,1.30,1.30,1.21,1.30,1.15,0.71,0.82,1,1,0.70,0.82,0.83,1.10];
    if(extra.checked) return [1,1,1.65,1.66,1.56,1,1,1,1,1,1,1,1,1,1];

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
