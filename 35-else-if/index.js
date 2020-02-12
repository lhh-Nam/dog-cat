// Syntax:
// if(condition1){
// 	statement1;
// } else if (condition2) { 	'Nếu ddk1 k xảy ra thì thực hiện đk2'
//	statement2;
// } else {
//	statement3;					'Nếu k thì thực hiện đk3'
// }

// Example: caculate bus ticket fee
// - if age < 15, discount 50%
// - if age > 60 , discount 20%
// otherwise 10000/ticket

function getTicketFee(person) {
	var basePrice = 10000;
	var discountPrice = 0;

	if (people.age < 15) {
		discountPrice = basePrice * 0.5;
		return discountPrice;
	} else if (people.age > 60) {
		discountPrice = basePrice * 0.8;
		return discountPrice;
	} else {
		return basePrice;
	} 
}

var people = {
	age: 61
};

var fee = getTicketFee(people);
console.log(fee)


 