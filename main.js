/* menu btn */
$("#nav_toggle").on("click", function () {
  $(this).toggleClass("active");
  $("#menu").toggleClass("menu__active");
  $(".overlay").toggleClass("active");
});
/* haeder-menu */
$("#header_toggle").on("click", function () {
  $(this).toggleClass("active");
  $("#menu").toggleClass("menu__active");
  $(".overlay").toggleClass("active");
});

$(".menu_close").on("click", function () {
  $("#menu").removeClass("menu__active");
  $("#nav_toggle").removeClass("active");
  $("#header_toggle").removeClass("active");
  $(".overlay").removeClass("active");
});

const overlay = document.querySelector(".overlay");

document.addEventListener("click", (e) => {
  if (e.target == overlay) {
    $("#menu").removeClass("menu__active");
    $("#nav_toggle").removeClass("active");
    $("#header_toggle").removeClass("active");
    $(".overlay").removeClass("active");
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    $("#menu").removeClass("menu__active");
    $("#nav_toggle").removeClass("active");
    $(".overlay").removeClass("active");
  }
});

/* search btn */
$(".searchBtn").click(function () {
  $(".icon-search").toggleClass("searchbtnActive");
  $("form").toggleClass("active");
});

/* SLIDER */
var swiper = new Swiper(".mySwiper", {
  speed: 10000,
  spaceBetween: 20,
  autoplay: {
    delay: 100,
  },
  loop: true,
  breakpoints: {
    450: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

/* top top */

let mybutton = document.querySelector("#myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
mybutton.addEventListener("click", topFunction);

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/*selext to ona est  */

document.querySelectorAll(".select-wrap").forEach(function (wrap) {
  let select = wrap.querySelector(".custom-select");
  let classes = select.getAttribute("class"),
    id = select.getAttribute("id"),
    name = select.getAttribute("name");
  let template = '<div class="' + classes + '">';
  template +=
    '<span class="custom-select-trigger">' +
    select.getAttribute("placeholder") +
    "</span>";
  template += '<div class="custom-options">';
  select.querySelectorAll("option").forEach(function (option) {
    template +=
      '<span class="custom-option' +
      '"data-value="' +
      option.getAttribute("value") +
      '">' +
      option.innerText +
      "</span>";
  });
  template += "</div></div>";
  let select_wrapper = document.createElement("div");
  select.style.display = "none";
  select_wrapper.innerHTML = `<div class="custom-select-wrapper">${template}</div>`;
  wrap.appendChild(select_wrapper);
});

document
  .querySelector(".custom-select-trigger")
  .addEventListener("click", function () {
    document
      .querySelector(".custom-select-trigger")
      .closest(".custom-select")
      .classList.toggle("opened");
  });
document.querySelectorAll(".custom-option").forEach((option) => {
  option.addEventListener("click", function () {
    option.closest(".select-wrap").querySelector("select").value =
      option.getAttribute("data-value");
    option.closest(".custom-select").classList.remove("opened");
    option
      .closest(".custom-select")
      .querySelector(".custom-select-trigger").innerText = option.innerText;
  });
});
