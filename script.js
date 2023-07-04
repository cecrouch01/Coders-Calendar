// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//look at day 1 1:42 for click events
// console.log($("#hour-9"))
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //





  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  

  //This displays the date at the top of the page
  var today = dayjs();
  $("#currentDay").text(today.format("MMMM D, YYYY"))

  //This dynamically changes the class of the div to past, present, or future
  var currentHour = today.hour()
    $(".time-block").each(function() {
    var hourBlock = $(this).attr("id");  
    if(currentHour == hourBlock) {
      $(this).addClass("present")
    } else if(currentHour < hourBlock) {
      $(this).addClass("future")
    } else if(currentHour > hourBlock) {
      $(this).addClass("past")
    }
  })
});
