//JSON onject
// 1. stringify - Convert an object to a JSON string
// 2. parse - Convert a JSON string to an object
var myDog = {
	name: 'Milu',
	age: 1,
	dead: false
};

var myDogString = JSON.stringify(myDog); 

console.log(typeof myDogString);

var myCatString = '{"name": "Tom", "age": 2, "dead": false}';
var myCat = JSON.parse(myCatString);

console.log(myCat.name);

//Exercise
// 1. Show all student
// 2. Create a new student
// 3. Save & exit
// >> 1.
//  Save to ./data.json -> fs.readFileSync, JSON.parse
// >> 2.
//	> Your name?
//	> Your age?
//	> Your class?

var readlineSync = require('readline-sync')
var fs = require('fs')

var arrayData = [];

while(true){

    var option = readlineSync.question('What is your option?');                         //   Create options for Client  
    if (option ==1 ){
        var studenString = fs.readFileSync('./data.json',{encoding: 'utf8'});        //   Read data from data.json file (data in string form)
        var student = JSON.parse(studenString);                                        //   Convert a JSON string to an object
        console.log(student);   
    }

    if(option == 2){

        var myStudent = {};                                                                 // Create a new object
        myStudent.name = readlineSync.question('Student\'s name:' );
        myStudent.gender = readlineSync.question('Student\'s gender (Male/Female):' );
        myStudent.class = readlineSync.question('Student\'s class:' );
        myStudent.weight= readlineSync.question('Student\'s weight:' );
        myStudent.height = readlineSync.question('Student\'s height:' );

        arrayData.push(myStudent);                                          //  Insert data from newly created array into data.student

        fs.writeFileSync('./data.json',JSON.stringify(arrayData));              //  Write data to data.json file

    }

    if (option == 3) {
        break;                                                                      // Exit
    }

};