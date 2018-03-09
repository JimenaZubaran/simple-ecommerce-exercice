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
    <button id="${product.id}" data-product-id=${product.id}
      onclick="changeButtonStatus(${product.id})"
      class='btn btn-primary'>
        Agregar a carrito
      </button>
    <hr/>
  `;
  let productContainer = document.createElement("div");
  productContainer.className = "col text-center";
  productContainer.innerHTML = template;
  return productContainer;
}

drawProducts(data);

//Prubas localStorage con id
// //guarda id cliqueado dentro de localStorage
// localStorage.setItem("arrayIds", JSON.stringify([]));
// //convertir local storage a array
// let arrayProducts = localStorage.getItem("arrayIds")
// let fullArrayProducts = JSON.parse(arrayProducts); 



//--Function addToCard-------------------------------------------------------------------------------------------------------
//Array vacio
let arrayId = [ ];

function addToCart(id) {
  let products = data.products[id];
  console.log(id);
  arrayId.push(products);
  localStorage.setItem("arrayIds", JSON.stringify(arrayId));
  increaseCounter();
//  arrayId.push(product);
//  //console.log(arrayId);
// //Pasar a local storage
//  localStorage.setItem("arrayIds", JSON.stringify(arrayId));
}




//--Function removeFromCart-------------------------------------------------------------------------------------------------------
function removeFromCart(id) {
 let products = data.products[id];
 console.log(id);
 arrayId.pop(products);
 localStorage.setItem("arrayIds", JSON.stringify(arrayId));
 decreaseCounter()
}




//--Function increaseCounter-------------------------------------------------------------------------------------------------------
function increaseCounter() {
  counter()
  /* como accedemos al HTML del contador
  y como lo incrementamos*/
}



//--Function decreaseCounter-------------------------------------------------------------------------------------------------------
function decreaseCounter() {
  counter();
  /* como accedemos al HTML del contador
  y como lo incrementamos*/
}

//--Function counter-------------------------------------------------------------------------------------------------------
function counter (){
  let counter = document.getElementById("counterItems");  
  let arrayProducts = localStorage.getItem("arrayIds")
//Convertir a Array
  let productsArr =(JSON.parse(arrayProducts)).length;
  console.log(productsArr);
  counter.innerText = productsArr;
}


//--Function changeButtonStatus-------------------------------------------------------------------------------------------------------
function changeButtonStatus(id) {
//Traer todo el elemeto que tenga ese id
  let buttonId = document.getElementById(id)
  console.log(buttonId);
  
  if (buttonId.innerText === 'Agregar a carrito'){
    // console.log(button.value);
    buttonId.innerText = 'Quitar del carrito'
    addToCart(buttonId.id)
    //console.log(buttonId);
  }else{
    buttonId.innerText= 'Agregar a carrito'
    removeFromCart(buttonId.id);
 }
}

