
const products = [
    {id:1, name: 'Black Earbuds', price: 200 ,img:"img/earbuds1.jpg"},
    {id:2, name: 'Blue Earbuds', price: 200,img:"img/earbuds2.webp" },
    {id:3, name: 'Ipone 14', price: 999,img:"img/mob1.jpg" },
    {id:4, name: 'Ipone 14 pro max', price: 999,img:"img/mob2.jpg"  },
    {id:5, name: 'Washing Mashine', price: 450,img:"img/wash1.jpg" },
    {id:6, name: 'Washing Mashine', price: 450,img:"img/wash2.jpg" },
    {id:7, name: 'yellow mercedes', price: 300000,img:"img/car1" },
    {id:8, name: 'black mercedes', price: 300000,img:"img/car2" },
    {id:9, name: 'black Fridges', price: 2200,img:"img/fridge1.jpg" },
    {id:10, name: 'grey Fridges', price: 2200,img:"img/fridge2.jpeg" },
    
  ];
  

  function createProductContainers() {
    const container = document.getElementById('product-container');
  
    products.forEach(product => {
      const productContainer = document.createElement('div');
      productContainer.className = 'product';
  
      const productName = document.createElement('h3');
      productName.textContent = product.name;
  
      const productPrice = document.createElement('p');
      productPrice.textContent = `$${product.price.toFixed(2)}`;
  
      const addToCartButton = document.createElement('button');
      addToCartButton.textContent = 'Add to Cart';
      addToCartButton.addEventListener('click', () => addToCart(product));
      const productImage= document.createElement('img');
      productImage.src=product.img;
      productImage.className = 'productImg';
  
      productContainer.appendChild(productName);
      productContainer.appendChild(productPrice);
      productContainer.appendChild(addToCartButton);
      productContainer.appendChild(productImage);
  
      container.appendChild(productContainer);
    });
  }
  



  createProductContainers();

  document.querySelector(".leftarrow").addEventListener("click", ()=>{
    window.location.href="index.html"
  });
  document.querySelector(".cartIcon").addEventListener("click", ()=>{
    window.location.href="cart.html"
  });
  
  function addToCart(product) {
    // Retrieve the existing cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Add the selected product to the cart
    cartItems.push(product);
  
    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cartItems));
  
    alert(`Added ${product.name} to the cart!`);
  }
  



