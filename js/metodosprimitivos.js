function date() {
    document.getElementById('MostrarDate').style.display = 'block';
    document.getElementById('menuInicio').style.display = 'none';

    let iterador = [];
let nueva

    iterador[0] = (Date()); //Fri Oct 01 2021 19:09:10 GMT-0300 (hora estándar de Argentina)
    let fecha = new Date()
    iterador[1] = "let fecha = new Date()";
    iterador[2] = (fecha.getDate()); //devuelve en este casi 1
    iterador[3] = (fecha.getDay()); //devuelve el dia de la semana 5 es viernes 
    iterador[4] = (fecha.getMonth()); //devuelve el dia de la mes 9 siendo octubre porque enero = 0 en el arreglo
    iterador[5] = (fecha.getFullYear()); //devuelve el año en este caso 2021
    iterador[6] = (fecha.getHours()); //devuelve el hora en este caso 19
    iterador[7] = (fecha.getMinutes()); //devuelve el minutos en este caso 22
    iterador[8] = (fecha.getSeconds()); //devuelve el segundos en este caso 50
    iterador[9] = (fecha.getMilliseconds()); //devuelve los milisegundos este caso 984
    iterador[10] = (fecha.toString()); //devuelve los Fri Oct 01 2021 19:30:01 GMT-0300 (hora estándar de Argentina)
    iterador[11] = (fecha.toDateString()); //devuelve Fri Oct 01 2021
    iterador[12] = (fecha.toLocaleString()); //devuelve 1/10/2021 19:30:01
    iterador[13] = (fecha.toLocaleDateString()); //devuelve 1/10/2021
    iterador[14] = (fecha.toLocaleTimeString()); //devuelve 19:30:01
    iterador[15] = (fecha.getTimezoneOffset()); //devuelve minutos de la diferencia horaria  180
    iterador[16] = (fecha.getUTCDate()); //devuelve la fecha de londres 1
    iterador[17] = (fecha.getUTCHours()); //devuelve la hora en losndres 22
    iterador[18] = (Date.now()); //devuelve llos milisegundo desde la hora cero 1/1/1970
    let auxiliar = new Date(1981, 10, 14); //le paso por parametros año, mes(teniendo en cuenta que enero es el mes 0 en el arreglo) y el dia la funcion devuelve el dia calendario en de ese parametro
    iterador[19] = (auxiliar); //Sat Nov 14 1981 00:00:00 GMT-0300 (hora estándar de Argentina)Sat Nov 14 1981 00:00:00 GMT-0300 (hora estándar de Argentina)

    let mes = fecha.getMonth();
    let resultado;
    console.log(mes);
    if (mes < 4) {
        resultado = ('Nos encontramos en el primer cuatrimestre del año');
    } else if (mes < 8) {
        resultado = ('Nos encontramos en el segundo cuatrimestre del año');
    } else {
        resultado = ('Nos encontramos en el tercer cuatrimestre del año');
    }
    document.getElementById('resultadoCuatrimetre').value = resultado;


    let claseMostrar = [];
    claseMostrar = document.getElementsByClassName('txtMostrarDate');
    console.log(iterador.length + " iterador-mostrar " + claseMostrar.length);
    for (let i = 0; i < iterador.length; i++) {
        claseMostrar[i].value = (iterador[i]);

    }

}



