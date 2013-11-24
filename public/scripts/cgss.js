﻿$(function(){
  var socket = io.connect('http://www.koheishingai.com:8080');
 
  var adst;
  if(location.hash == ""){
    location.href = '/codegarage';
  }
  socket.emit('cgsin', location.hash);
  socket.on('cdgout', function (data) {
    if(data != null){
      $("body").text('').append(data);
      $('.window_label ').show();
      elem = 1;
    }else{
      location.href = '/codegarage';
      elem = 0;
    }
  });
  $('.window_label').click(function(){
    if(monitor == 0){
      $('#switchBox').click();
      socket.emit('publishit', $("#editor_area").text(), location.hash);
      location.reload();
    }else{
      socket.emit('publishit', $("#editor_area").text(), location.hash);
      location.reload();
    }
  });    
  $('#full-page-link').click(function(){
    if(oneflg == 0 && elem == 0){
    var randobet = function(n, b) {
	b = b || '';
	var a = 'abcdefghijklmnopqrstuvwxyz'
		+ 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
		+ '0123456789'
		+ b;
	a = a.split('');
	var s = '';
	for (var i = 0; i < n; i++) {
      s += a[Math.floor(Math.random() * a.length)];
	}
	return s;
  }; 
  var rand = randobet(7);
  socket.emit('publishit', $("#editor_area").text(), rand);
  $('#full-page-url').attr('value','http://www.koheishingai.com/codegarage'+'#'+rand);
  oneflg++
  }else if(elem == 1){
    socket.emit('publishit', $("#editor_area").text(), location.hash); 
  }
});
});