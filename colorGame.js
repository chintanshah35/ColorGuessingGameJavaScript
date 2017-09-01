/**
 * Created by Chintan on 8/18/2017.
 */

var numOfSquares=6;
var colors =generateRandomColors(numOfSquares); //1
/*[
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
];*/
var pickedColor= pickColor();
var squares= document.querySelectorAll(".square"); //1
var colorDisplay= document.getElementById("colorDisplay");//2
var message= document.querySelector("#message");//2
var h1=document.querySelector("#title");//4
var reset=document.querySelector("#reset");//5
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");


colorDisplay.textContent=pickedColor; //2
//1
for(var i=0;i<squares.length;i++){
    //add initial colors to square
    squares[i].style.backgroundColor= colors[i];
    //add click listners to the square
    squares[i].addEventListener("click", function () {
    //grab color of clicked square
    var clickedColor= this.style.backgroundColor;
    //compare clicked color to picked color
    if(clickedColor==pickedColor){
        message.textContent="Correct";
        changeColors(clickedColor);
         h1.style.backgroundColor = clickedColor;
         reset.textContent="Play Again?"
    } else{
          this.style.backgroundColor="#232323";
          message.textContent="Try Again";
        }
    });
}

//3
function changeColors(color) {
    //loop through all the squares
    for(var i =0;i<squares.length;i++){
    //change each color to match the given color
    squares[i].style.background=color;
    }
}

//3
function pickColor(){
   var random= Math.floor(Math.random()*colors.length);
   console.log(random);
   console.log(colors[random]);
   return colors[random];
}

//4
function generateRandomColors(num){
    //make an array
    var arr=[];
    //add num random colors to array
    for(var i=0;i<num;i++){
        //get random color and push into arr
        arr.push(randomColor());
    }
    //return the array
    return arr;
}

//4
function randomColor(){
    //pick a red from 0 to 255, green from 0 to 255, blue from 0 to 255
    var r = Math.floor(Math.random()*256);
    var g= Math.floor(Math.random()*256);
    var b= Math.floor(Math.random()*256);
    var rgb= "rgb("+r+", "+g+", "+b+")";
    return rgb;
}

//5
reset.addEventListener("click", function () {
    //generate new colors
    colors=generateRandomColors(numOfSquares);

    //pick a new random color from the array
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    message.textContent="";
    this.textContent="New Colors";
    //change colors of square
    for (var i =0;i<squares.length;i++){
        squares[i].style.backgroundColor=colors[i];
    }
    h1.style.backgroundColor="steelblue";
});

easy.addEventListener("click", function () {
    easy.classList.add("selected");
    hard.classList.remove("selected");
    numOfSquares=3;
    colors= generateRandomColors(numOfSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;

    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor= colors[i];
        }
        else{
            squares[i].style.display="none";
        }
    }
});

hard.addEventListener("click", function () {
    easy.classList.remove("selected");
    hard.classList.add("selected");
    numOfSquares=6;
    colors= generateRandomColors(numOfSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;

    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor= colors[i];
        squares[i].style.display="block";
        }

});