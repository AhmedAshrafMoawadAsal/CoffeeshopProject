// Add smooth scrolling to nav links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  


  // Handle form submission
  document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Message sent!');
  });

  const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
  const cartItems = document.getElementById('cart-items');



  
  addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
      const product = this.parentNode;
      const productName = product.querySelector('h2').innerText;
      const listItem = document.createElement('li');
      listItem.innerText = productName;
      cartItems.appendChild(listItem);
    });
  });

  