$(document).ready(function(){
  $('.logo').on('click',function(){
      window.location.href='index.html';
  });
  var location = window.location.href;
  if (location = 'index.html') {
    $('#home').css({'background-color':'#fff','color':'#000'});
  }
});
