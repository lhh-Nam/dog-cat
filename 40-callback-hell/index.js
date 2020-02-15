var fs = require('fs');

// var song1 = fs.readFileSync('song1.txt', { encoding: 'utf8' });
// console.log(song1);

// var song2 = fs.readFileSync('song2.txt', { encoding: 'utf8' });
// console.log(song2);

// var song3 = fs.readFileSync('song3.txt', { encoding: 'utf8' });
// console.log(song3);

var song1 = fs.readFile('./song1.txt', { encoding: 'utf8' }, function (err, song1) {
	console.log(song1);
	var song2 = fs.readFile('./song2.txt', { encoding: 'utf8' }, function (err2, song2) {
		console.log(song2);
		var song3 = fs.readFile('./song3.txt', { encoding: 'utf8' }, function (err3, song3){
			console.log(song3);
		});
	});
})