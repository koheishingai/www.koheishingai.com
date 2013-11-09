$(function(){

      //socket section
  
      var socket = io.connect('http://localhost:8081');
 
      socket.emit('worksinit', 'test');
      socket.on('articleini', function (data) {
     
      console.log(data);
      });
      socket.on('articleti', function (data) {
     
      console.log(data);
      $('.loader').fadeOut();
      $('.toptitle').css("opacity", "1");
      });







});