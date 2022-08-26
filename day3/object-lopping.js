var shoppingCart = {
    books: 3,
    sunglass: 4,
    keyboard: 2,
    pen:10,
}
const keys = Object.keys(shoppingCart);
console.log(keys);
const values = Object.values(shoppingCart);
console.log(values);

for(var i = 0; i < keys.length ; i++){
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
    // console.log(propertyName, propertyValue);
}

for(propertyName in shoppingCart){
    const value = shoppingCart[propertyValue]
    console.log(propertyName, propertyValue);
}