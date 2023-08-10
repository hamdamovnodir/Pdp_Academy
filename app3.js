$(document).ready(function () {
  // flex1
  $(".modul_plus").on("click", function () {
    if ($(".card_modul").css("display") == "none") {
      $(".modul_plus i").css("transform", "rotate(45deg)");
      $(".card_modul").slideDown();
    } else {
      $(".modul_plus i").css("transform", "rotate(0deg)");
      $(".card_modul").slideUp();
    }
  });
  // flex2
  $(".modul_plus2").on("click", function () {
    if ($(".card_modul2").css("display") == "none") {
      $(".modul_plus2 i").css("transform", "rotate(45deg)");
      $(".card_modul2").slideDown();
    } else {
      $(".modul_plus2 i").css("transform", "rotate(0deg)");
      $(".card_modul2").slideUp();
    }
  });

  //  Flex3

  $(".modul_plus3").on("click", function () {
    if ($(".card_modul3").css("display") == "none") {
      $(".modul_plus3 i").css("transform", "rotate(45deg)");
      $(".card_modul3").slideDown();
    } else {
      $(".modul_plus3 i").css("transform", "rotate(0deg)");
      $(".card_modul3").slideUp();
    }
  });
  //  flex4
  $(".modul_plus4").on("click", function () {
    if ($(".card_modul4").css("display") == "none") {
      $(".modul_plus4 i").css("transform", "rotate(45deg)");
      $(".card_modul4").slideDown();
    } else {
      $(".modul_plus4 i").css("transform", "rotate(0deg)");
      $(".card_modul4").slideUp();
    }
  });
  //  flex5
  $(".modul_plus5").on("click", function () {
    if ($(".card_modul5").css("display") == "none") {
      $(".modul_plus5 i").css("transform", "rotate(45deg)");
      $(".card_modul5").slideDown();
    } else {
      $(".modul_plus5 i").css("transform", "rotate(0deg)");
      $(".card_modul5").slideUp();
    }
  });
  //  flex6
  $(".modul_plus6").on("click", function () {
    if ($(".card_modul6").css("display") == "none") {
      $(".modul_plus6 i").css("transform", "rotate(45deg)");
      $(".card_modul6").slideDown();
    } else {
      $(".modul_plus6 i").css("transform", "rotate(0deg)");
      $(".card_modul6").slideUp();
    }
  });
  //  flex7
  $(".modul_plus7").on("click", function () {
    if ($(".card_modul7").css("display") == "none") {
      $(".modul_plus7 i").css("transform", "rotate(45deg)");
      $(".card_modul7").slideDown();
    } else {
      $(".modul_plus7 i").css("transform", "rotate(0deg)");
      $(".card_modul7").slideUp();
    }
  });
  //  flex8
  $(".modul_plus8").on("click", function () {
    if ($(".card_modul8").css("display") == "none") {
      $(".modul_plus8 i").css("transform", "rotate(45deg)");
      $(".card_modul8").slideDown();
    } else {
      $(".modul_plus8 i").css("transform", "rotate(0deg)");
      $(".card_modul8").slideUp();
    }
  });
  //  flex9
  $(".modul_plus9").on("click", function () {
    if ($(".card_modul9").css("display") == "none") {
      $(".modul_plus9 i").css("transform", "rotate(45deg)");
      $(".card_modul9").slideDown();
    } else {
      $(".modul_plus9 i").css("transform", "rotate(0deg)");
      $(".card_modul9").slideUp();
    }
  });
  //  flex4
  $(".modul_plus10").on("click", function () {
    if ($(".card_modul10").css("display") == "none") {
      $(".modul_plus10 i").css("transform", "rotate(45deg)");
      $(".card_modul10").slideDown();
    } else {
      $(".modul_plus10 i").css("transform", "rotate(0deg)");
      $(".card_modul10").slideUp();
    }
  });
 
  $(".modul_t1 h5").css("display", "none");
  $(".modul_t11 h5").css("display", "block");
  $(".one").on("click", function () {
    $(".modul_t1 h5").slideDown();
    $('.one').addClass('active')
    $(".modul_t2 h5").css("display", "none");
    $(".card_one").css("display", "block");
    $(".modul_t11 h5").css("display", "none");
    $(".card_main_4").css("display", "none");
    $(".card_main_2").css("display", "none");
    $(".card_main_3").css("display", "none");
    $(".modul_t3 h5").css("display", "none");
    $(".modul_t4 h5").css("display", "none");
  });
  $(".two").on("click", function () {
    $(".modul_t1 h5").css("display", "none");
    $(".modul_t2 h5").slideDown();
    $(".card_main_2").css("display", "block");
    $(".card_main_3").css("display", "none");
    $(".card_main_4").css("display", "none");
    $(".card_one").css("display", "none");
    $(".modul_t3 h5").css("display", "none");
    $(".modul_t4 h5").css("display", "none");
  });

  $(".three ").on("click", function () {
    $(".card_main_3").css("display", "block");
    $(".card_one").css("display", "none");
    $(".card_main_2").css("display", "none");
    $(".card_main_4").css("display", "none");
    $(".modul_t1 h5").css("display", "none");
    $(".modul_t2 h5").css("display", "none");
    $(".modul_t4 h5").css("display", "none");
    $(".modul_t3 h5").slideDown();
  });

  $(".four ").on("click", function () {
    $(".card_main_4").css("display", "block");
    $(".card_main_3").css("display", "none");
    $(".card_one").css("display", "none");
    $(".card_main_2").css("display", "none");
    $(".modul_t1 h5").css("display", "none");
    $(".modul_t2 h5").css("display", "none");
    $(".modul_t3 h5").css("display", "none");
    $(".modul_t4 h5").slideDown();
  });
});

const sr = ScrollReveal({
  distance: "80px",
  duration: 2500,
  delay: 450,
  reset: true,
});
sr.reveal(".main_card3", { delay: 400, origin: "top" });
sr.reveal(".main_one_h1 h1", { delay: 200, origin: "left" });
sr.reveal(".main_one_h1 span", { delay: 20, origin: "right" });
sr.reveal(".main_one_img2", { delay: 300, origin: "right" });
sr.reveal(".main_one_img", { delay: 330, origin: "top" });
