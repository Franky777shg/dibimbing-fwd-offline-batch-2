// BUAT CLASS ShoppingCART DI SINI
// ...

const cart = new ShoppingCart();

cart.addItem("Laptop", 10000000);
cart.addItem("Mouse", 200000);
cart.addItem("Keyboard", 500000);

cart.removeItem("Mouse");

console.log(cart.showItems());
console.log(cart.getTotal());

// HASILNYA
// [
//   { name: "Laptop", price: 10000000 },
//   { name: "Keyboard", price: 500000 }
// ]

// 10500000