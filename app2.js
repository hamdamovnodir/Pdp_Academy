let plus = document.querySelector(".plus i ");
let catigoris = document.querySelector(".catigoris ");
let plus2 = document.querySelector(".plus2 i ");
let catigoris2 = document.querySelector(".catigoris2 ");
let box_one = document.querySelectorAll(".box_one ");
let box_input = document.querySelectorAll(".box_one input ");
let totol = document.querySelector(".totol h3 ");
let modul = document.querySelector(".modul p ");
let total2 = document.querySelector(".total2 h3 ");
let xarid = document.querySelector(".xarid button ");
let chek = document.querySelectorAll(".chek input ");
let chek2 = document.querySelector(".chek2 input ");
let react_input2 = document.querySelector(".react_input2 h4");
let react_h4 = document.querySelector(".react_h4 h4 ");

xarid.addEventListener("click", () => {
  location.reload();
});

for (let i = 0; i < box_input.length; i++) {
  box_input[i].checked = false;
}
for (let i = 0; i < chek.length; i++) {
  chek[i].checked = false;
}

$(document).ready(function () {
  $(".plus ").on("click", function () {
    $('.plus2', (false))
  })

})


$(document).ready(function () {
  $(".plus ").on("click", function () {
    if ($(".catigoris").css("display") == "none") {
      $(".plus i").css("transform", "rotate(45deg)");
      $(".catigoris").slideDown();
      $(".catigoris").animate(
        {
         
        },
        1000
      );
    } else {
      $(".plus i ").css("transform", "rotate(0deg)");
      $(".catigoris").slideUp();
      $(".catigoris").animate(
        {
          // top: "-500px",
        },
        1000
      );
    }
  });
});
$(document).ready(function () {
  $(".plus2 ").on("click", function () {
    if ($(".catigoris2").css("display") == "none") {
      $(".plus2 i").css("transform", "rotate(45deg)");
      $(".catigoris2").slideDown();
      $(".catigoris2").animate(
        {
          // top: '100px',
        },
        1000
      );
    } else {
      $(".plus2 i ").css("transform", "rotate(0deg)");
      $(".catigoris2").slideUp();
      $(".catigoris2").animate(
        {
          // top: "-500px",
        },
        1000
      );
    }
  });
});
// $(".plus2  ").on("click", function () {
//   if ($(".react_input2 h4").css("display") == "none") {
//     $(".react_h4  h4").css("display", "none");
//     $(".react_input2 h4").css("display", "block");
//   } else {
//     $(".react_input2 h4").css("display") == "block";
//     $(".react_h4  h4").css("display", "block");
//     $(".react_input2 h4").css("display", "none");
//   }
// });

  
for (let i = 0; i < box_one.length; i++) {
  box_input[i].addEventListener("click", () => {
    if (box_input[i].checked == true) {
      totol.innerHTML =
        +totol.innerHTML + +box_one[i].getAttribute("data-price");
      total2.innerHTML =
        +total2.innerHTML + +box_one[i].getAttribute("data-price");
      modul.innerHTML++;
    } else {
     
      totol.innerHTML =
        +totol.innerHTML - +box_one[i].getAttribute("data-price");
      total2.innerHTML =
        +total2.innerHTML - +box_one[i].getAttribute("data-price");
      modul.innerHTML--;
    }
  });
}

$('.main_five').on('mouseover',function(){
  if ($('.icon5 ').css('background') == "white"){
    $('.icon5 ').css('background','green');
    $('.icon5 i ').animate({
      color: 'white'
    })
  }
})
// let front_h4 = document.querySelector('.front_h4 h4 ');
// let front_input = document.querySelector('.front_input h4 ');

// plus.addEventListener("click", () => {
//   catigoris.classList.add("blok");
//   plus.classList.add("transtion");
//   front_input.classList.add("opacity2");
//   front_h4.classList.add("opacity");
// });
// plus.addEventListener("dblclick", () => {
//   catigoris.classList.remove("blok");
//   plus.classList.remove("transtion");
//   front_input.classList.add("opacity");
//   front_h4.classList.add("opacity2");
// });
// plus2.addEventListener("click", () => {
//   catigoris2.classList.add("blok");
//   catigoris.classList.add("transtion");
// });
// plus2.addEventListener("dblclick", () => {
//   catigoris2.classList.remove("blok");
//   catigoris.classList.add("transtion");
// });
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:5,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

const sr = ScrollReveal({
  distance: "100px",
  duration: 2500,
  delay: 450,
  reset: true,
});
sr.reveal(".main_card2", { delay: 200, origin: "top" });
sr.reveal(".main_one_h1", { delay: 200, origin: "left" });
sr.reveal(".main_one_img", { delay: 300, origin: "right" });
// sr.reveal(".main_four", { delay: 300, origin: "left" });
// sr.reveal(".main_four2", { delay: 300, origin: "right" });
sr.reveal(".main_one_img2", { delay: 400, origin: "top" });
sr.reveal(".right_five ", { delay: 300, origin: "right" });
sr.reveal(".left_five ", { delay: 400, origin: "left" });
sr.reveal(".top_card p", { delay: 100, origin: "bottom" });
sr.reveal(".bottom_card p", { delay: 100, origin: "bottom" });
sr.reveal(".bottom_card2 p", { delay: 100, origin: "bottom" });
sr.reveal(".bottom_card3 p", { delay: 100, origin: "bottom" });
sr.reveal(".right_seven p", { delay: 100, origin: "bottom" });
sr.reveal(".left_six p", { delay: 100, origin: "bottom" });
sr.reveal(".card_nine_top h4", { delay: 20, origin: "bottom" });

