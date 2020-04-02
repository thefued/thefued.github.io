var c = document.getElementById("c");
var ctx = c.getContext("2d");
var ctx2 = c.getContext("2d");
//making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;
var hello = "hi, my friend!";
var hellorand = "hi, my friend!abcčćđgjklopqsštuvwxzž, !Ћѕђћăâêôơư+÷×=$€£¢@3456";
var l=16;
hello.split[''];
hellorand.split[''];
var katakana = [
    'ー',
    'ン',
    'ス',
    'ヮ',
    '于',
    'ヸ',
    'ヺ',
    'ヂ',
    'ヵ',
    'ヲ',
    'ヶ',
    'ヌ',
    'ゼ',
    'ヨ',
    'ヴ',
    'ポ',
    'ゴ',
    'ザ',
    'ワ',
    'ベ',
    'ソ',
    'ヒ',
    'ハ',
    'ダ',
    'ガ',
    'モ',
    'ボ',
    'ノ',
    'ィ',
    'プ',
    'ニ',
    'ホ',
    'チ',
    'ム',
    'エ',
    'ナ',
    'サ',
    'キ',
    'フ',
    'バ',
    'コ'
]

var font_size = 15;
var columns = c.width/font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for(var x = 0; x < columns; x++)
	drops[x] = 1; 
