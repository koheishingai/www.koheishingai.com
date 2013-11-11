$(function(){

      //socket section
  
      var socket = io.connect('http://localhost:8081');
 
      var adst;

      socket.emit('cgsin', location.hash);

      

      socket.on('cdgout', function (data) {
        if(data != null){
          $("#textBox").append(data);
          $("#editor_area").append(data);
          elem = 1;
          
        }else{
        
        $("#textBox").append('<h1 style="text-align:center; margin-top:20px;">Feel Free to Write Your Code!</h1>');
        $("#editor_area").append('<h1 style="text-align:center; margin-top:20px;">Feel Free to Write Your Code!</h1>');
        location.hash = '';
        elem = 0;
        
        }
        
        
        
   cstartInit2();
  var cinit2;
  
  function  cstartInit2(){
    cinit2 = setInterval(function(){
      cstopInit2();
    }, 800);
  }

  function cstopInit2(){
    $('#switchBox').click();
    clearInterval(cinit2);
  }

        
        
        
        
        
      });
      

      //socket.on('articleini', function (data) {
     
      //console.log(data);
      //});
      
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
        $('#full-page-url').attr('value',location.href+'#'+rand);
        oneflg++
   
     
     }else if(elem == 1){
     socket.emit('publishit', $("#editor_area").text(), location.hash);
     
     }
     
     
      });









});