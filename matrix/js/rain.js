function randomInt(max) {
    var rand = Math.random() * (max);
    rand = Math.round(rand);
    return rand;
  }
window.onload = function() {
    var translate3 = [
        ['1','2','3'],
        ['1','2','3']
    ];
    var str = []
    var trans3d = [];
    var welcome = [
                ['Д', 'о', 'б', 'р', 'о', ' ', 'п', 'о', 'ж', 'а', 'л', 'о', 'в', 'а', 'т', 'ь', '!', '_'],
                [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
                ];
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
    for (var i = 1; i < 101; i++) {
        if (i<10) {
            ii = '0'+i;
         } else {
             ii=i;
         }
        str[i]=ii;
        }
    var sorry = 0;
    setTimeout(function addWord() {
        i=randomInt(99-sorry)+1;
        let elem = document.getElementById('str'+str[i]);
            index = 1;
            sorry += 1;
            elem.classList.add('str_zoom_'+str[i]);
            addLet(str[i], index);
            str.splice(i, 1);
        if (sorry<100) setTimeout(addWord, 93);
      }, 100);
    function addLet(k, idd) {
        let elemlet = document.getElementById(k+'_'+idd);
        elemlet.classList.add("str__let");
            idd = idd + 1;
            if (idd<50) {
                /*
            setTimeout(function () {
                let elemletter = document.getElementById(k+'_'+idd);
                elemletter.innerHTML = katakana[randomInt(40)];
            }, 500);
            setTimeout(function () {
                let elemletter = document.getElementById(k+'_'+idd);
                elemletter.innerHTML = katakana[randomInt(40)];
            }, 1000);
            setTimeout(function () {
                let elemletter = document.getElementById(k+'_'+idd);
                elemletter.innerHTML = katakana[randomInt(40)];
            }, 5000);*/
            setTimeout(addLet, 50, k, idd);
            }
            else {
            }
          };

/*
    l=0;
    for (let l = 0; l < welcome[0].length; l++) {
        $('.hello__title').append("<span class='title__let let_" + l + "'>" + welcome[0][l]+ "</span>");
    }
    ll=0;
    l = randomInt(welcome[0].length);
    setTimeout(function welcomeAdd() {
        l = randomInt(welcome[0].length-1);
        if ($('.let_' + welcome[1][l]).attr('class')=='title__let let_'+welcome[1][l]) {
            console.log(welcome);
            if (welcome[0][l]!='_') {
            $('.let_'+welcome[1][l]).addClass('str__lett')
                        .css('color', 'white');
            }
            else {
                $('.let_'+welcome[1][l]).addClass('str__lett_');
            }
        } else {
        }
        welcome[0].splice(l, 1);
        welcome[1].splice(l, 1);
        console.log(welcome);
        ll+=ll;
        if (ll<18) setTimeout(welcomeAdd, 50-ll);
    }, 1000);
    setTimeout(function () {
        $('.hello').addClass('hello_up');
        }, 100);
    setTimeout(function () {
        $('.matrix-page').addClass('matrix_up');
        }, 100);
        */
}