var stringhello = [];
var k=0;
var kk=0;
var kkk=0;
var index=0;
var timer=10;
var texterror=0;
var texthello=0;;
//drawing the characters
function draw()
{
    k++;
    if (kk<14) {
    ctx.fillStyle = "rgba(0, 0, 20, 0.07)";
	ctx.fillRect(0, 0, c.width, c.height);
    ctx.font = font_size + "px arial";
	for(var i = 0; i < drops.length; i++)
    {   
        /*
        if (i%5 == 0) {
            let = Math.floor(Math.random()*hello.length);
            let elemletter = document.getElementById('str'+let);
            if (stringhello[let]!=hello[let])
            stringhello[let] = hellorand[Math.floor(Math.random()*hellorand.length)];
            elemletter.innerHTML = stringhello[let];
            }
        */
		if(drops[i]*font_size > c.height && Math.random() > 0.975)
		drops[i] = 0;  
        //incrementing Y coordinate
        if (k>0) {
            timer=(k);
        if ((i<16)|(i>29)) {
        ctx.shadowColor = "#FFF";
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowBlur = 5;
        ctx.fillStyle = "#FFF"; 
        var text = katakana[Math.floor(Math.random()*katakana.length)];
        ctx.fillText(text, i*font_size, drops[i]*font_size);

        ctx.shadowColor = "rgba(0, 0, 20, 1)";
        ctx.shadowOffsetX = undefined;
        ctx.shadowOffsetY = undefined;
        ctx.shadowBlur = undefined;
        ctx.fillStyle = "rgba(0, 0, 20, 1)";
        ctx.fillRect((i)*font_size, (drops[i]-1.8)*font_size, font_size, font_size);

        ctx.shadowColor = "#0C0";
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowBlur = 5;
        ctx.fillStyle = "#0C0"; 
        var textg = katakana[Math.floor(Math.random()*katakana.length)];
        ctx.fillText(textg, i*font_size, (drops[i]-1)*font_size);
        
        ctx.shadowColor = "rgba(0, 0, 20, 1)";
        ctx.shadowOffsetX = undefined;
        ctx.shadowOffsetY = undefined;
        ctx.shadowBlur = undefined;
            drops[i]++;
        } else {
            if (drops[i]!=23) {
                ctx.shadowColor = "#FFF";
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowBlur = 5;
        ctx.fillStyle = "#FFF"; 
        var text = katakana[Math.floor(Math.random()*katakana.length)];
        ctx.fillText(text, i*font_size, drops[i]*font_size);

        ctx.shadowColor = "rgba(0, 0, 20, 1)";
        ctx.shadowOffsetX = undefined;
        ctx.shadowOffsetY = undefined;
        ctx.shadowBlur = undefined;
        ctx.fillStyle = "rgba(0, 0, 20, 1)";
        ctx.fillRect((i)*font_size, (drops[i]-1.8)*font_size, font_size, font_size);

        ctx.shadowColor = "#0C0";
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowBlur = 5;
        ctx.fillStyle = "#0C0"; 
        var textg = katakana[Math.floor(Math.random()*katakana.length)];
        ctx.fillText(textg, i*font_size, (drops[i]-1)*font_size);
        
        ctx.shadowColor = "rgba(0, 0, 20, 1)";
        ctx.shadowOffsetX = undefined;
        ctx.shadowOffsetY = undefined;
        ctx.shadowBlur = undefined;
                drops[i]++; 
            } else {
            let letter = Math.floor(Math.random()*hellorand.length);

            if (hello[i-16]!=stringhello[29-i]) {
            
            ctx.shadowColor = "rgba(0, 0, 20, 1)";
            ctx.shadowOffsetX = undefined;
            ctx.shadowOffsetY = undefined;
            ctx.shadowBlur = undefined;
            ctx.fillStyle = "rgba(0, 0, 20, 1)";
            ctx.fillRect((i)*font_size, (drops[i]-1.3)*font_size, font_size*1, font_size*2);
            
            ctx.shadowColor = "#FFF";
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            ctx.shadowBlur = 5;
            ctx.fillStyle = "#FFF"; 
            var text = hellorand[letter];
            ctx.fillText(text, i*font_size, drops[i]*font_size);
            ctx.shadowColor = "rgba(0, 0, 20, 1)";
            ctx.shadowOffsetX = undefined;
            ctx.shadowOffsetY = undefined;
            ctx.shadowBlur = undefined;
            if (hello[i-16]==hellorand[letter]) {
                ctx.shadowColor = "rgba(0, 0, 20, 1)";
                ctx.shadowOffsetX = undefined;
                ctx.shadowOffsetY = undefined;
                ctx.shadowBlur = undefined;
                ctx.fillStyle = "rgba(0, 0, 20, 1)";
                ctx.fillRect((i)*font_size, (drops[i]-1.3)*font_size, font_size*2, font_size*2);
                let elemletter = document.getElementById('str'+(29-i));
                elemletter.innerHTML = hello[29-i];
                stringhello[29-i]=hello[i-16];
                if (hello[29-i]==' ') elemletter.innerHTML='&nbsp;';
                kk++;
                if (kk==14) {
                    kkk=k;
                    texthello = document.getElementById('hy_text');
                    texterror = texthello.innerHTML;
                }
            }
            }
            else {
            }
            }
        }
        } else {
            ctx.shadowColor = "#FFF";
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            ctx.shadowBlur = 5;
            ctx.fillStyle = "#FFF"; 
            var text = katakana[Math.floor(Math.random()*katakana.length)];
            ctx.fillText(text, i*font_size, drops[i]*font_size);

            ctx.shadowColor = "rgba(0, 0, 20, 1)";
            ctx.shadowOffsetX = undefined;
            ctx.shadowOffsetY = undefined;
            ctx.shadowBlur = undefined;
            ctx.fillStyle = "rgba(0, 0, 20, 1)";
            ctx.fillRect((i)*font_size, (drops[i]-1.8)*font_size, font_size, font_size);

            ctx.shadowColor = "#0C0";
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            ctx.shadowBlur = 5;
            ctx.fillStyle = "#0C0"; 
            var textg = katakana[Math.floor(Math.random()*katakana.length)];
            ctx.fillText(textg, i*font_size, (drops[i]-1)*font_size);
    
            ctx.shadowColor = "rgba(0, 0, 20, 1)";
            ctx.shadowOffsetX = undefined;
            ctx.shadowOffsetY = undefined;
            ctx.shadowBlur = undefined;
            drops[i]++; 
        }
        
    
    }
    setTimeout(draw, timer);
} else {
    timer=90;
    if ((k == kkk+2)||(k == kkk+4)||(k == kkk+10)||(k == kkk+12)||(k == kkk+14)||(k == kkk+20)) {
        ctx.fillStyle = "rgba( 20, 20, 80, 1)";
        ctx.shadowOffsetX = undefined;
        ctx.shadowOffsetY = undefined;
        ctx.shadowBlur = 0;
        ctx.fillRect(0, 0, c.width, c.height);
        for(var i = 0; i < drops.length; i++) {
            if ((i>15)&&(i<30)) {
            }
            else {
                ctx.shadowOffsetX = undefined;
                ctx.shadowOffsetY = undefined;
                ctx.shadowBlur = 0;
                ctx.shadowColor = undefined;
                let color = Math.floor(Math.random()*215)+50;
                ctx.fillStyle = "rgba( "+color+", "+color+", "+color+", 1)"; 
                var textg = katakana[Math.floor(Math.random()*katakana.length)];
                ctx.fillText(textg, i*font_size, (drops[i]-1)*font_size);
                texthello.innerHTML = "error!!!"
                setTimeout(() => {
                        texthello.innerHTML = texterror;
                }, 100);
            }
        }   

    }
    ctx.fillStyle = "rgba( 44, 44, 44, 0.2)";
    ctx.shadowOffsetX = undefined;
    ctx.shadowOffsetY = undefined;
    ctx.shadowBlur = 0;
    ctx.fillRect(0, 0, c.width, c.height);
    if (k<(kkk+80)) {
        setTimeout(draw, timer);
    }
}
}
draw();




