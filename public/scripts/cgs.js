$(function(){ var socket = io.connect('http://www.koheishingai.com:8080'); var adst; var cinit2; function cstartInit2(){ cinit2 = setInterval(function(){ cstopInit2();}, 800);}
function cstopInit2(){ $('#switchBox').click(); clearInterval(cinit2);}
$('.window_label').click(function(){ if(monitor == 0){ $('#switchBox').click(); socket.emit('publishit', $("#editor_area").text(), location.hash); location.reload();}else{ socket.emit('publishit', $("#editor_area").text(), location.hash); location.reload();}
}); $('#full-page-link').click(function(){ var hist = {}
if(oneflg == 0 && elem == 0){ var randobet = function(n, b) { b = b || ''; var a = 'abcdefghijklmnopqrstuvwxyz' + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + '0123456789' + b; a = a.split(''); var s = ''; for (var i = 0; i < n; i++) { s += a[Math.floor(Math.random() * a.length)];}
return s;}; var rand = randobet(7); socket.emit('publishit', $("#editor_area").text(), rand); hist = localStorage.getItem('history'); if(hist == null){ hist = {"0": 'http://www.koheishingai.com/codegarage'+'#'+rand}; localStorage.setItem('history', JSON.stringify(hist));}else{ var cnt = 0; for( i in JSON.parse(hist)){ cnt++;}
hist = JSON.parse(hist); hist[cnt] = 'http://www.koheishingai.com/codegarage'+'#'+rand; localStorage.setItem('history', JSON.stringify(hist));}
$('#full-page-url').attr('value','http://www.koheishingai.com/codegarage'+'#'+rand); oneflg++ }else if(elem == 1){ socket.emit('publishit', $("#editor_area").text(), location.hash);}
}); socket.emit('cgsin', location.hash); socket.on('done', function () { if(elem == 1){ $('#done').text('Save it.').fadeIn();}else{ $('#done').text('Publish it.').fadeIn();}
}); socket.on('cdgout', function (data) { if(data != null){ $("#textBox").append(data); $('.window_label ').show(); elem = 1;}else{ $("#textBox").append('<h1 style="text-align:center; margin-top:20px;">Feel Free to Write Your Code!</h1>'); location.hash = ''; elem = 0;}
cstartInit2();});}); 