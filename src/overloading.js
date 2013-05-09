function overloaded(first) {
    console.log("Version 1!");
}

function overloaded(first, second) {
    console.log("Version 2!");
}

function overloaded2() {
    console.log(arguments);
}