function displayCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const cartContainer = document.getElementById('cart-container');

  // Clear existing content in the cart container
  cartContainer.innerHTML = '';

  // Display cart items on the page
  cartItems.forEach((cartItem, index) => {
      const cartItemContainer = document.createElement('div');
      cartItemContainer.className = 'cart-item';

      const itemName = document.createElement('h3');
      itemName.textContent = cartItem.name;

      const itemPrice = document.createElement('p');
      itemPrice.textContent = `$${cartItem.price.toFixed(2)}`;
      const itemImage=document.createElement('img');
      itemImage.src=cartItem.img;
      itemImage.className = 'itemImage';

      // Remove button
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.addEventListener('click', () => removeItem(index));

      cartItemContainer.appendChild(itemName);
      cartItemContainer.appendChild(itemPrice);
      cartItemContainer.appendChild(itemImage)
      cartItemContainer.appendChild(removeButton);
     

      cartContainer.appendChild(cartItemContainer);
  });
}

function removeItem(index) {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

 
  cartItems.splice(index, 1);

  localStorage.setItem('cart', JSON.stringify(cartItems));

 
  displayCart();
}


displayCart();

document.querySelector(".allProducts").addEventListener("click", ()=>{
  window.location.href="products.html"
});
document.querySelector(".homePage").addEventListener("click",()=>{
 window.location.href="index.html"
});