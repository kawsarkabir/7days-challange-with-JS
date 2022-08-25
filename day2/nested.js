// (advanced) Multi stage condition and nested conditions
var money = 100;
var danishPrice = 220;
var batterBonPrice = 150;
var chanachurPrice = 50;
if(danishPrice < money){
    console.log("danish khabo");
}
else if(batterBonPrice < money ) {
    console.log("battebOn khabo");
}
else if( chanachurPrice < money){
    console.log("chanachur khabo");
}
else{
    console.log("ajke amr khuda nei");
}

// nested
