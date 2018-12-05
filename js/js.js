var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");
var zay1 = new Image();
var zay2 = new Image();
var zay3 = new Image();
var zay4 = new Image();
var image = new Image();
var lose = new Image();
var bg = new Image(); // Создание объекта
var m1 = new Image(); // Создание объекта
var m2 = new Image(); // Создание объекта
var z = 1;
var x = 1;
var y = 1;
var zz=1;
var louse = false;
lose.src = "mat/images/lose.png";
zay1.src = "mat/images/zay1.png"; // Указание нужного изображения
zay2.src = "mat/images/zay2.png"; // Указание нужного изображения
zay3.src = "mat/images/zay3.png"; // Указание нужного изображения
zay4.src = "mat/images/zay4.png"; // Указание нужного изображения
bg.src = "mat/images/phone.png"; // Аналогично
m1.src = "mat/images/m1.png"; // Аналогично
m2.src = "mat/images/m2.png"; // Аналогично

// Звуковые файлы
//var fly = new Audio(); // Создание аудио объекта
//var score_audio = new Audio(); // Создание аудио объекта

//fly.src = "audio/fly.mp3"; // Указание нужной записи
//score_audio.src = "audio/score.mp3"; // Аналогично

function zay(z) {
	switch(z) {
  case 1:  // if (x === 'value1')
 ctx.drawImage(zay1, Math.round(175*w/720), Math.round(40*h/800), Math.round(351*w/720), Math.round(525*h/800) );
    break;
  case 2:  // if (x === 'value2')
 ctx.drawImage(zay2, Math.round(175*w/720), Math.round(40*h/800), Math.round(351*w/720), Math.round(525*h/800));
    break;
  case 3:  // if (x === 'value2')
 ctx.drawImage(zay3, Math.round(175*w/720), Math.round(40*h/800), Math.round(374*w/720), Math.round(533*h/800));
    break;
  case 4:  // if (x === 'value2')
 ctx.drawImage(zay4, Math.round(175*w/720), Math.round(40*h/800), Math.round(374*w/720), Math.round(533*h/800));
    break;
};
};
var h = 0;
onkeyup = hnull;
function hnull (e) {h=0;};
onkeydown = handle;
function handle(e) {
if (e.keyCode == 37) 
{
if (h == 3) hh=3; else {
h=1;
hh=1;};
};
if (e.keyCode == 39) 
{
if (h == 3) hh=4; else {
h=2;
hh=2;};
};
if (e.keyCode == 38) 
{
if (h==1) hh=3;
if (h==2) hh=4;
	h=3;
}
zay(hh);
};
//массив морковок [1..12] .n-наличие/желоб .координатаХ .координатаY
var mor = [
	[0, 0, 0, 0],
	[0, 0, 0, 0],
	[0, 0, 0, 0],
	[0, 0, 0, 0],
	[0, 0, 0, 0],
	[0, 0, 0, 0],
	[0, 0, 0, 0],
	[0, 0, 0, 0],
	[0, 0, 0, 0],
	[0, 0, 0, 0],
	[0, 0, 0, 0],
	[0, 0, 0, 0]
];
var anglem = [0, 0, 0, 0, 0];
var kol = 0;
//randomize;
var randomize = 0;
function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  }
var t = 0;
hh=1;
var TO_RADIANS = Math.PI/180; 
var angle=0;
function drawRotatedImage(image, x, y, angle) { 
 
	// save the current co-ordinate system 
	// before we screw with it
	ctx.save(); 
 
	// move to the middle of where we want to draw our image
	ctx.translate(x, y);
 
	// rotate around that point, converting our 
	// angle from degrees to radians 
	ctx.rotate(angle * TO_RADIANS);
 
	// draw it up and to the left by half the width
	// and height of the image 
	ctx.drawImage(image, -(image.width/2), -(image.height/2));
 
	// and restore the co-ords to how they were when we began
	ctx.restore(); 
}
var kolx=0;
var score=0;
kol=1;
kolx=kol;
//document.addEventListener("click", function(e) {
(function($){
	'use strict';

$('.img1').on('tap', function(e){
		hh=1;
	});
$('.img2').on('tap', function(e){
		hh=2;
	});
$('.img3').on('tap', function(e){
		hh=3;
	});
$('.img4').on('tap', function(e){
		hh=4;
	});
})(jQuery);
//  switch (e.target.className) {
//	  case "img1": hh=1; break;
//	  case "img2": hh=2; break;
//	  case "img3": hh=3; break;
//	  case "img4": hh=4; break;
  
