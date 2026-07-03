// BUAT CLASS ShoppingCART DI SINI
class ShoppingCart {
    constructor() {
        this.cart = []
    }

    addItem(namaBarangnya, hargaBarangnya) {
        this.cart.push({
            name: namaBarangnya,
            price: hargaBarangnya
        })
    }

    removeItem(namaBarangnya) {
        this.cart = this.cart.filter(item => item.name !== namaBarangnya)
    }

    showItems() {
        return this.cart
    }

    getTotal() {
        return this.cart.reduce((acc, item) => acc + item.price`, 0`)
    }
}

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