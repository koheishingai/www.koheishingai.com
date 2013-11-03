  window.onload = function(){

//Device Branch
var userAgent = window.navigator.userAgent.toLowerCase();
var appVersion = window.navigator.appVersion.toLowerCase();
var wb;
var sb;


//alert('userAgent='+userAgent);
//alert('appVersion='+appVersion);

if (userAgent.indexOf('Android') != -1 && userAgent.indexOf('Mobile') == -1) {
  sb = 'androidtab';
} else if(navigator.userAgent.indexOf('iPad') != -1){
  sb = 'ipad'
}else if(navigator.userAgent.indexOf('iPhone') != -1 && navigator.userAgent.indexOf('iPad') == -1){
  sb = 'iphone'
}else if(navigator.userAgent.indexOf('Android') != -1 && navigator.userAgent.indexOf('Mobile') == -1){
  sb = 'android'
}

if (userAgent.indexOf('opera') != -1) {
  wb = 'opera';
}  else if (userAgent.indexOf("msie") != -1) {
  if (appVersion.indexOf("msie 6.") != -1) {
    wb = 'ie6';
  } else if (appVersion.indexOf("msie 7.") != -1) {
    wb = 'ie7';
  } else if (appVersion.indexOf("msie 8.") != -1) {
    wb = 'ie8';
  } else if (appVersion.indexOf("msie 9.") != -1) {
    wb = 'ie9';
  } else {
    wb = 'ie';
  }
} else if (userAgent.indexOf('chrome') != -1) {
  wb = 'chrome';
} else if (userAgent.indexOf('safari') != -1) {
  wb = 'safari';
} else if (userAgent.indexOf('gecko') != -1) {
  wb = 'gecko';
} else {
  return false;
}

if(sb != null||wb == 'safari'||wb == 'ie6'||wb == 'ie7'||wb == 'ie8'||wb == 'ie9'||wb == 'ie'){
    if(sb == 'android'||sb == 'iphone'){
      //mobile
    }else if(sb == 'androidtab'||sb == 'ipad'){
      //tablet
    }else if(wb == 'safari'){
      //Safari(PC)
    }else if(wb == 'ie6'||wb == 'ie7'||wb == 'ie8'||wb == 'ie9'||wb == 'ie'){
      //IE(PC)
    }
}else{
  //Chrome and FireFox(PC)
}
};