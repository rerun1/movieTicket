// Business logic for movie object
function Movie(title,times,type){
  this.title = title,
  this.times = times,
  this.type = type
}
var movie1 = new Movie("Once Upon A Time In Hollywood",["matinee","evening"],"first run");
var movie2 = new Movie("The Nightingale",["matinee","evening"],"second run");
var movie3 = new Movie("Book Smart",["matinee","evening"],"second run");

// Business Logic for ticket object
var price1 = 5;
// first run, matinee, child
var price2 = 15;
// first run, matinee, adult
var price3 = 8;
// first run, matinee, senior
var price4 = 10;
// first run, evening, child
var price5 = 20;
// first run, evening, adult
var price6 = 14;
// first run, evening, senior
var price7 = 4;
// second run, matinee, child
var price8 = 12;
// second run, matinee, adult
var price9 = 9;
// second run, matinee, senior
var price10 = 7;
// second run, evening, child
var price11 = 16;
// second run, evening, adult
var price12 = 13;
// second run, evening, senior
var prices = [price1,price2,price3,price4,price5,price6,price7,price8,price9,price10,price11,price12];

var ages = ["child","adult","senior"];

function Ticket(title,time,age){
  this.title=title,
  this.time=time,
  this.age=age
}
