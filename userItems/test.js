let products = [
    { id: 1, article: "A1B2C3", name: "Телевізор", country: "Україна", price1: 12000, price2: 10000, price3: 9000, quantity: 50 },
    { id: 2, article: "X1Y2Z3", name: "Ноутбук", country: "Німеччина", price1: 25000, price2: 20000, price3: 18000, quantity: 30 },
    { id: 3, article: "D4E5F6", name: "Смартфон", country: "США", price1: 15000, price2: 13000, price3: 12000, quantity: 70 },
    { id: 4, article: "G7H8I9", name: "Планшет", country: "Китай", price1: 7000, price2: 6500, price3: 6000, quantity: 40 },
    { id: 5, article: "J1K2L3", name: "Мікрохвильова піч", country: "Польща", price1: 5000, price2: 4500, price3: 4000, quantity: 20 },
    { id: 6, article: "M4N5O6", name: "Холодильник", country: "Італія", price1: 20000, price2: 18000, price3: 16000, quantity: 15 },
    { id: 7, article: "P7Q8R9", name: "Кондиціонер", country: "Японія", price1: 25000, price2: 22000, price3: 20000, quantity: 10 },
    { id: 8, article: "S1T2U3", name: "Пилосос", country: "Франція", price1: 8000, price2: 7000, price3: 6000, quantity: 25 },
    { id: 9, article: "V4W5X6", name: "Пральна машина", country: "Іспанія", price1: 15000, price2: 14000, price3: 13000, quantity: 8 },
    { id: 10, article: "Y7Z8A1", name: "Духова шафа", country: "Канада", price1: 18000, price2: 16000, price3: 15000, quantity: 12 }
];

// Sorting by country in alphabetical order, ignoring case
products.sort((a, b) => a.country.localeCompare(b.country, 'uk', { sensitivity: 'base' }));

console.log(products);
