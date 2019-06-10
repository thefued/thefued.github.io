function randomInt(max) {
    var rand = Math.random() * (max);
    rand = Math.round(rand);
    return rand;
  }
window.onload = function() {
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
    for (var i = 2; i < 51; i++) {
        if (i<10) {
            ii = '0'+i;
         } else {
             ii=i;
         }
    zin = randomInt(1000);
        $("#1").clone() 
            .attr('id', ii)
            .css({
                left: ''+ (randomInt(100)) + '%',
                transform: 'translate3d(0px, 0px, ' + (randomInt(-1000)) + 'px)'})
            .css('z-index', Math.round(zin/2) + '')
            .appendTo(".matrix-page");
    }
    var sorry = 1;
    $("#1").attr('id', '01')
    .css({
        left: ''+ 80 + '%',
        transform: 'translate3d(0px, 0px, ' + (randomInt(900)) + 'px)'})
    .css('z-index', Math.round(zin/10) + '');
    setTimeout(function addWord() {
        strI=randomInt(50);
        if (strI<10) strI = '0'+strI;
        if ($('#'+strI+' span:last-child').attr('id')==undefined) {
        index = 1
        }
        else {
            index = (''+$('#'+strI+' span:last-child').attr('id'));
            index = +(/^\d\d_/.exec(index));
        }
        if ($('#'+strI).height()<$(document).height()-50) {
            sorry += 1;
            if (sorry < 50) {
            addLet(strI, index);
        }
        } 
        if (sorry < 50) setTimeout(addWord, 70);
      }, 100);
    function addLet(k, idd) {
            $('#'+k).append("<span class='str__let' id=" + k + "_" + idd + ">"+katakana[randomInt(40)]+'</span>');
            $('#'+k).addClass('view');
            idd = idd + 1;
            if ($('#'+k).height()<$(document).height()-50) {
            setTimeout(function () {
            $('#'+k+'_'+idd).html(katakana[randomInt(40)]);
            }, 500);
            setTimeout(function () {
            $('#'+k+'_'+idd).html(katakana[randomInt(40)]);
            }, 1000);
            setTimeout(function () {
            $('#'+k+'_'+idd).html(katakana[randomInt(40)]);
            }, 1500);
            setTimeout(function () {
            $('#'+k+'_'+idd).html(katakana[randomInt(40)]);
            }, 2000);
            setTimeout(addLet, 70, k, idd);
            }
          };
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
}
