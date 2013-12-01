$(function(){ heights(); var abtimer; $(window).resize(function() { if (abtimer !== false) { clearTimeout(abtimer);}
timer = setTimeout(function() { heights();}, 200);}); function heights(){ var bheight = $('body').innerHeight() - 282; $('iframe').css('height', bheight);}
}); 