// Input
const products = [
  { name: "Laptop", category: "Electronics", price: 1200 },
  { name: "Mouse", category: "Electronics", price: 25 },
  { name: "Keyboard", category: "Electronics", price: 50 },
  { name: "Chair", category: "Furniture", price: 100 },
  { name: "Table", category: "Furniture", price: 200 }
];

const findCheapestProduct = (arr, category) => {
    // Tulis code di sini

    // 1. kumpulkan dulu data product yang sesuai category
    let filteredProducts = arr.filter(item => item.category === category)
    // console.log(filteredProducts)

    // 2. cari product dengan price termurah diantara product yang sudah kita kumpulkan di atas
    let sortedProducts = filteredProducts.sort((a, b) => a.price - b.price)
    // console.log(sortedProducts)

    // 3. setelah diurutkan, PASTI item termurah, itu ada di index ke 0
    console.log(sortedProducts[0])
    // return sortedProducts[0]
}

// Contoh
// Function findCheapestProduct dipanggil
findCheapestProduct(products, "Electronics");
// console.log(findCheapestProduct(products, "Electronics"))
