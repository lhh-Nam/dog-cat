// setTimeout
// clearTimeout
// setTimeout(fn, ms); // milliseconds
// timer

function done() {
	console.log('Finish');
}

console.log('Start');
var timeuotId = setTimeout(done,3000);
console.log('Done');

clearTimeout(timeuotId);