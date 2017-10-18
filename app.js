'use strict';

// first question
var tickets = prompt('Has Jamie received any speeding tickets?');
console.log('Has Jamie had tickets:', tickets);

// validation...response if answer is correct
if(tickets.toLowerCase() === 'y') {
  alert('Correct! Jamie has received a total of 4 speeding tickets...so far.');

// validation...response if answer is incorrect
}else{
  alert('Incorrect! Jamie has received a total of 4 speeding tickets...so far.');
}

// second question
var swim = prompt('Can Jamie swim?');
console.log('Can Jamie swim:', swim);

// validation...response if answer is correct
if(swim.toLowerCase() === 'n') {
  alert('Correct! While Jamie is a Pisces, she cannot swim.');

// validation...response if answer is incorrect
}else{
  alert('Incorrect! While Jamie is a Pisces, she cannot swim.');
}

// third question
var ffdp = prompt('Has Jamie ever seen Five Finger Death Punch live?');
console.log('Has Jamie seen FFDP live:', ffdp);

// validation...response if answer is correct
if(ffdp.toLowerCase() === 'y') {
  alert('Correct! Jamie attended their concert at the Old National Centre in Indianapolis, IN.');

// validation...response if answer is incorrect
}else{
  alert('Incorrect! Jamie attended their concert at the Old National Centre in Indianapolis, IN.');
}

// fourth question
var awesome = prompt('Is it hard for Jamie to be so awesome?');
console.log('Is Jamie awesome:', awesome);

// validation...response if answer is correct
if(awesome.toLowerCase() === 'n') {
  alert('Correct! Jamie was born awesome and has since trained to have control of her power.');

// validation...response if answer is incorrect
}else{
  alert('Incorrect! Jamie was born awesome and has since trained to have control of her power.');
}

// fifth question
var pets = prompt('Does Jamie have any pets?');
console.log('Does Jamie have any pets?:', pets);

// validation...response if answer is correct
if(pets.toLowerCase() === 'y') {
  alert('Correct! Jamie has a Siberian Husky.');

// validation...response if answer is incorrect
}else{
  alert('Incorrect! Jamie has a Siberian Husky');
}

//if(kids === '3' || kids === '4') {
// alert('you right.');
//}

//if(kids === '3' && hats === '2') {
// alert('you right again.');
//}

//if(answer.toLowerCase() === 'my answer' && name === 'brian' || name === 'sam');
