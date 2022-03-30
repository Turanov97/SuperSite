$(".menu-burger, .menu-items").on("click", function () {
  $(".menu-bg, .menu-items, .menu-burger").toggleClass("fs");
  $(".menu-burger").text() == "☰"
    ? $(".menu-burger").text("✕")
    : $(".menu-burger").text("☰");
});



$(".searchBtn").click(function () {        
   $(".icon-search").toggleClass("searchbtnActive");
   $("form").toggleClass("active");        
 });