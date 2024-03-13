$(document).ready(function() {
  console.log("Document is ready.");

  $("#bla").click(function (event) {
    event.preventDefault(); // Prevent the default action of the click event
    console.log("Clicked on #bla.");
    $(".sidebar").css("display", "none");
  });

  $("#bla1").click(function (event) {
    event.preventDefault(); // Prevent the default action of the click event
    console.log("Clicked on #bla1.");
    $(".sidebar").css("display", "flex");
  });

 $('.scrollBox').click(function(event) {
    event.preventDefault(); // Prevent default link behavior
    var target = $(this).attr('href'); // Get the href attribute value of the clicked link
    var offsetTop = $(target).offset().top; // Get the top position of the target div
    $('html, body').animate({
      scrollTop: offsetTop // Scroll smoothly to the target div
    }, 100); // Adjust the duration as needed (in milliseconds)

    $(".sidebar").css("display", "none");
  });
});