//  Everything you need to know about return from a function

// function add(num1, num2) {
//     console.log(num1 , num2);
//     var sum = num1 + num2;
//     console.log(sum);
// }
// add(10, 20);

function bringSingra(money) {
    var singaraPrice = 10;
    var singaraPabo = money/singaraPrice;
    return singaraPabo;
}
var myTaka = 500;
var singara = bringSingra(myTaka);
console.log(singara);
