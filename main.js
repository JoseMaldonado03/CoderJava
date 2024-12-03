let productos_disponibles = [
  {
    id: 1,
    name: "Poseidon",
    img: "assets/Cuadro1.jpg",
    elemento: "Pintura",
    precio: 25000,
  },
  {
    id: 2,
    name: "Virgen del velo",
    img: "assets/Cuadro2.jpg",
    elemento: "Pintura",
    precio: 25000,
  },
  {
    id: 3,
    name: "Geometric Queen",
    img: "assets/Cuadro3.jpg",
    elemento: "Pintura",
    precio: 35000,
  },
  {
    id: 4,
    name: "Vilipendia",
    img: "assets/Cuadro4.jpg",
    elemento: "Pintura",
    precio: 20000,
  },
];


productos_disponibles.forEach((p) => {
  document.getElementById("productos").innerHTML += 
  `<p id="${p.id}" class="produto-item">
      ${p.name} 
      <div class="img">
        <img src="${p.img}" alt="${p.name}" />
      </div> 
      - ARS ${p.precio}
    </p>
    `
    ;
});
  
let produtos_seleccionados = [];

document.getElementById("carrito").addEventListener("click", () => {
  document.getElementById("carritoDeCompra").classList.toggle("activar");
})

let produtos = document.querySelectorAll(".productos li")

document.body.addEventListener("click", (event) => {
    if (event.target.className == "produto-item") {
      let productoExists = produtos_seleccionados.findIndex((p) => p.id == event.target.id);
      let productoSelecionado = productos_disponibles.filter((p) => p.id == event.target.id);
  
      if (productoExists < 0) {
         produtos_seleccionados.push({ ...productoSelecionado[0], quantidade: 1 });
        
      
      return showListSelecionadosProdutos(produtos_seleccionados);
      }
  
      produtos_seleccionados[productoExists].quantidade += 1;
      
      showListSelecionadosProdutos(produtos_seleccionados);
}
  });

function showListSelecionadosProdutos(produtos) {
  document.getElementById("productos-selecionados").innerHTML = "";
  
  produtos.forEach((p) => {
    document.getElementById("productos-selecionados").innerHTML += `
      <li>
        ${p.quantidade}x <strong>${p.name}</strong> - ARS ${p.precio} unit / Total: ARS ${p.quantidade * p.precio} 
      </li>
      
    `;
  });
 
}















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