//  }
//});
function clack() {
alert("hi");
}
function game() {
 if ( document.documentElement.clientHeight<document.documentElement.clientWidth )
 {
	 h=document.documentElement.clientHeight;
	 w=(Math.round((720*h)/800));
	 canvas.height=ctx.height=h;
	 canvas.width=ctx.width=w;
	 } else
{
	 w=document.documentElement.clientWidth;
	 ctx.height=h=(Math.round((800*w)/720));
	 canvas.width=ctx.width=w;
	 canvas.height=ctx.height=h;
 };
	 $(".arrow").width(100*w/720);
	 $(".arrow").height(100*h/800);
	 $("#arrow1").offset({top:(680*h/800), left:(30*w/720) });
	 $("#arrow2").offset({top:(680*h/800), left:(580*w/720) });
	 $("#arrow3").offset({top:(570*h/800), left:(30*w/720) });
	 $("#arrow4").offset({top:(570*h/800), left:(580*w/720) });
 ctx.drawImage(bg, 0, 0, w, h);
 zay(hh);
 if (louse) ctx.drawImage(lose, Math.round(70*w/720), Math.round(70*h/800), Math.round(590*w/720), Math.round(232*h/800) );
 if (kol>0) 
 {
  for (var i = 0; i < 12; i++) {
    if (mor[i][1]>0) 
	{
	 switch (mor[i][1])
		{
		 case 1: 
		 {
		    if (mor[i][2]>Math.round(100*w/720)) 
			{
				anglem[1]=anglem[1]+0.5;
			    mor[i][2]=mor[i][2]+1;
			    mor[i][3]=mor[i][3]+0.2;
				drawRotatedImage(m1, mor[i][2]+60, mor[i][3]+30, anglem[1]);
				 if (anglem[1]<20) if (!louse) if (hh==1) {score=score+1; kolx=i; mor[i][1]=0; mor[i][2]=0; mor[i][3]=0; kol=kol-1;} else louse=true;
			}
			else 
			{
			mor[i][2]=mor[i][2]+1;
			mor[i][3]=mor[i][3]+0.2;
			ctx. drawImage(m1, mor[i][2], mor[i][3], Math.round(128*w/720), Math.round(67*h/800) ); 
			}
		 }
		 break;
		 case 2: 
		 {
		    if (mor[i][2]<Math.round(500*w/720)) 
			{
				anglem[2]=anglem[2]+0.5;
			    mor[i][2]=mor[i][2]-1;
			    mor[i][3]=mor[i][3]+0.2;
				drawRotatedImage(m2, mor[i][2]+35, mor[i][3]+40, -anglem[2]);
				 if (anglem[2]<20) if (!louse) if (hh==2) {score=score+1; kolx=i; mor[i][1]=0; mor[i][2]=0; mor[i][3]=0; kol=kol-1;} else louse=true;
			}
			else 
			{
			mor[i][2]=mor[i][2]-1;
			mor[i][3]=mor[i][3]+0.2;
			ctx. drawImage(m2, mor[i][2], mor[i][3], Math.round(128*w/720), Math.round(67*h/800) );
			}
		 }
		 break;
		 case 3: 
		 {
		    if (mor[i][2]>Math.round(100*w/720)) 
			{
				anglem[3]=anglem[3]+0.5;
			    mor[i][2]=mor[i][2]+1;
			    mor[i][3]=mor[i][3]+0.2;
				drawRotatedImage(m1, mor[i][2]+60, mor[i][3]+30, anglem[3]);
				 if (anglem[3]<20) if (!louse) if (hh==3) {score=score+1; kolx=i; mor[i][1]=0; mor[i][2]=0; mor[i][3]=0; kol=kol-1;} else louse=true;
				 
			}
			else 
			{
			mor[i][2]=mor[i][2]+1;
			mor[i][3]=mor[i][3]+0.2;
			ctx. drawImage(m1, mor[i][2], mor[i][3], Math.round(128*w/720), Math.round(67*h/800) );}
		 }
		 break;
		 case 4: 
		 {
		    if (mor[i][2]<Math.round(500*w/720)) 
			{
				anglem[4]=anglem[4]+0.5;
			    mor[i][2]=mor[i][2]-1;
			    mor[i][3]=mor[i][3]+0.2;
				drawRotatedImage(m2, mor[i][2]+35, mor[i][3]+40, -anglem[4]);
			 if (anglem[4]<20) if (!louse) if (hh==4) {score=score+1; kolx=i; mor[i][1]=0; mor[i][2]=0; mor[i][3]=0; kol=kol-1;} else louse=true;
			}
			else 
			{
			mor[i][2]=mor[i][2]-1;
			mor[i][3]=mor[i][3]+0.2;
			ctx. drawImage(m2, mor[i][2], mor[i][3], Math.round(128*w/720), Math.round(67*h/800) );}
		 }
		 break;
		}	
	}
  } 
	 
	 
 }
 t=t+1;
 if (((t<=20000) && ((t % 100)==0))||((t>20000) && ((t % 50)==0))) if (kol<12) 
 {  
	var i=1;
    while (mor[i][1]!=0) i++;
    randomize=randomInteger(1,4);
	mor[i][1]=randomize;
	switch (mor[i][1]) {
		case 1:
		{
			mor[i][2] = Math.round(-100*w/720);
			mor[i][3] = Math.round(315*h/800);
			ctx. drawImage(m1, mor[i][2], mor[i][3], Math.round(128*w/720), Math.round(67*h/800) );
			
		}
		break;
		case 2: 
		{   
			mor[i][2] = Math.round(w*680/720);
			mor[i][3] = Math.round(h*315/800);
			ctx. drawImage(m2, mor[i][2], mor[i][3], Math.round(128*w/720), Math.round(67*h/800) );
			
		}
		break;
		case 3: 
		{   
		    mor[i][2] = Math.round(w*(-100) /720);
			mor[i][3] = Math.round(h*145/800);
			ctx. drawImage(m1, mor[i][2], mor[i][3], Math.round(128*w/720), Math.round(67*h/800) );
			
		}
		break;
		case 4: 
		{   
			mor[i][2] = Math.round(w*680/720);
			mor[i][3] = Math.round(h*145/800);
			ctx. drawImage(m2, mor[i][2], mor[i][3], Math.round(128*w/720), Math.round(67*h/800) );
			
		}
		break;
	};
	kol = kol + 1;
};
	document.getElementById('score').innerHTML = score;
};
window.onload = function draw() {
 alert( 'Click Ok' );
 if ( document.documentElement.clientHeight<document.documentElement.clientWidth )
 {
	 h=document.documentElement.clientHeight;
	 w=(Math.round((800*h)/720));
	 canvas.height=ctx.height=h;
	 canvas.width=ctx.width=w;
	 } else
{
	 ctx.width=w=document.documentElement.clientWidth;
	 ctx.height=h=(Math.round((720*w)/800));
 };
 ctx.drawImage(bg, 0, 0, w, h);
 setTimeout(function rrr() {
	game();
if (score<=3) setTimeout(rrr,18);
if ((score>3)&&(score<=6)) setTimeout(rrr, 15);
if ((score>6)&&(score<=10)) setTimeout(rrr, 13);
if ((score>10)&&(score<=20)) setTimeout(rrr, 10);
if ((score>20)&&(score<=30)) setTimeout(rrr, 9);
if ((score>30)&&(score<=40)) setTimeout(rrr, 8);
if ((score>40)&&(score<=50)) setTimeout(rrr, 7);
if ((score>50)&&(score<=75)) setTimeout(rrr, 6);
if ((score>75)&&(score<=100)) setTimeout(rrr, 5);
if (score>100) setTimeout(rrr, 4);
    }
	, 20);1
};
// Вызов функции из вне
//if( document.documentElement.clientHeight<document.documentElement.clientWidth )
// {
//	 canvas.height=ctx.height=h=document.documentElement.clientHeight;
//	 canvas.width=ctx.width=w=(Math.round((800*h)/720)-10);
//	 } else
//{
//	 ctx.width=w=document.documentElement.clientWidth;
//	 ctx.height=h=(Math.round((720*w)/800));
 //};
