// var mobile = {
//     price: 18000,
//     brand: "samsung",
//     Storage: "48MPX",
//     camera: "esonic"
// }
// console.log(mobile);
// mobile.brand = "lenovo";
// console.log(mobile);

// multiple ways to get and set object property

var shoppingCart = {
    books: 3,
    sunglass: 4,
    keyboard: 2,
    pen:10,
}
console.log(shoppingCart);

// system 1
shoppingCart.keyboard = 40;
console.log(shoppingCart);

// system 2
shoppingCart["books"] = 15;
console.log(shoppingCart);

// system 3
 