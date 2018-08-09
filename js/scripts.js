$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    var a = parseInt($("#side1").val());
    var b = parseInt($("#side2").val());
    var c = parseInt($("#side3").val());
    var triangleType;

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert("Hey! Put in numbers only!");
    return;
  }


  if (a === b && a === c) {
    var triangleType = "equilateral";
  } else if ((a + b <= c) || (a + c <= b) || (b + c <= a)) {
    var triangleType = "not a triangle";
  } else if ((a === b) || (b === c) || (c === a)) {
    var triangleType = "isosceles";
  } else if ((a != b) && (b != c) && (c != a)) {
    var triangleType = "scalene";
  } else {
    alert("please enter a value");
  }



  $("#finalized").text(triangleType);
  $("h2").show();

    event.preventDefault();
  });
});
