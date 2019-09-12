
// Business Logic for ticket object
function Tickets(customerPurchase){
  this.customerPurchases = [],
  this.currentTicketNumber = 0,
  this.currentTicketPrice = 0
}
Tickets.prototype.addCustomerPurchase = function(customerPurchase) {
  customerPurchase.ticketNumber = this.assignTicketNumber();
  this.currentTicketPrice += customerPurchase.ticketPrice;
  this.customerPurchases.push(customerPurchase);
}
Tickets.prototype.assignTicketNumber = function(){
  this.currentTicketNumber += 1;
  return this.currentTicketNumber;
}
// Business Logic for Customer
function CustomerPurchase(movie,time,age){
  this.movie = movie,
  this.time = time,
  this.age=age
}
CustomerPurchase.prototype.addMovieTitle = function(){
  if (this.movie==="movie1") {
    this.movieTitle = "Once Upon A Time In Hollywood";
    return this.movieTitle;
  } else if (this.movie==="movie2") {
    this.movieTitle = "The Nightingale";
    return this.movieTitle;
  } else {
    this.movieTitle = "Book Smart";
    return this.movieTitle;
  }
}
CustomerPurchase.prototype.addShowTime = function(){
  if (this.time==="mat") {
    this.showTime = " at 2:00 pm.";
    return this.showTime;
  } else {
    this.showTime = " at 7:00 pm. ";
    return this.showTime;
  }
}
CustomerPurchase.prototype.calculateTicketPrice = function(){
  if ((this.movie==="movie1")&&(this.time==="eve")&&(this.age==="adult")) {
    this.ticketPrice = 20;
    return this.ticketPrice;
  } else if ((this.movie===("movie2" || "movie3"))&&(this.time==="eve")&&(this.age==="adult")){
    this.ticketPrice = 15;
    return this.ticketPrice;
  } else if ((this.movie==="movie1")&&(this.time==="eve")&&(this.age==="child")) {
    this.ticketPrice = 12;
    return this.ticketPrice;
  } else if ((this.movie===("movie2" || "movie3"))&&(this.time==="eve")&&(this.age==="child")){
    this.ticketPrice = 7;
    return this.ticketPrice;
  } else if  ((this.movie==="movie1")&&(this.time==="eve")&&(this.age==="senior")) {
    this.ticketPrice = 14;
    return this.ticketPrice;
  } else if ((this.movie===("movie2" || "movie3"))&&(this.time==="eve")&&(this.age==="senior")){
    this.ticketPrice = 9;
    return this.ticketPrice;
  } else if ((this.movie==="movie1")&&(this.time==="mat")&&(this.age==="adult")) {
    this.ticketPrice = 15;
    return this.ticketPrice;
  } else if ((this.movie===("movie2" || "movie3"))&&(this.time==="mat")&&(this.age==="adult")){
    this.ticketPrice = 10;
    return this.ticketPrice;
  } else if ((this.movie==="movie1")&&(this.time==="mat")&&(this.age==="child")) {
    this.ticketPrice = 7;
    return this.ticketPrice;
  } else if ((this.movie===("movie2" || "movie3"))&&(this.time==="mat")&&(this.age==="child")){
    this.ticketPrice = 2;
    return this.ticketPrice;
  } else if ((this.movie==="movie1")&&(this.time==="mat")&&(this.age==="senior")) {
    this.ticketPrice = 9;
    return this.ticketPrice;
  } else {
    this.ticketPrice = 4;
    return this.ticketPrice;
  }
}

// User interface Logic
// Business logic for movie titles, times, age categories
// var movie1 = "Once Upon A Time In Hollywood"; // first run
// var movie2 = "The Nightingale";// second run
// var movie3 = "Book Smart";// second run
var tickets = new Tickets();
function inputError(movieChoice,movieTime){
  $("div#errorMessages").empty();
  if (!movieChoice) {
    $("div#errorMessages").append("Please choose one of the excellent movies above");
  } else if (!movieTime) {
    $("div#errorMessages").append("Please choose a show time");
  } else {
    $("div#errorMessages").append("Please indicate age");
  }
};
function resetForm(){
  $("input.movies[name='movies']").prop("checked", false);
  $("select.movieTimes[name='movieTimes']").val("");
  $("select.customerAge[name='customerAge']").val("");
};
function displayCurrentTicketInfo(ticketsToDisplay){
  var ticketList = $("ul#individualTickets");
  var htmlForTicketList = "";
  ticketsToDisplay.customerPurchases.forEach(function(customerPurchase){
    htmlForTicketList += "<li>Ticket Number " + customerPurchase.ticketNumber + "<br>" + customerPurchase.movieTitle + customerPurchase.showTime + " Cost is $" + customerPurchase.ticketPrice + "</li>";
  });
  ticketList.html(htmlForTicketList);

  $("p#totalCost").html("TOTAL COST $"+ticketsToDisplay.currentTicketPrice);
};

$(document).ready(function(){
  $("form#movieChoiceInput").submit(function(event){
    event.preventDefault();
    var movieChoice = $("input.movies[name='movies']:checked").val();
    var movieTime = $("select.movieTimes[name='movieTimes'] option:selected").val();
    var customerAge = $("select.customerAge[name='customerAge'] option:selected").val();

    if (!movieChoice || !movieTime || !customerAge) {
      inputError(movieChoice,movieTime);
    } else {
      $("div#errorMessages").empty();
    }

    var newCustomerPurchase = new CustomerPurchase(movieChoice,movieTime,customerAge);

    newCustomerPurchase.calculateTicketPrice();

    newCustomerPurchase.addMovieTitle();

    newCustomerPurchase.addShowTime();

    tickets.addCustomerPurchase(newCustomerPurchase);

    console.log(newCustomerPurchase);
    console.log(tickets);

    displayCurrentTicketInfo(tickets);

    resetForm();

  });
});
