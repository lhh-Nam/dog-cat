// if ... else
// Example 1: toss a coin

function tossCoin() {
	var value = Math.random();
	if (value < 0.5) {
		console.log('Mặt sấp');
	} else {
		console.log('Mặt ngửa');
	}
}

tossCoin();

// Example 2:

function countBills () {
	var total = 0;
	for( var bill of bills)
	{
		if (!bill.fake) {
			total += bill.value;
		} else {
			console.log('has bill fake', bill);
			break;
		}
		
	}
	return total;
}

var bills = [
	{value: 50000 },
	{value: 100000 },
	{value: 100000, fake: true },
	{value: 500000 }
];

var total = countBills(bills);
console.log(total);