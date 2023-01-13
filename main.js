function maxNumber(a, b) {  ////Task 1
    if (a > b) {
        return a
    } else if (a < b) {
        return b
    } else  (a == b)
        return "a=b"
    }

let numberStutus = prompt('Enter the number','0'); ////Task 2
let showPage = prompt('Enter the number','0');
alert(maxNumber(numberStutus, showPage));;


function revers(number){
    if (number < 0) {
         return -number
    }   if (number > 0) {
        return -number
    }
}
let resalt = prompt("enter the number");
alert(revers(resalt));


function three(number, count) { /////Task 3
    if (number + 3*(count)) {
        return number + 3(count)
    }
}
let firstNumber = prompt('Enter the number', 0);
let secondNumber = prompt('Enter any number', 0);
alert (three(+number, +count(firstNumber,secondNumber)))

function KmToM(km) { ////Task 4
  return km * 1000;
}

function KmToCm(km) {
  return km * 100000;
}

function getMetric(metric, km, m, cm) {
  if (metric === "m") {
    m(KmToM(km));
  } else if (metric === "cm") {
    cm(KmToCm(km));
  }
}

const km = prompt("Enter a value in kilometers:");

alert(
  getMetric(
    prompt("Convert to m or cm?"),
    km,
    function(m) {
      alert(km + " kilometers is " + m + " meters.");
    },
    function(cm) {
      alert(km + " kilometers is " + cm + " cantimeters.");
    }
  )
);



