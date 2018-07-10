//alert("hello world");
$(document).ready(function () {
 $("form#favourite").submit(function (event) {
   event.preventDefault()
   var userInput= $("input#favColor").val()
  console.log(userInput);
  $("p.display").text(userInput)
 })
})
