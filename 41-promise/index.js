// var fs = require('promise-fs');

// // fs.readFile('./song1.txt', { encoding: 'utf8' })
// //   .then(function (song1) {
// //   		console.log(song1);
// //   })
// //   .catch(function (err) {
// //   		console.log(err);
// //   });

// function onDone(song) {
// 	console.log(song);
// }

// function onError(err) {
// 	console.log(err);
// }

// // fs.readFile('./song1.txt', { encoding: 'utf8' })
// // 	.then(onDone)
// // 	.catch(onError);

// /*==========================*/

// function readFile(path){
// 	return fs.readFile(path, { encoding: 'utf8' });
// }

// readFile('./song1.txt')
// 	.then(onDone)
// 	.then(function () {
// 		return readFile('song2.txt');
// 	})
// 	.then(onDone)
// 	.catch(onError)

var fs = require('fs');

function readFilePromise(path) {

	return new Promise(function (resolve, reject) {
		fs.readFile(path, { encoding: 'utf8' }, function (err, data) {
			if (err) {
				reject(err);;
			} else {
				resolve(data);
			}
		});
	});
}

readFilePromise('./song1.txt')
	.then(function (song1) {
		console.log(song1);
	})
	.catch(function (error) {
		console.log(error);
	});