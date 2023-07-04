$(function () {
  //This saves the inputed text of the text box as a value of its key div.
  var saveBtn = $(".saveBtn");
  saveBtn.on("click", function() {
    var savedDiv = $(this).parent().attr("id");
    var divText = $(this).parent().children("textarea").val();
    localStorage.setItem(savedDiv, divText)
  })

  //This saves the value inputed to each textbox. 
  $(".description").each(function() {
    var dynamDiv = $(this).parent().attr("id")
    $(this).text(localStorage.getItem(dynamDiv))
  });

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
