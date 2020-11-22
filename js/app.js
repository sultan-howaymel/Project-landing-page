 
// this is function for scrollInto View Method 


function myFunction1() {
  var elmnt = document.getElementById("section1");
  elmnt.scrollIntoView();
}
 function myFunction2() {
  var elmnt = document.getElementById("section2");
  elmnt.scrollIntoView();
}

function myFunction3() {
  var elmnt = document.getElementById("section3");
  elmnt.scrollIntoView();
}

function myFunction4() {
  var elmnt = document.getElementById("section4");
  elmnt.scrollIntoView();
}

// this is function for getBoundingClientRect() Method 

function myFunction5() {
  var s = document.getElementById("section");
  var rect = s.getBoundingClientRect();
  x = rect.top;
  
    if (x = 41.84375) {
        alert ("Left: " + x + " , Height: " + h);

    }
    else
         alert ("Left: " + x + " , Height: " + h);
};
myFunction5();