function math() {
    document.getElementById('divMath').style.display = 'block';
    document.getElementById('menuInicio').style.display = 'none';

    //Objeto math
    let arrayMath = [];

    arrayMath.push('Math; muestra todo los metodos en la clase math');
    arrayMath.push(Math); //muestra todo los metodos(hipotenusa,seno, coseno, tangente) en la clase math
    arrayMath.push('(Math.PI); //devuelve el valor de PI');
    arrayMath.push(Math.PI); //devuelve 3.141592653589793
    arrayMath.push('(Math.abs(-7.8)); //devuelve el valor absoluto');
    arrayMath.push(Math.abs(-7.8)); //devuelve 7.8
    arrayMath.push('(Math.ceil(2.2)); //devuelve el entero posterior');
    arrayMath.push(Math.ceil(2.2)); //devuelve el entero posterior  8 
    arrayMath.push('(Math.floor(4.2)); //devuelve el entero anterior');
    arrayMath.push(Math.floor(4.2)); //devuelve el entero anterior  7 
    arrayMath.push('(Math.round(9.492)); redondea al entero mas cercano');
    arrayMath.push(Math.round(9.492)); //devuelve el redondeo al entero mas cercano 7 
    arrayMath.push('(Math.trunc(3.492)); retorna la parte entera del número');
    arrayMath.push(Math.trunc(3.492)); //devuelve la parte entera del número 

    arrayMath.push('(Math.sqrt(81)); //devuelve la raiz cuadrada');
    arrayMath.push(Math.sqrt(81)); //devuelve la raiz cuadradas que es 9
    arrayMath.push('(Math.pow(2, 5)); //f exponencial de 2 elevado a la 5 devuelve 32');
    arrayMath.push(Math.pow(2, 5)); //f exponencial de 2 elevado a la 5 devuelve 32
    //
    arrayMath.push('(Math.sign(-2.5)); //devuelve -1 por ser un valor negativo');
    arrayMath.push(Math.sign(-2.5)); //devuelve -1 por ser un valor negativo
    arrayMath.push('(Math.sign(2.5)); //devuelve 1 por ser un valor positivo');
    arrayMath.push(Math.sign(2.5)); //devuelve 1 por ser un valor positivo
    arrayMath.push('(Math.sign(0)); //devuelve 0 por ser un valor cero');
    arrayMath.push(Math.sign(0)); //devuelve 0 por ser un valor cero
    arrayMath.push('(Math.max(8, 16, 25, 2, 36)); //devuelve el elemneto mas alto ');
    arrayMath.push(Math.max(8, 16, 25, 2, 36)); //devuelve el elemneto mas alto 
    //arrayMath.push(Math.max("amigo", "si", "java", "z")); //Error NaN
    arrayMath.push('(Math.min(8, 16, 25, 2, 36)); //devuelve el elemneto mas bajo ');
    arrayMath.push(Math.min(8, 16, 25, 2, 36)); //devuelve el elemneto mas bajo 


    arrayMath.push('(Math.random()); Retorna número aleatorio entre 0 y 1 con muchos decimales');
    arrayMath.push(Math.random()); // devuelve un número aleatorio entre 0 y 1 con muchos decimales 
    arrayMath.push('(Math.random() * 10); Retorna número aleatorio entre 0 y 10');
    arrayMath.push(Math.random() * 10); // devuelve un número aleatorio entre 0 y 10
    //(Objeto math. redondea(Objeto math. un número aleatorio) * entre 0 y ....)
    arrayMath.push('(Math.round(Math.random() * 10)); retorna número aleatorio entre 0 y 9');
    arrayMath.push(Math.round(Math.random() * 10)); // devuelve un número aleatorio entre 0 y 9
    arrayMath.push('(Math.round(Math.random() * 11)); Retorna número aleatorio entre 0 y 10');
    arrayMath.push(Math.round(Math.random() * 11)); // devuelve un número aleatorio entre 0 y 10
    //
    arrayMath.push("((Math.round(Math.random() * 20)) + 5)); Retorna número aleatorio entre 6 y 24'");
    arrayMath.push("entre " + ((Math.round(Math.random() * 20)) + 5)); // devuelve un número aleatorio entre 6 y 24
    arrayMath.push('(Math.round(Math.random() * 1000)); Retorna número aleatorio entre 0 y 1000');
    arrayMath.push(Math.round(Math.random() * 1000)); // devuelve un número aleatorio entre 0 y 1000

    const paraMostrarEjemplo = document.getElementById('divEjemploMath');
    const paraMostrarEjercicio = document.getElementById('divEjerMathResultado');
    const fragment0 = document.createDocumentFragment();
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < arrayMath.length; i++) {
        const elementoA = document.createElement('input');
        elementoA.value = arrayMath[i];
        elementoA.className = 'mostrarNavigator';
        fragment0.appendChild(elementoA);
    }
    paraMostrarEjemplo.appendChild(fragment0);

    //Esta función de JavaScript siempre devuelve un número aleatorio 
    //entre mínimo (incluido) y máximo (excluido):

    var min = 25,
        max = 55,
        resultado = 0;

    getRndInteger(min, max); //funcion que devuelve un numero aleatorio 
    //incluyendo al minimo y excluyendo al maximo
    function getRndInteger(min, max) {
        console.log("Desde la funcion 1 " + (Math.floor(Math.random() * (max - min)) + min));
    }
    getRndIntegerIncluidos(min, max); //funcion que devuelve un numero aleatorio 
    //incluyendo al minimo y incluyendo al maximo

    function getRndIntegerIncluidos(min, max) {
        console.log("Desde la funcion 2 " + (Math.floor(Math.random() * (max - min + 1)) + min));
    }
}

