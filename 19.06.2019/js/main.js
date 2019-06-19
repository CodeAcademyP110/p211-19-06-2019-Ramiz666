"use strict";

// const canvas = document.getElementById("can");
// const ctx = canvas.getContext("2d");

// ctx.fillStyle = "red";
// ctx.strokeStyle = "red";
// ctx.fillRect(10, 10, 1180, 480);
// ctx.clearRect(500, 225, 200, 50);

// ctx.arc(600, 250, 200, 0, Math.PI, true);
// ctx.fill();

//Dam - ingilisce

// let startX = 10;
// let startY = 10;
// let margin = 10;

// while (startX <= 590 && startY <= 240) {
//   ctx.moveTo(startX, startY);
//   ctx.lineTo(1200 - startX, startY);
//   ctx.lineTo(1200 - startX, 500 - startY);
//   ctx.lineTo(startX, 500 - startY);
//   ctx.lineTo(startX, startY);

//   startX += margin;
//   startY += margin;

//   ctx.stroke();
// }

// SVG - Scalable vector graphics

// window.onload = function() {
//   preloader.classList.add("hide");

//   setTimeout(() => {
//     preloader.classList.add("d-none");
//   }, 500);
// };



// const divs = [...document.querySelectorAll(".main")];
// divs.forEach(div => {
//   div.onclick = function(){
//     this.style.backgroundColor = "red";
//     this.style.fontSize = "2em";
//   }
// })

// $("div input[type=radio]:checked").click(function(){
//   $(this).css({
//     "background-color": 'red',
//     "font-size": "2em"
//   })
// })

// $(".btn-hide").click(function(){
//   $(".main:nth-child(odd)").fadeToggle(3000);
// })

// $(".main").hover(
//   function(){
//     this.innerText = this.innerText + " hovering now.";
//   },
//   function(){
//     this.innerText = this.innerText.replace("hovering now.", "");
//   }
// )



// $(".main").click(function()
// {
//   const oldValue = $(this).text();
//   $(this).text("Salam " + oldValue);
// })

$(".btn-add").click(function(){
  const li = $("<li class='list-group-item'>Salam</li>");

  $("#menu li:first-child").after(li);
});