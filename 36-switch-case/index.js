// Member discount
// bronze: 2%
// silver: 5%
// gold: 8%
// platinum: 10%

function getTotal(price, card) {
	var discountRate;

	switch(card.tier) {
		case 'bronze':
			discountRate = 0.02;
			break;

		case 'silver':
			discountRate = 0.05;
			break;

		case 'gold':
			discountRate = 0.08;
			break;

		default:
			discountRate = 0.1;
			break;
	}

	// if (card.tier == 'bronze') {
	// 	discountRate = 0.02;
	// } else if (card.tier == 'silver') {
	// 	discountRate = 0.05; 
	// } else if (card.tier == 'gold') {
	// 	discountRate = 0.08; 
	// } else {
	// 	discountRate = 0.1; 
	// }

	return price * (1 - discountRate);
}

var memberCard = {
	tier: 'gold'
};

var total = getTotal(500000, memberCard);
console.log(total); 


//Example 2:

var trafficLight = 'yellow';

function goOrNot(light) {
	switch(light){
		case 'green':
			console.log('Go');
			break;

		case 'yellow':
			console.log('Slow down');
			break;

		default:
			console.log('Stop');
			break;
	}
}

goOrNot(trafficLight);