function ejercicioMath() {
    /**/ //clase math
    var selec = prompt('Ingrese un valor entre 1 y 10', '');
    selec = parseInt(selec);
    var num = parseInt(Math.random() * 10) + 1;
    if (num == selec)
        alert('<br>Ganó!! El número que se sorteó es el ' + num);
    else {
        alert('Perdió!! Lo siento se sorteó el valor ' + num + ' y usted eligió el ' + selec);
    }



    // paraMostrarEjemplo.appendChild(fragment);


}




function array() {
    document.getElementById('claseArray').style.display = 'block';
    document.getElementById('menuInicio').style.display = 'none';
}

function ejecutar() {



    let tipoCarga = document.getElementsByName('carga');
    vector = new Array(8);
    if (tipoCarga[1].checked) {
        //cargar Vector
        for (i = 0; i < vector.length; i++) {
            vector[i] = (Math.round(Math.random() * 100));
        }

    } else {

        //cargar Vector
        for (i = 0; i < vector.length; i++) {
            vector[i] = prompt('Ingrese el ' + (i + 1) + ' valor a su vector');
        }

    }
    /*Ejercicios Array*/

    //mostrar vector
    var concatenador = "";
    var concatenador1 = "";
    var contador = 0;
    for (i = 0; i < vector.length; i++) {
        concatenador = concatenador + " " + vector[i];
        if (vector[i] > 36) {
            concatenador1 = concatenador1 + " " + vector[i];
        }

        if (vector[i] > 50) {
            contador++;
        }
    }
    document.getElementById('respuesta1').value = ("Su vector es: " + concatenador);
    document.getElementById('respuesta2').value = ("Los numeros mayores a 36 son: " + concatenador1);
    document.getElementById('respuesta3').value = ("La cantidad de numeros mayores a 50 son: " + contador);
}

function array2() {
    //ejercicio2 vectores
    let tamanio1 = prompt("Cual es el tamño del vector 1 que sera llenado de manera aleatoria");
    let tamanio2 = prompt("Cual es el tamño del vector 2 que sera llenado de manera aleatoria");
    let array1 = new Array(tamanio1);
    let array2 = new Array(tamanio2);
    //llenamos los dos vectores con numeros aleatorio
    for (let i = 0; i < tamanio1; i++) {
        array1[i] = (Math.round(Math.random() * 100));
    }
    for (let i = 0; i < tamanio2; i++) {
        array2[i] = (Math.round(Math.random() * 100));
    }

    //mostramos los vectores con sus elementos 
    let conca = "",
        conca1 = ""
    conca3 = "", conca4 = "";

    for (let i = 0; i < tamanio1; i++) {
        conca = conca + " [" + array1[i] + "]";
    }
    for (let i = 0; i < tamanio2; i++) {
        conca1 = conca1 + " [" + array2[i] + "]";
    }
    document.getElementById('respuesta4').value = conca;
    document.getElementById('respuesta5').value = conca1;
    //recorremos los dos vectores para ir sumando en cada posision de los arreglos
    //lo guardamos en un nuevo arreglo llamado resultado 
    const resultadoarray = [];
    for (let i = 0; i < Math.min(array1.length, array2.length); i++) {
        resultadoarray[i] = array1[i] + array2[i];
    }
    for (let i = 0; i < Math.min(array1.length, array2.length); i++) {
        conca3 = conca3 + " " + "[" + (resultadoarray[i] + "]");
    }
    document.getElementById('respuesta6').value = (conca3);
    if (array1.length > array2.length) {
        for (let i = array2.length; i < array1.length; i++) {
            resultadoarray.push(array1[i]);
            conca3 = resultadoarray;
        }
    } else {
        for (let i = array1.length; i < array2.length; i++) {
            resultadoarray.push(array2[i]);
            conca3 = resultadoarray;
        }
    }
    for (let i = 0; i < conca3.length; i++) {
        conca4 = conca4 + " [" + conca3[i] + "]";
    }
    console.log(conca4);
    document.getElementById('respuesta7').value = conca4;
    document.getElementById('txtrespuesta4').value = 'El primer arrego de ' + tamanio1 + ' posisiones es => ';
    document.getElementById('txtrespuesta5').value = "El segundo arrego de " + tamanio2 + " posisiones es => ";
    document.getElementById('txtrespuesta6').value = "Solo se sumaron las primeras " + Math.min(array1.length, array2.length) +
        " posisiones es => ";
    document.getElementById('txtrespuesta7').value = "El Array sumado y agregando los elementos con el metodo push " +
        tamanio2 + " posisiones es: ";
}




