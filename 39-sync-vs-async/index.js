 var fs = require('fs');

// console.log('Start');

// var song1 = fs.readFileSync('song1.txt', { encoding: 'utf8'} ); 
// console.log(song1);

// var song2 = fs.readFileSync('song2.txt', { encoding: 'utf8'} ); 
// console.log(song2);

// console.log('End');


// Make coffee ---> 5 minutes
// Brush teeth
// Making bed

// Sync

//     |---------------|--------------|--------------|	    
// Make coffee 	MC done			BT done			DONE
// 				Brush teeth		Making bed	

// Async

// 			Brush teeth				DONE
// 		|------|----------|-----------|
// Make coffee			Making bed

console.log('Start');

var song1 = fs.readFile('song1.txt', { encoding: 'utf8' }, function (err, data) {
	console.log(data);
})

console.log('End');