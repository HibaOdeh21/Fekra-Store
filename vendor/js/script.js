jQuery(function() {
    jQuery(".allbutton").click(function(){
        jQuery(".single").show();
    });
    jQuery(".button").click(function(){
        jQuery(".single").hide();
        jQuery(".div"+ $(this).attr('target')).show();
    });
});

let nav_link =document.querySelectorAll(".nav-link");
let bodyId = document.querySelector("body").id;
for(let link of nav_link){
    if(link.dataset.active == bodyId){
        link.classList.add("active")
    }
}
/* start log in page */
document.getElementById('login-button').addEventListener("click", function() {
    document.querySelector('.login').style.display = "flex";
    document.querySelector('.form').style.display = "none";

});

document.querySelector('.close-login').addEventListener("click", function() {
    document.querySelector('.login').style.display = "none";
    document.querySelector('.form').style.display = "flex";
});
document.getElementById('signup-button').addEventListener("click", function() {
    document.querySelector('.signup').style.display = "flex";
    
});
document.querySelector('.close-signup').addEventListener("click", function() {
    document.querySelector('.signup').style.display = "none";
});

document.getElementById('returnToLogin').addEventListener("click", function() {
    document.querySelector('.login').style.display = "flex";
    
});
/*finish login page*/

/*start cart icon page*/
document.getElementById('shopping-basket').addEventListener("click", function() {
  document.querySelector('.cart-page').style.display = "flex";
});
document.querySelector('.close-cart').addEventListener("click", function() {
  document.querySelector('.cart-page').style.display = "none";
});
const buttons = document.querySelectorAll('.shop-item-button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.cart-page').style.display = "flex";
    });
});
/*end cart icon page*/

/*start cart page*/
if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
} 
function ready(){
  var removeCartItemButtons = document.getElementsByClassName('btn-danger')
  for (var i = 0; i < removeCartItemButtons.length; i++) {
      var button = removeCartItemButtons[i]
      button.addEventListener('click', removeCartItem)
  }
  var quantityInputs = document.getElementsByClassName('cart-quantity-input')
  for (var i = 0; i < quantityInputs.length; i++){
       var input = quantityInputs[i]
       input.addEventListener('change',quantityChanged)
  }
  var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}
function purchaseClicked() {
  alert('تمت عملية الشراء بنجاح ، شكرا لطلبك من متجرنا')
  var cartItems = document.getElementsByClassName('cart-item')[0]
  while (cartItems.hasChildNodes()) {
      cartItems.removeChild(cartItems.firstChild)
  }
  updateCartTotal()
} 
function removeCartItem(event){
  var buttonClicked= event.target
  buttonClicked.parentElement.parentElement.remove()
  updateCartTotal()
}
function quantityChanged(event){
  var input = event.target
  if(isNaN(input.value) || input.value <= 0){
    input.value = 1
  }
  updateCartTotal()
}
function addToCartClicked(event) {
  var button = event.target
  var shopItem = button.parentElement.parentElement
  var title = shopItem.getElementsByClassName('card-title')[0].innerText
  var price = shopItem.getElementsByClassName('price')[0].innerText
  var imageSrc = shopItem.getElementsByClassName('product-image')[0].src
  addItemToCart(title, price, imageSrc)
  updateCartTotal()
}
function addItemToCart(title, price, imageSrc) {
  var cartRow = document.createElement('tr')
  cartRow.classList.add('cart-row')
  var cartItems = document.getElementsByClassName('cart-item')[0]
  var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
  for (var i = 0; i < cartItemNames.length; i++) {
      if (cartItemNames[i].innerText == title) {
          alert('هذا المنتج موجود مسبقا في السلة')
          return
      }
  }
  var cartRowContents =`
   <tr class="cart-row">
                
  <td class="cart-item-title">${title}</td>
  <td class="cart-quantity">
    <input class="cart-quantity-input" type="number" value="1">
  </td>
  <td class="cart-price">${price}</td>
  <td class="img">
      <img src="${imageSrc}" class="cart-img"></td>
  <td>

      <a href="#" class="btn btn-danger">حذف</a>

</tr> `
  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
  cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
  cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

  
  function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-item')[0]
    var cartRows = document.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('₪', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
        
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '₪' + total
}
/*finish cart page*/
  
