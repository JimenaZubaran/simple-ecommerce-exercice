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

calculateTotal(arrayProducts);




paypal.Button.render({

  env: 'sandbox', // sandbox | production

  // PayPal Client IDs - replace with your own
  // Create a PayPal app: https://developer.paypal.com/developer/applications/create
  client: {
      sandbox:    'AcGRwPF_uQngnc-WSz7M9F1Mik8xnc4irZw__xE0dserau0k7WhoV79HHDG3rMtgIlDHEZnU2V84ARkT',
      production: '<insert production client id>'
  },

  // Show the buyer a 'Pay Now' button in the checkout flow
  commit: true,

  // payment() is called when the button is clicked
  payment: function(data, actions) {

      // Make a call to the REST api to create the payment
      return actions.payment.create({
          payment: {
              transactions: [
                  {
                      amount: { total: "1.00", currency: 'MXN' }
                  }
              ]
          }
      });
  },

  // onAuthorize() is called when the buyer approves the payment
  onAuthorize: function(data, actions) {
    console.log(data)
      // Make a call to the REST api to execute the payment
      return actions.payment.execute().then(function() {
        //let confir = document.getElementById("confirmacion-paypal");
        //confir.innerHTML = "Payment Complete";
          window.alert('Payment Complete!');
      });
  }

}, '#paypal-button-container');