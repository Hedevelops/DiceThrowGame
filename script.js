alert("welcome to dice game!");

var p1=prompt("enter player1 name:")
var p2=prompt("enter player2 name:")

var randomNumber1 , randomNumber2 ;

function call(){
    r2();
    setTimeout(r3, 1000);
}



function r1(){

    document.querySelector(".img1").style.transform=" scale(1.2) rotate(720deg)";
    document.querySelector(".img1").style.transition="ease-in-out 1s";
   
  

 randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomPng = "images/" + "dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll(".img1")[0];    /*  document.querySelectorAll("img")[0]; just to remeber other methods also */

image1.setAttribute("src", randomPng);



}


function r2(){
    document.querySelector(".img2").style.transform=" scale(1.2) rotate(720deg)";
    document.querySelector(".img2").style.transition="ease-in-out 1s";
    

randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomPng2 = "images/" + "dice" + randomNumber2 + ".png";

var image2 = document.querySelector(".img2");

image2.setAttribute("src", randomPng2);

}

 
function r3() {
    console.log(randomNumber1);
    console.log(randomNumber2);

if( randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 player 1 " + " ( " + p1 + " ) " + " won ";
}

else if( randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML =  "player 2 " + " ("+  p2 + " ) " + " won 🚩";

}
else{ 
    document.querySelector("h1").innerHTML = "!! Draw !! (try again) ";
}

}






