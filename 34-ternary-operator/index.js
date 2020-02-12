
function tossCoin() {
	var value = Math.random();
	var result;
	if (value < 0.5) {
		result = 'Mặt sấp';
	} else {
		result = 'Mặt ngửa';
	}
	console.log(result);
}

tossCoin();

// Ternary operator
// Syntax:
//	condition ? expression when true : expression when false

function tossCoinTer() {
	var valueTer = Math.random();
	var resultTer = valueTer < 0.5 ? 'Mặt sấp' : 'Mặt ngửa';
	console.log(resultTer);;
} 

tossCoinTer();