function claseString() {
    document.getElementById('claseString').style.display = 'block';
    document.getElementById('menuInicio').style.display = 'none';

}

function claseString1() {
    /**/ //ejercicio de Calse String 
    const cadena = document.getElementById('entradaString1').value;
    let resultado;
    const mostrar = document.getElementById('resString1');
    // var cadena = prompt('Ingrese una palabra o frase<br>para determinar si esta en mayusculas<br>' +
    //   "<br>y tambien dividir su frase");
    if (cadena === (cadena.toLocaleLowerCase())) {
        resultado = ("Su frase [" + cadena + "] esta en minúsculas")
    } else if (cadena === cadena.toUpperCase()) {
        resultado = ("Su frase [" + cadena + "] esta en mayúsculas")
    } else {
        resultado = ("Su frase [" + cadena + "] esta compuesta por mayúsculas y minúsculas")
    }
    mostrar.value = (resultado + " y tiene " + cadena.length + " caracteres");
}

function claseString2() {
    let resultado;
    const mostrar = document.getElementById('resString2');
    const cadena = document.getElementById('entradaString2').value;

    if (!((cadena.length / 2) % 2 == 0)) { // si la frase.leng es distinta a par
        resultado = ("Su frase dividida mitad menos uno es: [" +
            (cadena.substring(0, (cadena.length) / 2)) + " - " +
            cadena.substring((cadena.length / 2), (cadena.length)) + "]");

        let mitadMenosUno = Math.floor((cadena.length) / 2);
        let mitadMasUno = (Math.ceil((cadena.length) / 2));
        resultado = ("Su frase Dividida mitad mas uno es: [" +
            cadena.substring(0, mitadMasUno) + " - " +
            cadena.substring(mitadMasUno, (cadena.length)) + "]");

        resultado = ("Su frase Dividida, separando la letra del medio: [" +
            cadena.substring(0, mitadMenosUno) + " - " +
            cadena.substring(mitadMenosUno, mitadMasUno) + " - " +
            cadena.substring(mitadMasUno, (cadena.length)) + "]");
    } else { // si la frase es par
        resultado = ("Su frase dividida a la mitad es: [" +
            (cadena.substring(0, (cadena.length) / 2)) + " - " +
            cadena.substring((cadena.length / 2), (cadena.length)) + "]");
    }
    mostrar.value = resultado;
}

function FromButonText() {
    document.getElementById('fromButonText').style.display = 'block';
    document.getElementById('menuInicio').style.display = 'none';

}

function numeroAlCubo1() {
    const mostrarREspuesta = document.getElementById('numeroAlCuboRespuesta');
    var textBoxNumeroAlCubo = document.getElementById('numeroAlCubo').value;

    alert(" El número => " + textBoxNumeroAlCubo + " elevado al cubo es = " + Math.pow(textBoxNumeroAlCubo, 3));
    mostrarREspuesta.value = (" El número => " + textBoxNumeroAlCubo + " elevado al cubo es = " + Math.pow(textBoxNumeroAlCubo, 3));
}

function controlRadio() {
    document.getElementById('divRadio').style.display = 'block';
    document.getElementById('menuInicio').style.display = 'none';
}

function confirmaRadio() {
    let respuesta = document.getElementsByName('edad');
    let aux;

    if (respuesta[0].checked) {
        alert('Usted selecciono ser Menor de edad');
    } else {
        alert('Usted selecciono ser Mayor de edad');
    }
}

function incrementar() {
    
    contador++;
      alert('El contador ahora vale :' + contador);
    console.log(contador);
}

function mostrarMayor() {
    let n1 = document.getElementById('numero1').value;
    let n2 = document.getElementById('numero2').value;
    //let res = document.getElementById('numeroresultado').value;
    document.getElementById('numeroresultado').value = Math.max(n1, n2);
}

