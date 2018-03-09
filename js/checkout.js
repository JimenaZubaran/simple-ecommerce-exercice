
  let counterCheckuot = document.getElementById("counterItems");  
  //Tomar del localStorage y colocar en contador la cantdad de items en el array
  let arrayProducts = JSON.parse(localStorage.getItem("arrayIds"));
  let lengthArrayProducts=  arrayProducts.length
  counterCheckuot.innerText = lengthArrayProducts;
 

let sumTotalPrice = 0;
function calculateTotal(json) {
console.log(json);
let jsonForEach = json;
let template = " ";
jsonForEach.forEach(product => {
  //guardar en variable función createTemplate
  var templateComplite = createTemplate(product)

  let tr = document.createElement('tr');
  tr.innerHTML=templateComplite
  
  let productsContainer = document.getElementById('table-checkout');
  productsContainer.prepend(tr);
});

  let totalContainer = document.getElementById('total_container')
  totalContainer.innerHTML = sumTotalPrice
console.log(sumTotalPrice);
}


function createTemplate(product){
  let name = product.title;
  let price = product.price;
  sumTotalPrice += price;

  template = `
  <th scope="row">${name}</th>
  <td>${price}</td>
  `
return template
}

calculateTotal(arrayProducts)