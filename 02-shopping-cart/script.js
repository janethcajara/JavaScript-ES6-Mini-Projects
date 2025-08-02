// Starter data
    const cart = [
      { name: "Pen", price: 20, quantity: 3 },
      { name: "Notebook", price: 50, quantity: 2 },
      { name: "Pencil", price: 10, quantity: 5 }
    ];

    // 1. Calculate total price for each item (price * quantity)
    const totalPrices = cart.map(item => {
      const total = item.price * item.quantity;
      return `<span style="color:blue; font-weight:bold;">${item.name} - ₱${total}</span>`;
    });
    document.getElementById('result1').innerHTML = totalPrices.join('<br>');

    // 2. Generate a new array of item descriptions (e.g., "Pen - ₱20")
    const descriptions = cart.map(item => 
      `<span style="color:green;">${item.name} - ₱${item.price}</span>`
    );
    document.getElementById('result2').innerHTML = descriptions.join('<br>');

    // 3. Compute the total cart value using reduce()
    const totalCartValue = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    document.getElementById('result3').innerHTML = `<span style="color:red; font-weight:bold;">₱${totalCartValue}</span>`;

    // 4. Demonstrate ES6 features
    const message = `<br><span style="color:purple; font-weight:bold;">"Use ES6, arrow functions, and template literals."</span>`;
    // Adding message to the 4th list item
    document.querySelector('li:nth-child(4)').innerHTML += message;
 