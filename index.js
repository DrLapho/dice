var randomImage1=Math.floor(Math.random()*6)+1;
var randomImage2=Math.floor(Math.random()*6)+1;

var imageDisplay1="dice"+randomImage1+".png";
var imageSource="images/"+imageDisplay1;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",imageSource);


var imageSelect="dice"+randomImage2+".png";
var imageSource="images/"+imageSelect;
var image1=document.querySelectorAll("img")[1];
image1.setAttribute("src",imageSource);

if (randomImage2<randomImage1)
{
    document.querySelector("h4").innerHTML="Player One Won";
}

else if (randomImage2>randomImage1)
{
    document.querySelector("h4").innerHTML="Player Two Won";
}

else{
    document.querySelector("h4").innerHTML="Its a draw roll Again Baboon";
}