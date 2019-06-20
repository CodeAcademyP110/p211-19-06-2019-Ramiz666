'use strict' 
$(function() {
   $('li').click(function(){
    const text =  $(this).text()
   $(".main p").text(text);
   const image = $(this).find("img").attr("src")
   $(".main img").attr("src", image)
   });
 });

    $(".icon").click(function(){

      $(this).parent().remove(); 
    });