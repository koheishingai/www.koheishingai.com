$(function(){ var socket = io.connect('http://www.koheishingai.com:8080'); var adst; var cinit2; function cstartInit2(){ cinit2 = setInterval(function(){ cstopInit2();}, 800);}
function cstopInit2(){ $('#switchBox').click(); clearInterval(cinit2);}
$('.window_label').click(function(){ if(monitor == 0){ $('#switchBox').click(); socket.emit('publishit', $("#editor_area").text(), location.hash); location.reload();}else{ socket.emit('publishit', $("#editor_area").text(), location.hash); location.reload();}
}); $('#full-page-link').click(function(){ var hist = {}
if(oneflg == 0 && elem == 0){ var randobet = function(n, b) { b = b || ''; var a = 'abcdefghijklmnopqrstuvwxyz' + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + '0123456789' + b; a = a.split(''); var s = ''; for (var i = 0; i < n; i++) { s += a[Math.floor(Math.random() * a.length)];}
return s;}; var rand = randobet(7); socket.emit('publishit', $("#editor_area").text(), rand); hist = localStorage.getItem('history'); if(hist == null){ hist = {"0": 'http://www.koheishingai.com/codegarage/stickup'+'#'+rand}; localStorage.setItem('history', JSON.stringify(hist));}else{ var cnt = 0; for( i in JSON.parse(hist)){ cnt++;}
hist = JSON.parse(hist); hist[cnt] = 'http://www.koheishingai.com/codegarage'+'#'+rand; localStorage.setItem('history', JSON.stringify(hist));}
$('#full-page-url').attr('value','http://www.koheishingai.com/codegarage/stickup'+'#'+rand); oneflg++ }else if(elem == 1){ socket.emit('publishit', $("#editor_area").text(), location.hash);}
}); socket.emit('cgsin', location.hash); socket.on('done', function () { if(elem == 1){ $('#done').text('Save it.').fadeIn();}else{ $('#done').text('Publish it.').fadeIn();}
}); socket.on('cdgout', function (data) { if(data != null){ $("#textBox").append(data); $('.window_label ').show(); elem = 1;}else{ $("#textBox").append('<style>@media screen and (max-width: 1205px){.navbar-nav {display:none;}}</style><div id="fulwl" style="height: 3000px; overflow-x: hidden; margin-top: 0px;"><div class="carousel-inner" style="position: relative; width: 100%; overflow: hidden; color: rgb(90, 90, 90); margin-top: 0px;" helvetica="" neue",="" helvetica,="" arial,="" sans-serif;="" font-size:="" 14px;="" line-height:="" 20px;="" background-color:="" rgb(255,="" 255,="" 255);="" margin-top:="" 0px;"=""><div class="item active" style="position: relative; -webkit-transition: left 0.6s ease-in-out; transition: left 0.6s ease-in-out; left: 0px; min-height: 460px; background-color: rgb(10, 100, 164);width: 100%;"><h1 style="margin: 0px;line-height: 460px;padding: 0 23px;color: white;">Scroll down this page.</h1><div class="container" style="padding-right: 15px; padding-left: 15px; margin-right: auto; margin-left: auto; "></div></div><div class="navbar-wrapper stuckMenu" style="margin-top: 20px; position: relative; z-index: 15; margin-left: 199px; color: rgb(90, 90, 90); top: 0px;" helvetica="" neue",="" helvetica,="" arial,="" sans-serif;="" font-size:="" 14px;="" line-height:="" 20px;="" background-color:="" rgb(255,="" 255,="" 255);="" top:="" 0px;="" width:="" 70%;"=""><div class="container" style="padding-right: 15px; padding-left: 15px; margin-right: auto; margin-left: auto; max-width: 1170px;"><div class="navwrapper"><div class="navbar navbar-inverse navbar-static-top" style="position: relative; z-index: 1000; min-height: 50px; width: 410px;margin-left: -187px;margin-bottom: 20px; border-width: 0px 0px 1px; border-style: solid; border-color: rgb(57, 132, 57); border-top-left-radius: 4px; border-top-right-radius: 4px; border-bottom-right-radius: 4px; border-bottom-left-radius: 4px; background-color: rgb(92, 184, 92);"><div class="container" style="padding-right: 15px; padding-left: 15px; margin-right: auto; margin-left: auto; max-width: 1170px;"><div class="navbar-header" style="float: left; margin-right: 0px; margin-left: 0px;"><a class="navbar-brand" href="http://lirancohen.github.io/stickUp/#" style="color: rgb(255, 255, 255); text-decoration: none; float: left; padding: 15px; font-size: 18px; margin-left: -15px;">stickUp</a></div><div class="navbar-collapse collapse" style="max-height: 340px; padding-right: 15px; padding-left: 15px; border-top-width: 0px; border-color: rgb(16, 16, 16); box-shadow: none; width: auto; padding-bottom: 0px; margin-right: 0px; margin-left: 0px; overflow: visible !important; height: auto !important;"></div></div></div></div></div></div><script type="text/javascript">jQuery(function($) {$(document).ready( function() {$(".navbar-wrapper").stickUp();});});</script></div></div>'); location.hash = ''; elem = 0;}
});}); 