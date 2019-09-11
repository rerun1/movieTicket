
#### Purchase a Movie Ticket
#### _**by Suzi Rubino — September 10th, 2019**_
<br>

## Description
Webpage allows a user to select from three movies, by choosing the name of a movie, the time of day that they would like to see the movie and inputting their age. The program lets the user know how much their movie ticket will cost, based on those three factors. Movie prices are based on customer age, the time of day they will view the movie and whether or not the movie is a "first-run" movie.

The constructor and prototype is called customerTicket and is produced based on 12 prices that represent two categories of movies (first- or second-run), two times of day the movie is shown (matinee or evening) and the customer age.

Behavior — plain English	Input	Output
Program contains a list of three movies available to view	movie1, movie2, movie3	movies [movie1, movie2, movie3] 
Program contains two movie types: first-run and second-run.	first run, second run
	movieType [firstRun, secondRun]
Program contains two show times: matinee and evening	matinee show and evening show	movieTime [matinee, eve]
Program contains 3 age categories for movies: child, adult and senior	child, adult, senior	customerAge [child, adult, senior]
Program contains 12 prices for movies based on customer age, show time and type of movie	movie type, movie show time and customer age	movieType.firstRun.movieTime[matinee].customerAge[child]=price1;
movieType.firstRun.movieTime[matinee].customerAge[adult]=price2;
movieType.firstRun.movieTime[matinee].customerAge[senior]=price3;
movieType.firstRun.movieTime[eve].customerAge[child]=price4;
movieType.firstRun.movieTime[eve].customerAge[adult]=price5;
movieType.firstRun.movieTime[eve].customerAge[senior]=price6;
movieType.secondRun.movieTime[matinee].customerAge[child]=price7;
movieType.secondRun.movieTime[matinee].customerAge[adult]=price8;
movieType.secondRun.movieTime[matinee].customerAge[senior]=price9;
movieType.secondRun.movieTime[eve].customerAge[child]=price10;
movieType.secondRun.movieTime[eve].customerAge[adult]=price11;
movieType.secondRun.movieTime[eve].customerAge[senior]=price12;
Program builds objects for each movie, with the given of what type the movie is and what show times they movie has.	Movie1 is a first run movie, movie2 is a second run movie, movie3 is a second run movie and that all times and ages are included for all movies.	movie1{this.title=movie1Title, this.time=[mat, eve], this.type=firstRun}
Program builds object for new customer with key values of movie object above, age and price	Since customer will indicate movie, time and age these things are input	newCustomer = {this.movie=movie1, this.time=matinee, this.age=child, this.price=moviePrice(result)}
Program has user interface displaying only movie object’s title and times for each movie	Movie1: title, times. Movie2: title, times. Movie3: title, times.	Movie1 Title; Movie1 Times. Movie2 Title; Movie2 Times. Movie3 Title; Movie3 Times.
Program has user interface displaying a radio button that allows user to choose one of the three movie titles and time	Movie1 title, time	Movie1 title, matinee
Program has user interface displaying a radio button that indicates how old the customer is	Customer Age	Customer age =  adult
Program creates customer object with movie choices and calculate price to display back to customer	movie1 title, time, customer age, price	Movie1 title, matinee, adult, price2



<br>

## Objectives
- [] JavaScript business logic and user interface logic are separate.
- [] Variable names are descriptive and use lower camel case (e.g. myVariableExample).
- [] Code is clean, well-refactored, and easy-to-read. This includes correct indendation, spacing, and including only necessary comments and debugging tools.
- [] Application implements a for loop and works as expected.
All previous objectives have been met.
- [] Project is broken down into "plain English" specs, listed in README.
- [] Project is in a presentable, portfolio-quality state.
- [] Practice styling with imagery

<br>

## Current Screenshot for Reference
<br>

![alt text](https://raw.githubusercontent.com/rerun1/factorial/master/img/screenShot8-20-19.png)
<br>
<br>

## Setup/Installation Requirements
* Clone this github repository
* Open index.html in a browser
<br>

## Known Bugs
 There are no known bugs.
 <br>

## Support and Contact Details
Please contact Suzi Rubino at suzirubino@gmail.com or contribute your solution to code. Thank you!
<br>

## Technologies Used
1. html
2. CSS and Bootstrap
3. github
4. javascript and Jquery library

<br>

### License
MIT License

Copyright (c) 2019 Suzi Rubino

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
