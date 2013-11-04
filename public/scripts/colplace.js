$(function(){


  var nowpla = 0;





   var timercp = false;








  $(window).resize(function() {


    if (timercp !== false) {


        clearTimeout(timercp);


    }




    timercp = setTimeout(function() {


      if(nowpla != "1" && $("window").innerWidth() < 701){

        localStorage.setItem("place", "1");


        plastrage();


      }else if(nowpla != "1" && $("window").innerWidth() > 700){

        adjust23();

      }   

    }, 200);
  });




  

  

  $('#wrm02').click(function(){


    if(nowpla != "2"){

    localStorage.setItem("place", "2");


    plastrage();


    }

  });




  $('#wrm01').click(function(){

    if(nowpla != "3"){

    localStorage.setItem("place", "3");


    plastrage();


    }

  });




  $('#wrm03').click(function(){

    if(nowpla != "1"){

    localStorage.setItem("place", "1");


    plastrage();


    }

  });

  
  

  plastrage();





  function plastrage(){

    var setpla = localStorage.getItem('place');


    if(setpla == null){


      localStorage.setItem("place", "1");


      nowpla = 1;


    }else{


      nowpla = setpla;


    }
      

    places();
  

  };
  
  

  


$('#wrm01').mouseover(function(){

    if(nowpla != "3"){


    $('#wrm01').css("background-position", "-54px -20px");

    }


  });


  $('#wrm01').mouseleave(function(){

    if(nowpla != "3"){


    $('#wrm01').css("background-position", "-54px -40px");

    }


  });


  
$('#wrm02').mouseover(function(){

     if(nowpla != "2"){

   
  $('#wrm02').css("background-position", "-26px -20px");


     }

  });


  $('#wrm02').mouseleave(function(){

    if(nowpla != "2"){


    $('#wrm02').css("background-position", "-26px -40px");

    }


  });



  $('#wrm03').mouseover(function(){


     if(nowpla != "1"){


    $('#wrm03').css("background-position", "0px -20px");

    }



  });


  $('#wrm03').mouseleave(function(){


    if(nowpla != "1"){


    $('#wrm03').css("background-position", "0px -40px");

    }






  });


  


  function adjust23(){

    var cwidth = $("#wcontent").innerWidth();

          cwidth = cwidth - 100;

          cwidth = cwidth/4;

    $(".article").css("width", cwidth);

    var cheight = cwidth/2;

          cheight = cheight*3;

    $(".article").css("height", cheight);

  }







  function places(){




    if(nowpla == '1'){


      $("#wcontent").css("width", "400px").css("padding", "0 0"); 

      $("#wrm03").css("background-position", "-0px 0px").css("cursor", "default");      

      $("#wrm02").css("background-position", "-26px -40px").css("cursor", "pointer");

      $("#wrm01").css("background-position", "-54px -40px").css("cursor", "pointer");        
    

      $(".article").css("float", "none").css("margin-right", "0px").css("width", "400px").css("height", "400px");

    }else if(nowpla == '2'){

      $("#wcontent").css("width", "100%").css("padding", "0 20px"); 

      $("#wrm03").css("background-position", "-0px -40px").css("cursor", "pointer");      

      $("#wrm02").css("background-position", "-26px 0px").css("cursor", "default");

      $("#wrm01").css("background-position", "-54px -40px").css("cursor", "pointer");

      $(".article").css("float", "left").css("margin-right", "20px");   

      adjust23();   




    }else if(nowpla == '3'){


      $("#wcontent").css("width", "100%").css("padding", "0 20px"); 

      $("#wrm03").css("background-position", "-0px -40px").css("cursor", "pointer");      

      $("#wrm02").css("background-position", "-26px -40px").css("cursor", "pointer");

      $("#wrm01").css("background-position", "-54px 0px").css("cursor", "default");

      $(".article").css("float", "left").css("margin-right", "20px");

      adjust23();         
    

    }


  };


});