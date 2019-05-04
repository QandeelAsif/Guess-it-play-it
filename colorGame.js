var numSquare=6;
//starting color array
var colors=[];
//selctig squares class
//pick a color(randomized)
var pickedColor;


var squares=document.querySelectorAll(".square");
//Color displayed in  the h1
var colorDisplay=document.getElementById("colorDisplay");
//display it on the site in heding
colorDisplay.textContent=pickedColor;
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var modeButtons= document.querySelectorAll(".mode");


init();
function init(){
    ///adding easy/hard mode buttons
    setupModeButtons();
    //resetScreen
    resetF();
    //adding colors to squares
    fillColors();
}

//function to setupmode button listeners
function setupModeButtons()
{
    for(var i=0; i<modeButtons.length;i++)
    {
        modeButtons[i].addEventListener("click",function(){
            //removing selected class from both buttons,(hardcoding it)
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            //and now adding to one selected
            this.classList.add("selected");

            //selcet squares to show
            this.textContent==="Easy" ? numSquare=3 : numSquare=6;
            
        });
    }
}
//function to fill in the squares
function fillColors(){
    
    for (var i=0; i<squares.length;i++)
    {
        //add listeners to squares
        squares[i].addEventListener("click",function(){
        //grab backgound color of square  to some variable in order to cross check with given color

        var clickedColor=this.style.backgroundColor;
        //apply the check
        if(clickedColor === pickedColor)
        {
                messageDisplay.textContent="correct";
                changeColor(clickedColor); 
                h1.style.backgroundColor=clickedColor;
                resetButton.textContent="Play Again?" 
            }
        else
        { 
        this.style.backgroundColor="#232323";
        messageDisplay.textContent="Try again";
        }
        });
    } 
}

function resetF()
{
    colors=generateRandomColor(numSquare);
     //change the isplaying text heading accordingly
     pickedColor=pickColor();
     colorDisplay.textContent=pickedColor;
     messageDisplay.textContent="";  
     resetButton.textContent="New Colors";
     //assign new colors to squres
     for (var i=0; i<squares.length;i++)
        {   
            //if colors is present(3/6)
            if(colors[i])
            {
                squares[i].style.display="block";
                //add initial colors to squares
                squares[i].style.backgroundColor=colors[i];
             }
             else{
                 squares[i].style.display="none";
             }
        }
    h1.style.backgroundColor="steelblue"; 
}

//event handler for Reset button
resetButton.addEventListener("click",function(){
  resetF();  
  }); 



///function to set all the squares' color to the correct one
function changeColor(color)
{
    for(var i=0;i<squares.length;i++)
    {   
        squares[i].style.backgroundColor=color;
    }
}

//picking random color declartion in the nav bar
function pickColor()
{
    //generate a numberand multiply with length of array
   var random= Math.floor (Math.random()*colors.length);
   return colors[random];
}

//generating colors
function generateRandomColor(num)
{
    //make and return an array to the caller
    var arr=[]
    for(var i=0;i<numSquare;i++)
    {
         //get random colors at each iteration and push to arr
         arr.push(randomColor());
    }
    return arr;
}

//random color actual generator
function randomColor()
{
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
} 