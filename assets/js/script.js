$(document).ready(function() {

// function pageScroll() {
//         window.scrollBy(0,1); // horizontal and vertical scroll increments
//         scrolldelay = setTimeout('pageScroll()',10); // scrolls every 10 milliseconds
// }
// $(document).scrollTop($(document).height());

// $("body").animate({
//     scrollTop: $("body").get(0).scrollHeight
// }, 1500);


$("#sidebar-button").click(function() {//jQuery Functon Number 1//
  if ($(".sidebar-container").hasClass("sidebar-active")) {//jQuery Functon Number 2//
   $("body").removeClass("no-scroll");//jQuery Functon Number 3//
   $("#sidebar-button").removeClass("button-active");
   $(".sidebar-container").removeClass("sidebar-active");
   $(".page-wrapper").removeClass("wrapper-active");
 } else {
   $("#sidebar-button").addClass("button-active");//jQuery Functon Number 4//
   $(".sidebar-container").addClass("sidebar-active");
   $(".page-wrapper").addClass("wrapper-active");
   setTimeout(function() {
   $('body').addClass('no-scroll');
   }, 300); 
}
});

  // QUESTION 7
  //Implement the hiding of the sidebar when the user clicks on the page wrapper here:
$(".page-wrapper").click(function(){
  if ($(".sidebar-container").hasClass("sidebar-active")){
    $("body").removeClass("no-scroll");
    $("#sidebar-button").removeClass("button-active");
    $(".sidebar-container").removeClass("sidebar-active");
    $(".page-wrapper").removeClass("wrapper-active");
}
});
});