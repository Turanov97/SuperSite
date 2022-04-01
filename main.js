if (history.scrollRestoration) {
   history.scrollRestoration = "manual";
 } else {
   window.onbeforeunload = function () {
     window.scrollTo(0, 0);
   };
 }


/* menu btn */
$(".menu-burger, .menu-items").on("click", function () {
  $(".menu-bg, .menu-items, .menu-burger").toggleClass("fs");
  $(".menu-burger").text() == "☰"
    ? $(".menu-burger").text("✕")
    : $(".menu-burger").text("☰");
});
/* search btn */
$(".searchBtn").click(function () {
  $(".icon-search").toggleClass("searchbtnActive");
  $("form").toggleClass("active");
});
/* select======== */
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

/* SLIDER */
var swiper = new Swiper(".mySwiper", {
  speed: 6000,
  spaceBetween: 0,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  breakpoints: {
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

let mybutton = document.querySelector("#myBtn")

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
mybutton.addEventListener('click',topFunction )

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




