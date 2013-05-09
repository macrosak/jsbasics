var hoisting = 10;
function hoistingIsABitch() {
    console.log(hoisting);
    var hoisting = 20;
    console.log(hoisting);
}