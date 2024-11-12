alert("Bienvenido al Home Sharing app by José Maldonado");
alert("Ingrese el nombre y el valor de la cuenta a compartir, cuando termine envíe una cuenta sin nombre para ir al siguiente paso.")

let cuentas = [];

let ingresar = true;

while (ingresar) {
  let nombreDeLaCuenta = prompt("Cual es el nombre de la cuenta?");

  if (nombreDeLaCuenta !== "") {
    let valorDeLaCuenta = Number(prompt("Cual es el valor de la cuenta?"));

    cuentas.push({ nombreDeLaCuenta, valorDeLaCuenta });
  }

  if (nombreDeLaCuenta === "") {
    ingresar = false;
  }
}

let personasACompartir = Number(prompt("Cuantas personas van a compartir la cuenta?"));

let message = `La cuenta compartida por ${personasACompartir}:\n`;
let total = 0;

for (let i = 0; i < cuentas.length; i++) {
  message += `${cuentas[i].nombreDeLaCuenta}: $ ${cuentas[i].valorDeLaCuenta}\n`;
  total += cuentas[i].valorDeLaCuenta;
}

let totalCompartido = total / personasACompartir;

alert(`${message}\n\nValor por persona: $${totalCompartido.toFixed(2)}`);

























// let peso = parseInt(prompt("¿Cuánto pesa?"))
// let altura = Number(prompt("¿Cuánto mide"))

// console.log("usted pesa " + peso + " usted mide " + altura)

// let celcius = Number(prompt("Inguese la temperatura\nen grados celcius: "))

// let fahrenheit = celcius * (9/5) + 32

// alert ("la temperatura en fahrenheit= " + fahrenheit)















// const Alumnos = [{
//     nombre: "sergio",
//     dni:
//     amteria []
// }]

// function agregadorDeAlumno(nombre,dni){  
//     Alumnos.push{{
//         nombre,
//         dni,
//         materia []
//     }}

// }

// function mostradorDeAlunos(){
//     for( let i =0; i < Alumnos.length; i++){
//         constalumno = Alumnos [i];
//         alumnos = alumnos + "\n" + alumno.nombre +"\n"
//     } 
//     alert("los alumnos en nuestra base son: " + alumnos)
// }

// function core () {
//     let bandera = true
//     let opcion = Number(prompt("Bienvenido a coderhose, que quiere hacer:\n 1-Agregar\n 2-eliminar\n 3=mostrar"))
    
//     if(opcion === 0){
//         return
//     }
    
//     while(bandera){
//         switch (Option){
//             case 1:
//                 bandera = confirm("¿quiere seguir operando?")
//                 break;
//             case 2:
//                 bandera = confirm("¿quiere seguir operando?")
//                 break;
//             case 3:
//                 bandera = confirm("¿quiere seguir operando?")
//                 break;
//             default
//                 alert("no existe")
//                 bandera = confirm("¿quiere seguir operando?")
//                 break;

//         }    
//     }
// }