function concatenar() {
    let nom = document.getElementById('nombre').value;
    let ape = document.getElementById('apellido').value;
    document.getElementById('concaResultado').value = (nom + " " + ape);

}

function password() {
    document.getElementById('clasePassword').style.display = 'block';
    document.getElementById('menuInicio').style.display = 'none';
}

function verificar() {
    var clave = document.getElementById('clave').value;
    var claveC = document.getElementById('claveC').value;
    if (clave.length < 5) {
        alert('La clave no puede tener menos de 5 caracteres!!!');
    } else {
        alert('Largo de clave correcta');
        if (clave == claveC) {
            alert('Su clave fue almacenda');
        }
    }
}

function cambiarColor() {
    var seleccion = document.getElementById('select1');
    document.getElementById('text1').value = seleccion.selectedIndex;
    document.getElementById('text2').value = seleccion.options[seleccion.selectedIndex].text;
    document.getElementById('text3').value = seleccion.options[seleccion.selectedIndex].value;
}

function select() {
    document.getElementById('usoSelect').style.display = 'block';
    document.getElementById('menuInicio').style.display = 'none';

}
/////////////////////////////////////ejercicio piza con subtotales
function precioPizza() {
    var seleccion = document.getElementById('pizzas');
    document.getElementById('textPizzas').value = seleccion.options[seleccion.selectedIndex].value;
}

function precioPizza2() {
    var seleccion = document.getElementById('pizzas2');
    document.getElementById('textPizzas2').value = seleccion.options[seleccion.selectedIndex].value;
}

function sumaProducto() {
    let contenedora = [];
    let subTotal;
    contenedora = document.getElementsByClassName('text');
    subTotal = (parseInt((contenedora[0]).value) * parseInt((contenedora[1]).value));
    document.getElementById('textPrecioParcial').value = subTotal;
}
let mostrarSubTotal = 0;

function SumaSubtotal() {
    let agregado = document.getElementById('textPrecioParcial').value;
    mostrarSubTotal = (parseInt(mostrarSubTotal) + parseInt(agregado));
    document.getElementById('textSubTotal').value = mostrarSubTotal;

}

function sumaTotal() {
    let agregado = document.getElementById('textSubTotal').value;
    mostrarTotal = parseInt(agregado);
    document.getElementById('textTotal').value = mostrarTotal;
}
///////////////////////////////////// END ejercicio piza con subtotales
function procesadorLista() {
    var seleccion = document.getElementById('procesador');
    document.getElementById('precioProcesador').value = seleccion.options[seleccion.selectedIndex].value;
}

function MonitoLista() {
    var seleccion = document.getElementById('monitor');
    document.getElementById('precioMonitor').value = seleccion.options[seleccion.selectedIndex].value;
}

function discoLista() {
    var seleccion = document.getElementById('discoDuro');
    document.getElementById('precioDisco').value = seleccion.options[seleccion.selectedIndex].value;
}

function PrecioFinalPresupuesto() {
    let cajaReceptora = document.getElementsByClassName('opcion');
    listaPrecio = [];
    sumador = 0;
    for (i = 0; i < cajaReceptora.length; i++) {
        listaPrecio[i] = cajaReceptora[i].value;
        //se usa el condicional ? (segun condicion) ? si es ok se ejecuta el primer termino, separado 
        //por dos puntos ":" al segundo termino que se ejecutara si la primer condicion no se cumple
        //en este caso si hay un campo en blanco no arroja "NaN";
        sumador = parseInt(sumador) + ((listaPrecio[i] == "") ? 0 : parseInt(listaPrecio[i]));
    }
    document.getElementById('presTecnologico').value = sumador;
}
////////////////INICIO EJERCICIO MULTIPLE CHOIS
let concaRespuestas = "";
let sumadorDeCorrectas = 0;

