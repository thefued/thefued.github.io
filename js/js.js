var cvs = document.getElementById("canvas");
var w = window.innerWidth;
var h = window.innerHeight;
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
function draw() {
 ctx.drawImage(bg, 0, 0);
}
draw(); // Вызов функции из вне
function zay(z) {
	switch(z) {
  case 1:  // if (x === 'value1')
 ctx.drawImage(zay1, 175, 40);
    break;
  case 2:  // if (x === 'value2')
 ctx.drawImage(zay2, 175, 40);
    break;
  case 3:  // if (x === 'value2')
 ctx.drawImage(zay3, 175, 40);
    break;
  case 4:  // if (x === 'value2')
 ctx.drawImage(zay4, 175, 40);
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
 ctx.drawImage(bg, 0, 0)
 zay(hh);
 if (louse) ctx.drawImage(lose, 70, 80);
 if (kol>0) 
 {
  for (var i = 0; i < 12; i++) {
    if (mor[i][1]>0) 
	{
	 switch (mor[i][1])
		{
		 case 1: 
		 {
		    if (mor[i][2]>100) 
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
			ctx. drawImage(m1, mor[i][2], mor[i][3]); 
			}
		 }
		 break;
		 case 2: 
		 {
		    if (mor[i][2]<500) 
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
			ctx. drawImage(m2, mor[i][2], mor[i][3]);
			}
		 }
		 break;
		 case 3: 
		 {
		    if (mor[i][2]>100) 
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
			ctx. drawImage(m1, mor[i][2], mor[i][3]);}
		 }
		 break;
		 case 4: 
		 {
		    if (mor[i][2]<500) 
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
			ctx. drawImage(m2, mor[i][2], mor[i][3]);}
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
			mor[i][2] = -100;
			mor[i][3] = 315;
			ctx. drawImage(m1, mor[i][2], mor[i][3]);
			
		}
		break;
		case 2: 
		{   
			mor[i][2] = 680;
			mor[i][3] = 315;
			ctx. drawImage(m2, mor[i][2], mor[i][3]);
			
		}
		break;
		case 3: 
		{   
		    mor[i][2] = -100;
			mor[i][3] = 145;
			ctx. drawImage(m1, mor[i][2], mor[i][3]);
			
		}
		break;
		case 4: 
		{   
			mor[i][2] = 680;
			mor[i][3] = 145;
			ctx. drawImage(m2, mor[i][2], mor[i][3]);
			
		}
		break;
	};
	kol = kol + 1;
};
	document.getElementById('score').innerHTML = score;
};
setTimeout(function rrr() {
	game();;
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
	, 20);
