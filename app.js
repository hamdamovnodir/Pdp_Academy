let type = document.querySelector(".type_three");
let type4 = document.querySelector(".type_three4");
let left = document.querySelector(".left_three");
let img = document.querySelector(".img_three");
let img2 = document.querySelector(".img_three2");
let shadow = document.querySelector(".shadow_three img");
let shadowType = document.querySelector(".shadow_type");
let shadow2 = document.querySelector(".shadow_three2 img");
let shadowType2 = document.querySelector(".shadow_type2");
let right = document.querySelector(".right_three");
let top_img = document.querySelector(".top_img img");
let link2 = document.querySelector(".link2 i");
let navbar3 = document.querySelector(".navbar3 ");
let icon3 = document.querySelector(".icon3 i ");
let flex2 = document.querySelector(".flex2 ");
let navbar5 = document.querySelector(".navbar5 ");
let navbari = document.querySelector(".navbar5 i ");
let navbarimg = document.querySelector(".navbar5 img ");








// $(document).ready(function () {
//   $(".sertifikate").on("mouseover", function () {
//     if ($(".ser_icon").css("left") == "0") {
//       $(".ser_icon  ").animate({
//         marginLeft: "10px",
//       });
//     }
//     // } else {
//     //   $(".ser_icon  ").css("left") == "10px";
//     //   $(".ser_icon  ").animate({
//     //     marginLeft: "0",
//     //   });
//     // }
//   });
// });
// let left_five = document.querySelector(".left_five");
// let icon_five = document.querySelector(".icon_five");
// let type_five2 = document.querySelector(".type_five i ");
let scroll = $(this).scrollTop();
console.log(scroll);
left.addEventListener("mouseover", () => {
  type.classList.add("show");
  img.classList.add("show");
  shadow.classList.remove("show");
  shadowType.classList.remove("show");
});
shadow.classList.add("show");
shadowType.classList.add("show");
left.addEventListener("mouseout", () => {
  type.classList.remove("show");
  img.classList.remove("show");
  shadow.classList.add("show");
  shadowType.classList.add("show");
});

right.addEventListener("mouseover", () => {
  type4.classList.add("show");
  img2.classList.add("show");
  shadow2.classList.remove("show");
  shadowType2.classList.remove("show");
});
shadow2.classList.add("show");
shadowType2.classList.add("show");
right.addEventListener("mouseout", () => {
  type4.classList.remove("show");
  img2.classList.remove("show");
  shadow2.classList.add("show");
  shadowType2.classList.add("show");
});
flex2.classList.add('none')
icon3.classList.add('none');

link2.addEventListener('click',()=>{
  navbar3.classList.add('navbar4');
  flex2.classList.remove('none');
  icon3.classList.remove('none');
  flex2.classList.add('flex3')
})
icon3.addEventListener('click',()=>{
  navbar3.classList.remove('navbar4');
  flex2.classList.add('none')
  icon3.classList.add('none');
  flex2.classList.remove('flex3')
})

navbar5.classList.add('top6')
window.addEventListener('load',()=>{
  navbar5.classList.add('top5')
  navbarimg.classList.add('top5')

})
navbari.addEventListener('click',()=>{
  navbar5.classList.remove('top5')
  navbarimg.classList.remove('top5')

})


// left_five.addEventListener("mouseover", () => {
//   type_five2.classList.add("color");
// });
// left_five.addEventListener("mouseout", () => {
//   type_five2.classList.remove("color");
// });

const sr = ScrollReveal({
  distance: "80px",
  duration: 2500,
  delay: 0,
  reset: true,
});

sr.reveal(".main_navbar", { delay: 200, origin: "top" })
sr.reveal(".type_one ", { delay: 300, origin: "left" });
sr.reveal(".img_one ", { delay: 300, origin: "top" });
// sr.reveal(".img_one2 ", { delay: 400, origin: "right" });
sr.reveal(" .main_navbar2", { delay: 200, origin: "top" });
sr.reveal(".main_one_h1", { delay: 200, origin: "top" });
// sr.reveal(".right_five ", { delay: 300, origin: "right" });
// sr.reveal(".left_five ", { delay: 400, origin: "left" });
sr.reveal(".top_card p", { delay: 100, origin: "bottom" });
sr.reveal(".bottom_card p", { delay: 100, origin: "bottom" });
sr.reveal(".bottom_card2 p", { delay: 100, origin: "bottom" });
sr.reveal(".bottom_card3 p", { delay: 100, origin: "bottom" });
sr.reveal(".right_seven p", { delay: 100, origin: "bottom" });
sr.reveal(".left_six p", { delay: 100, origin: "bottom" });
sr.reveal(".card_nine_top h4", { delay: 20, origin: "bottom" });