function verificarRespuesta() {
    let uno = [];
    let i;
    for (i = 0; i < document.cuestionario.PrimerPregunta.length; i++) {
        if (document.cuestionario.PrimerPregunta[i].checked) {
            break;
        }
    }
    if (i == 0) {
        concaRespuestas = "Su respuesta 1 es correcta!!\n";
        sumadorDeCorrectas++;
    } else {
        concaRespuestas = "Su respuesta 1 es Incorrecta \nRESPUESTA CORRECTA=CREATE DATABASE \n";
    }

    for (i = 0; i < document.cuestionario.segundaPregunta.length; i++) {
        if (document.cuestionario.segundaPregunta[i].checked) {
            break;
        }
    }
    if (i == 0) {
        concaRespuestas = concaRespuestas + "\nSu respuesta 2 es correcta!!\n";
        sumadorDeCorrectas++;

    } else {
        concaRespuestas = concaRespuestas + "\nSu respuesta 2 es Incorrecta \nRESPUESTA CORRECTA=ALTER TABLE \n ";
    }

    for (i = 0; i < document.cuestionario.tercerPregunta.length; i++) {
        if (document.cuestionario.tercerPregunta[i].checked) {
            break;
        }
    }
    if (i == 3) {
        concaRespuestas = concaRespuestas + "\nSu respuesta 3 es correcta!!\n";
        sumadorDeCorrectas++;

    } else {
        concaRespuestas = concaRespuestas + "\nSu respuesta 3 es Incorrecta \nRESPUESTA CORRECTA=DROP TABLE\n ";
    }
    for (i = 0; i < document.cuestionario.cuartapregunta.length; i++) {
        if (document.cuestionario.cuartapregunta[i].checked) {
            break;
        }
    }
    if (i == 0) {
        concaRespuestas = concaRespuestas + "\nSu respuesta 4 es correcta!!\n";
        sumadorDeCorrectas++;
    } else {
        concaRespuestas = concaRespuestas + "\nSu respuesta 4 es Incorrecta \nRESPUESTA CORRECTA= ORDER BY \n ";
    }
    for (i = 0; i < document.cuestionario.quintaPregunta.length; i++) {
        if (document.cuestionario.quintaPregunta[i].checked) {
            break;
        }
    }
    if (i == 1) {
        concaRespuestas = concaRespuestas + "\nSu respuesta 5 es correcta!!\n";
        sumadorDeCorrectas++;
    } else {
        concaRespuestas = concaRespuestas + "\nSu respuesta 5 es Incorrecta \nRESPUESTA CORRECTA=LIMIT() \n";
    }
    alert(concaRespuestas + "\nCantidad de respuestas correctas " + sumadorDeCorrectas + " de 5 preguntas");
}


////////////////fin EJERCICIO MULTIPLE CHOIS
//////////////// EJERCICIO checkbox
function checkBox() {
    document.getElementById('usoCheckBox').style.display = 'block';
    document.getElementById('menuInicio').style.display = 'none';

}

function mostrarDeportes() {
    let depo = [];
    let contador = 0;
    let concaDeporte = "";
    depo = document.getElementsByName('deporte');
    for (let i = 0; i < depo.length; i++) {
        if (document.checkbox.deporte[i].checked) {
            concaDeporte = concaDeporte + (document.checkbox.deporte[i].value) + " \n";
            contador++;
        }
    }
    if (contador == 0) {
        alert("Ustede no selecciono ningun deporte");
    } else if (contador == 1) {
        alert("El deporte seleccionado es: " + concaDeporte);
    } else {
        alert("Sus deportes seleccionados son:\n" + concaDeporte);
    }
}

////////////////fin EJERCICIO checkbox
////////////////inicio EJERCICIO Control Area

function controlArea() {
    document.getElementById('usoArea').style.display = 'block';
    document.getElementById('menuInicio').style.display = 'none';
}

function mostrarTextArea() {
    let contenedora23 = [];
    let conca3 = "";
    contenedora23 = document.getElementsByClassName('ejeArea');
    for (let i = 0; i < contenedora23.length; i++) {
        conca3 = (conca3 + (document.textArea.recolectorDatos[i].id) + " => " + (document.textArea.recolectorDatos[i].value)) + "\n";
    }
    alert(conca3);
}

////////////////fin EJERCICIO Control Area
////////////////inicio EJERCICIO PropiedadScreen del objeto window

