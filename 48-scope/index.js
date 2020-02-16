// scope
// 1.Global scope
// 2. Local scope

var a = 1;
var b = 2;
function random() {
	var b = Math.random();
	a = 3;
	console.log(b);
}

function doSomething() {
	a = 5;
}

random();
doSomething();
console.log(b);
console.log(a);
