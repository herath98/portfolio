// htmlcss progress circular bar 
let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
  htmlEndValue = 90,
  htmlspeed = 30;

let progresshtml = setInterval(() => {
  htmlStartValue++;

  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${
    htmlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (htmlStartValue == htmlEndValue) {
    clearInterval(progresshtml);
  }
}, htmlspeed);


let cssProgress = document.querySelector(".css"),
  cssValue = document.querySelector(".css-progress");

let cssStartValue = 0,
  cssEndValue = 80,
  cssspeed = 30;

let progresscss = setInterval(() => {
  cssStartValue++;

  cssValue.textContent = `${cssStartValue}%`;
  cssProgress.style.background = `conic-gradient(#39fc1f ${
    cssStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (cssStartValue == cssEndValue) {
    clearInterval(progresscss);
  }
}, cssspeed);

//react
let rProgress = document.querySelector(".r"),
  rValue = document.querySelector(".r-progress");

let rStartValue = 0,
  rEndValue = 85,
 rspeed = 30;

let progressr = setInterval(() => {
  rStartValue++;

 rValue.textContent = `${rStartValue}%`;
  rProgress.style.background = `conic-gradient(#999684 ${
    rStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (rStartValue == rEndValue) {
    clearInterval(progressr);
  }
}, rspeed);

//mysql
let mysqlProgress = document.querySelector(".mysql"),
mysqlValue = document.querySelector(".mysql-progress");

let mysqlStartValue = 0,
mysqlEndValue = 80,
mysqlspeed = 30;

let progressmysql = setInterval(() => {
  mysqlStartValue++;

  mysqlValue.textContent = `${mysqlStartValue}%`;
  mysqlProgress.style.background = `conic-gradient(#1ffcc5 ${
    mysqlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (mysqlStartValue == mysqlEndValue) {
    clearInterval(progressmysql);
  }
}, mysqlspeed);

//django
let djangoProgress = document.querySelector(".django"),
djangoValue = document.querySelector(".django-progress");

let djangoStartValue = 0,
djangoEndValue = 75,
djangospeed = 30;

let progressdjango = setInterval(() => {
  djangoStartValue++;

  djangoValue.textContent = `${djangoStartValue}%`;
  djangoProgress.style.background = `conic-gradient(#ea1ffc ${
    djangoStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (djangoStartValue == djangoEndValue) {
    clearInterval(progressdjango);
  }
}, djangospeed);

//postgresql
let posProgress = document.querySelector(".pos"),
posValue = document.querySelector(".pos-progress");

let posStartValue = 0,
posEndValue = 75,
posspeed = 30;

let progresspos = setInterval(() => {
  posStartValue++;

  posValue.textContent = `${posStartValue}%`;
 posProgress.style.background = `conic-gradient(#2802ff ${
    posStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (posStartValue == posEndValue) {
    clearInterval(progresspos);
  }
}, posspeed);

// javasript progress circular bar 
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 80,
  jsspeed = 30;

let progressjs = setInterval(() => {
  javascriptStartValue++;

  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${
    javascriptStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (javascriptStartValue == javascriptEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);

// php progress circular bar 
let phpProgress = document.querySelector(".php"),
  phpValue = document.querySelector(".php-progress");

let phpStartValue = 0,
  phpEndValue = 90,
  phpspeed = 30;

let progressphp = setInterval(() => {
  phpStartValue++;

  phpValue.textContent = `${phpStartValue}%`;
  phpProgress.style.background = `conic-gradient(#20c997 ${
    phpStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (phpStartValue == phpEndValue) {
    clearInterval(progressphp);
  }
}, phpspeed);



// reactjs progress circular bar 
let reactProgress = document.querySelector(".reactjs"),
  reactValue = document.querySelector(".reactjs-progress");

let reactStartValue = 0,
  reactEndValue = 75,
  rjsspeed = 30;

let progressreact = setInterval(() => {
  reactStartValue++;

  reactValue.textContent = `${reactStartValue}%`;
  reactProgress.style.background = `conic-gradient(#3f396d ${
    reactStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (reactStartValue == reactEndValue) {
    clearInterval(progressreact);
  }
}, rjsspeed);


// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});


// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

function submitForm() {
  // You can add custom JavaScript logic here if needed
  alert('Form submitted!');
}


//jjbhjg

 // Your JavaScript code goes here
 var displayElement = document.getElementById("displayText");
 var wordsToDisplay = ["Full-Stack Developerr", "Full-Stack Developerr"];
 var currentWordIndex = 0;
 var currentIndex = 0;
 var isCursorVisible = true;

 function autoPlayCharacters() {
   if (currentWordIndex < wordsToDisplay.length) {
     var currentWord = wordsToDisplay[currentWordIndex];

     if (currentIndex < currentWord.length) {
       displayElement.innerText = currentWord.substring(0, currentIndex);
       if (isCursorVisible) {
         displayElement.innerText += "|";
       }
       isCursorVisible = !isCursorVisible;
       currentIndex++;
       setTimeout(autoPlayCharacters, 200); // Set the delay between characters (adjust as needed)
     } else {
       // Delay before moving to the next word
       setTimeout(function() {
         eraseWord();
       }, 1000);
     }
   }
 }

 function eraseWord() {
   var currentWord = wordsToDisplay[currentWordIndex];
   if (currentIndex > 0) {
     // Erase one character
     displayElement.innerText = currentWord.substring(0, currentIndex - 1);
     currentIndex--;
     setTimeout(eraseWord, 100); // Set the delay between erasing characters (adjust as needed)
   } else {
     // Move to the next word or cycle back to the first word
     currentWordIndex = (currentWordIndex + 1) % wordsToDisplay.length;
     currentIndex = 0;
     setTimeout(autoPlayCharacters, 1000); // Set a delay before starting the next word (adjust as needed)
   }
 }

 // Call the function to start the auto play
 autoPlayCharacters();