var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
/*
math.random will gives numbers from 0 to 9.9999
and by multiply it with 6 it will gives the numbers from 0 to 5.9999
by math.floor it will be 0 to 5
and by adding 1 we can get 1 to 6
*/
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 1 Wins!"
}
else if(randomNumber2 > randomNumber1)
{
    document.querySelector("h1").innerHTML = "Player 2 Wins!"
}
else
{
    document.querySelector("h1").innerHTML = "Draw!";
}