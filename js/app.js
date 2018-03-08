function drawProducts(data) {
  let products = data.products;
  let productsContainer = document.getElementById("products-container");
  products.forEach((product, index) => {
    let productHTML = createProductHTML(product);
    productsContainer.appendChild(productHTML);
  });
}

function createProductHTML(product) {
  let template = `
    <h3>${product.title}</h3>
    <img src='${product.imageUrl}' alt='${product.description}'/>
    <p>${product.description}</p>
    <button id='btnAddToCar' data-product-id=${product.id}
      onclick="addToCart(${product.id})"
      class='btn btn-primary'>
        Agregar a carrito
      </button>
      <button  id='btnRemoveFromCar' class='hiddenn' data-product-id=${product.id}
      onclick="removeFromCart(${product.id})"
      class='btn btn-primary'>
        Quitar del carrito
      </button>
    <hr/>
  `;
  let productContainer = document.createElement("div");
  productContainer.className = "col text-center";
  productContainer.innerHTML = template;
  return productContainer;
}

drawProducts(data);

//guarda id cliqueado dentro de localStorage
localStorage.setItem("arrayIds", JSON.stringify([]));
//convertir local storage a array
let arrayProducts = localStorage.getItem("arrayIds")

let fullArrayProducts = JSON.parse(arrayProducts); 

function addToCart(id) {
  /* cuando agrego a carrito, tengo que:
  1) Incrementar en uno mi contador del menu
  2) Guardar mi producto en algun lugar
  3) Cambiar el boton de agregar a carrito
  por quitar del carrito
  */
//let idProduct = id;
let productId = id
//agregar ids al array con .push

fullArrayProducts.push(id)

//console.log(fullArrayProducts)

localStorage.setItem("arrayIds", JSON.stringify(fullArrayProducts));
//localStorage.setItem('datos', JSON.stringify());
increaseCounter(fullArrayProducts)

 // let idBtn = document.getElementById("")
}

function removeFromCart() {
  /* cuando agrego a carrito, tengo que:
  1) Decrementar en uno mi contador del menu
  2) Borrar mi producto de algun lugar
  3) Cambiar el boton de quitar del carrito
  por agregar a carrito
  */
}

function increaseCounter() {
  let containerCounter = document.getElementById("counterItems");
  console.log()
  /* como accedemos al HTML del contador
  y como lo incrementamos*/
}

function decreaseCounter() {
  /* como accedemos al HTML del contador
  y como lo incrementamos*/
}

function changeButtonStatus(button) {
  const btnAddToCar = document.getElementById('btnAddToCar');
  const btnRemoveFromCar = document.getElementById('btnRemoveFromCar');
  
  //if () {

  //}
  /* esta funcion deberia recibir un boton y
  cambiar su estatus
    Si el boton esta en agregar al carrito
      cambia el texto a quitar del carrito
    Y viceversa
  */
}
