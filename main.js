let produtos_seleccionados = JSON.parse(localStorage.getItem("produtos_seleccionados")) ||  [];

function showListSelecionadosProdutos(productos) {
    localStorage.setItem("produtos_seleccionados", JSON.stringify(productos))
    document.getElementById("productos-selecionados")
        .innerHTML = "";

    productos.forEach((p) => {
        document.getElementById("productos-selecionados")
            .innerHTML += `
    <li>
      ${p.quantidade}x <strong>${p.name}</strong> <img src="${p.img}" alt="${p.name}" /> - ARS ${p.precio} unit / Total: ARS ${p.quantidade * p.precio} 
   <button id = "${p.id}" class="producto_sumar">+</button> - <button id = "${p.id}" class="producto_borrar">-</button> </li> 
    
  `;
    });

}

document.getElementById("carrito")
    .addEventListener("click", () => {
        showListSelecionadosProdutos(produtos_seleccionados);
        document.getElementById("carritoDeCompra")
            .classList.toggle("activar");
    })
document.getElementById("boton-cerrar")
    .addEventListener("click", () => {
        showListSelecionadosProdutos(produtos_seleccionados);
        document.getElementById("carritoDeCompra")
            .classList.toggle("activar");
    })

const solicitarInfo = async () => {
    console.log("solicitarInfo")
    const response = await fetch("./data.json")
    const arrayProducto = await response.json()
    return arrayProducto
}

document.addEventListener("DOMContentLoaded", async () => {
    const productos_disponibles = await solicitarInfo()
    productos_disponibles.forEach((p) => {
        document.getElementById("productos")
            .innerHTML +=
            `<p id="${p.id}" class="produto-item">
        ${p.name} 
        <div class="img">
          <img src="${p.img}" alt="${p.name}" />
        </div> 
        - ARS ${p.precio}
      </p>
      `;
    });

    let produtos = document.querySelectorAll(".productos li")

    document.body.addEventListener("click", (event) => {

        if (event.target.className == "produto-item") {
            let productoExists = produtos_seleccionados.findIndex((p) => p.id == event.target.id);
            let productoSelecionado = productos_disponibles.filter((p) => p.id == event.target.id);

            Swal.fire({
                icon: "success",
                title: "Usted agrego al carrito",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                toast: true,
                position: "bottom-start"
            })

            if (productoExists < 0) {
                produtos_seleccionados.push({
                    ...productoSelecionado[0],
                    quantidade: 1
                });

                return showListSelecionadosProdutos(produtos_seleccionados);
            }


            produtos_seleccionados[productoExists].quantidade += 1;


            showListSelecionadosProdutos(produtos_seleccionados);

        }
    })

    document.body.addEventListener("click", (event) => {
        if (event.target.className == "producto_borrar") {
            let productoExists = produtos_seleccionados.findIndex((p) => p.id == event.target.id);
            if (productoExists >= 0 && produtos_seleccionados[productoExists].quantidade == 1) {
                produtos_seleccionados = produtos_seleccionados.filter((p) => p.id != event.target.id);

                return showListSelecionadosProdutos(produtos_seleccionados);
            }

            produtos_seleccionados[productoExists].quantidade -= 1;

            showListSelecionadosProdutos(produtos_seleccionados);

        }
    });

    const BotonComprar = document.getElementById("botonComprar");

    BotonComprar.addEventListener("click", () => {
        if (produtos_seleccionados.length === 0) {
            Swal.fire({
                icon: "error",
                title: "No hay productos en el carrito",
            });
            return;
        }

        const total = produtos_seleccionados
            .reduce((acc, p) => acc + p.precio * p.quantidade, 0)
            .toFixed(2);

        if (total == 0) {
            return;
        }

        Swal.fire({
                title: "Su total es de: " + total,
                text: "¿Quiere continuar con la compra?",
                showCancelButton: true,
            })
            .then((results) => {
                if (results.isConfirmed) {
                    Swal.fire({
                            title: "Indique su email",
                            input: "email",
                        })
                        .then((results) => {
                            if (results.value) {
                                produtos_seleccionados = [];
                                localStorage.setItem("produtos_seleccionados", JSON.stringify(produtos_seleccionados));
                                showListSelecionadosProdutos(produtos_seleccionados);
                                Swal.fire({
                                    title: "Compra realizada",
                                    text: "¡Gracias por su compra!",
                                });
                            }
                        });
                } else {
                    Swal.fire({
                        title: "No pasa nada, puedes seguir comprando",
                        timer: 1500,
                        timerProgressBar: true,
                    });
                }
            });
    });

    document.body.addEventListener("click", (event) => {
        if (event.target.className == "producto_sumar") {
            let productoExists = produtos_seleccionados.findIndex((p) => p.id == event.target.id);
            if (productoExists >= 0 && produtos_seleccionados[productoExists].quantidade == -1) {
                produtos_seleccionados = produtos_seleccionados.filter((p) => p.id != event.target.id);

                return showListSelecionadosProdutos(produtos_seleccionados);
            }

            produtos_seleccionados[productoExists].quantidade += 1;

            showListSelecionadosProdutos(produtos_seleccionados);

        }
    });

})