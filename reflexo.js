var container= document.querySelector(".container");
var img = document.querySelector(".img")
var time=document.getElementById("time")
var head=document.querySelector("#head")
const imgHeight= 10;
const imgWidth = 10;
const containerHeight= 80;
const containerWidth= 100;
img.style.positon="absolute"
const maxX=containerWidth-imgWidth
const maxY= containerHeight-imgHeight
var counter=0;
var startTime, endTime, elapsedTime, timeStarted=false;
var c=0, finalTime=0, game=1;
var playable=true;






var Nclick = document.getElementById("Nclick")


img.addEventListener("click", function(){

    var a = Math.random()*maxX;
    var b = Math.random()*maxY;
    img.style.marginLeft= a+"vh";
    img.style.marginTop = b+"vh";
    console.log(a)
    counter=counter+1;
    Nclick.innerText= counter;
    console.log(counter)
    if(timeStarted)
    {
  
        endTime= Date.now();
        elapsedTime= endTime-startTime;
        finalTime= finalTime+elapsedTime
        startTime= endTime;
        game++;
    }
    else{
        elapsedTime=0;
        startTime= Date.now();
        timeStarted= true;
    }
    if(game==10)
    {
        time.innerText= finalTime/10+" ms";
        head.innerText=  "Please click reset to play once more or it will reset itself after you click the star."
    }
    else if(game>10)
    {
        reset()
    }
  

})
function reset()
{
    counter=0;
    Nclick.innerText= counter;
    img.style.marginLeft= 45+"vh";
    img.style.marginTop = 35+"vh";
    startTime=0;
    endTime=0;
    elapsedTime=0;
    game=1
    timeStarted=false;
    finalTime=0;
    time.innerText=0+" ms";
    head.innerText= "REFLEXO"

   
}



