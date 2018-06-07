//back end
var names = ["hisato", "john", "anne", "yuki", "paul", "peter"];

var convertedNumber = function(inputtedNumber) {
  var arr = []

  if (inputtedNumber >= 4000 || inputtedNumber < 1 || isNaN(inputtedNumber)) {
    return "your number is INVALID";
} else {
    for (var i = inputtedNumber; i > 0; i--) {
      if(i>=10){
        arr.push("X");
        i -= 9;
      }else if (i === 9) {
          arr.push("IX");
          i -= 8;
      }else if(i >= 5){
        arr.push("V");
        i -= 4;
      } else if (i === 4) {
        arr.push("IV");
        i -= 3;
      } else {
        arr.push("I")
      }
    }




  }
// else if (inputtedNumber === 4){
//     return "IV";
//   }
//   if (inputtedNumber === 5){
//     return "V";
//   }
//   if (inputtedNumber === 9 ){
//     return "IX";
//   }
//   if (inputtedNumber === 10){
//     return "X";
//   }
//   if (inputtedNumber === 40){
//     return "XL";
//   }
//   if (inputtedNumber === 50){
//     return "L";
//   }
//   if (inputtedNumber === 90){
//     return "XC";
//   }
//   if (inputtedNumber === 100){
//     return "C";
//   }
//   if (inputtedNumber === 400){
//     return "CD";
//   }
//   if (inputtedNumber === 500){
//     return "D";
//   }
//   if (inputtedNumber === 900){
//     return "CM";
//   }
//   if (inputtedNumber === 1000){
//     return "M";
//   }
// else {
//     return "something else"
//     };

    return arr.join("");
  };
  //



    // var romanUnits = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IV", "V", "IV","I"];
    // var realNumbers = ["1000", "900", "500", "400", "100", "90", "50", "40", "10", "9", "5", "4", "1"];
    //
    // var arr= [];
    //   for ( var i = 0; i<=realNumbers.length; i+=1 ) {
    //     while(realNumbers[i]<=inputtedNumber){
    //       arr+=romanUnits[i];
    //       inputtedNumber-=realNumbers[i];
    //     }
    //   }
    //   return arr
  // }








  // user interface logic
  $(document).ready(function() {

    for (var i = 0; i < names.length; i++) {
      $("select#names").append("<option> "+names[i]+" </option>");
    }

    $("form#formOne").submit(function(event) {
      event.preventDefault();
      var inputtedNumber = parseInt($("input#inputtedNumber").val());
      var output = convertedNumber(inputtedNumber);
      $("#result").text(output);
    });
  });