function abrirVentana() {
    document.getElementById('screen').style.display = 'block';
    document.getElementById('menuInicio').style.display = 'none';
    let vectorscreen = [];
    const contenedorPadre = document.getElementById('propScreen');
    const fragment = document.createDocumentFragment();
    vectorscreen.push('Valores de las propiedades del objeto screen son:');
    vectorscreen.push('==> Altura Disponible => availHeight: ' + screen.availHeight);
    vectorscreen.push('==> Ancho Disponible => availWidth: ' + screen.availWidth);
    vectorscreen.push('==> Altura => height: ' + screen.height);
    vectorscreen.push('==> Ancho => width: ' + screen.width);
    vectorscreen.push('==> Color => colorDepth: ' + screen.colorDepth);
    for (let i = 0; i < vectorscreen.length; i++) {
        const respuestaPropiedad = document.createElement('input');
        respuestaPropiedad.value = vectorscreen[i];
        respuestaPropiedad.className = 'mostrarNavigator';
        fragment.appendChild(respuestaPropiedad);
    }
    contenedorPadre.appendChild(fragment);
}

function ejecutarScreen() {


    var ventana = open('', '', 'width=' + screen.availWidth + ',height=' + screen.availHeight / 2);
}

////////////////fin EJERCICIO Propiedad screen del objeto window
////////////////inicio EJERCICIO Propiedadnavigator del objeto window

function propiedadNavegador() {
    document.getElementById('navegador').style.display = 'block';
    document.getElementById('menuInicio').style.display = 'none';

    let contenedor = "  ";
    let vectorNavigator = [];
    const PropiedadNavigator = document.getElementById('Propiedadnavigator');
    const contenedorPadre = document.getElementById('dRNavigator');
    vectorNavigator[0] = 'Valores de las propiedades del objeto navigator:';
    vectorNavigator[1] = 'appName : ' + navigator.appName;
    vectorNavigator[2] = 'appVersion : ' + navigator.appVersion;
    vectorNavigator[3] = 'cookieEnabled : ' + navigator.cookieEnabled;
    vectorNavigator[4] = 'con navigator.plugins.legnth obtenemos su cantidad: ' + navigator.plugins.length;
    vectorNavigator[5] = '    Los plugins en uso de su computadora son: ';

    let arrayPluguins = [];
    arrayPluguins = navigator.plugins;

    const fragment0 = document.createDocumentFragment();
    const fragment = document.createDocumentFragment();


    for (let index = 0; index < vectorNavigator.length; index++) {
        const respuestaPropiedad = document.createElement('input');
        respuestaPropiedad.value = vectorNavigator[index];
        respuestaPropiedad.className = 'mostrarNavigator';
        fragment0.appendChild(respuestaPropiedad);
    }
    for (let index = 0; index < arrayPluguins.length; index++) {
        const nuevoInput = document.createElement('input');
        nuevoInput.value = " => => " + arrayPluguins[index].name;
        nuevoInput.className = 'mostrarNavigator';
        fragment.appendChild(nuevoInput);
    }
    contenedorPadre.appendChild(fragment0);
    contenedorPadre.appendChild(fragment);
}

////////////////fin EJERCICIO Propiedad navigator del objeto window
////////////////inicio EJERCICIO Programación orientada a objetos en JavaScript
function poo() {
    document.getElementById('POO').style.display = 'block';
    document.getElementById('menuInicio').style.display = 'none';

}

function sumarPoo() {
    let valor1 = document.getElementById('Numero1').value;
    let valor2 = document.getElementById('Numero2').value;
    class Suma {
        constructor(num1, num2) {
            this.num1 = num1;
            this.num2 = num2;
        }
        suma(num1, num2) {
            return num1 + num2;
        }
    }
    const suma1 = new Suma(parseInt(valor1), parseInt(valor2));
    alert(suma1.suma(suma1.num1, suma1.num2))
}


function volverAMenu() {
    document.getElementById('menuInicio').style.display = 'block';
    document.getElementById('MostrarDate').style.display = 'none';
    document.getElementById('claseArray').style.display = 'none';
    document.getElementById('divMath').style.display = 'none';
    document.getElementById('claseString').style.display = 'none';
    document.getElementById('fromButonText').style.display = 'none';
    document.getElementById('clasePassword').style.display = 'none';
    document.getElementById('usoSelect').style.display = 'none';
    document.getElementById('usoCheckBox').style.display = 'none';
    document.getElementById('usoArea').style.display = 'none';
    document.getElementById('navegador').style.display = 'none';
    document.getElementById('screen').style.display = 'none';
    document.getElementById('divRadio').style.display = 'none';
    document.getElementById('POO').style.display = 'none';
}