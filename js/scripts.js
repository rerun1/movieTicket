// Business logic for movie titles, times, age categories
var movie1 = "Once Upon A Time In Hollywood"; // first run
var movie2 = "The Nightingale";// second run
var movie3 = "Book Smart";// second run
var mat = "matinee";
var eve = "evening";
var child = "child";
var adult = "adult";
var senior = "senior";
// Business Logic for ticket object
function Tickets(customerPurchase){
  this.customerPurchases = [],
  this.currentTicketPrice = 0
}
Tickets.prototype.addCustomerPurchase = function(customerPurchase) {
  this.currentTicketPrice += customerPurchase.ticketPrice;
  this.customerPurchases.push(customerPurchase);
}
// Business Logic for Customer
function CustomerPurchase(movie,time,age){
  this.movie = movie,
  this.time = time,
  this.age=age
}
CustomerPurchase.prototype.calculateTicketPrice = function(){
  if ((this.movie===movie1)&&(this.time===eve)&&(this.age===adult)) {
    this.ticketPrice = 20;
    return this.ticketPrice;
  } else if ((this.movie===(movie2 || movie3))&&(this.time===eve)&&(this.age===adult)){
    this.ticketPrice = 15;
    return this.ticketPrice;
  } else if ((this.movie===movie1)&&(this.time===eve)&&(this.age===child)) {
    this.ticketPrice = 12;
    return this.ticketPrice;
  } else if ((this.movie===(movie2 || movie3))&&(this.time===eve)&&(this.age===child)){
    this.ticketPrice = 7;
    return this.ticketPrice;
  } else if  ((this.movie===movie1)&&(this.time===eve)&&(this.age===senior)) {
    this.ticketPrice = 14;
    return this.ticketPrice;
  } else if ((this.movie===(movie2 || movie3))&&(this.time===eve)&&(this.age===senior)){
    this.ticketPrice = 9;
    return this.ticketPrice;
  } else if ((this.movie===movie1)&&(this.time===mat)&&(this.age===adult)) {
    this.ticketPrice = 15;
    return this.ticketPrice;
  } else if ((this.movie===(movie2 || movie3))&&(this.time===mat)&&(this.age===adult)){
    this.ticketPrice = 10;
    return this.ticketPrice;
  } else if ((this.movie===movie1)&&(this.time===mat)&&(this.age===child)) {
    this.ticketPrice = 7;
    return this.ticketPrice;
  } else if ((this.movie===(movie2 || movie3))&&(this.time===mat)&&(this.age===child)){
    this.ticketPrice = 2;
    return this.ticketPrice;
  } else if ((this.movie===movie1)&&(this.time===mat)&&(this.age===senior)) {
    this.ticketPrice = 9;
    return this.ticketPrice;
  } else {
    this.ticketPrice = 4;
    return this.ticketPrice;
  }
}
// User interface Logic
var testTickets = new Tickets();
