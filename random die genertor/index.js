function rollup()
{
var randnum1=Math.floor(Math.random()*6)+1;
var randimage="dice"+randnum1+".png";
var imagesrc="images/"+randimage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",imagesrc);


var rn2=Math.floor(Math.random()*6)+1;
var ri2="dice"+rn2+".png";
var is2="images/"+ri2;
var i2=document.querySelectorAll("img")[1];
i2.setAttribute("src",is2);

if(randnum1>rn2)
{
    var player1won=1;
    document.querySelector("h1").innerHTML="Player1 WON";
    document.getElementById("p1").style.color="yellow";
    document.getElementById("p1").style.border="5px solid yellow";
    document.getElementById("p2").style.color="red";
    document.getElementById("p2").style.border="5px solid red";

}
else if(rn2>randnum1)
{
    document.querySelector("h1").innerHTML="Player2 WON";
    document.getElementById("p2").style.color="yellow";
    document.getElementById("p2").style.border="5px solid yellow";
    document.getElementById("p1").style.color="red";
    document.getElementById("p1").style.border="5px solid red";

}
else
{
    document.querySelector("h1").innerHTML="Draw";
    document.getElementById("p1").style.color="red";
    document.getElementById("p1").style.border="5px solid red";
    document.getElementById("p2").style.color="red";
    document.getElementById("p2").style.border="5px solid red";

}
}
document.getElementById("p2").style.color = "blue";
