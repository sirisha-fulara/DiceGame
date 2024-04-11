//alert("working");
var randomNumber1 = Math.floor( (Math.random())*7);
var randomDiceImg= "images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomDiceImg);

var randomNumber2= Math.floor(Math.random()*7);
var randomDiceImg2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDiceImg2);

if(randomDiceImg>randomDiceImg2){
    document.querySelector("h1").innerHTML="Player 1 Won";
   
}
else if(randomDiceImg<randomDiceImg2){
    document.querySelector("h1").innerHTML="Player 2 Won";
}
else if(randomDiceImg=randomDiceImg2){
    document.querySelector("h1").innerHTML="Draw";
}
else{
    document.querySelector("h1").innerHTML="Refresh Me";
}