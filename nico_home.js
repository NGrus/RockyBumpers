//code for website function overall
mybutton = document.getElementById("myBtn");
window.onscroll = function () { scrollFunction() };

function topFunction() {
  document.body.scrollTop = 1;
  document.documentElement.scrollTop = 1;
}
$(function () {
  var x = 0;
  setInterval(function () {
    x -= 1;
    $('body').css('background-position', x + 'px 0');
  }, 50);
})

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
//end

//Caro Form JS start//
var caroName = document.querySelector("#CarolinaName")
var caroMail = document.querySelector("#CarolinaMail")
var caroSubj = document.querySelector("#CarolinaSubject")
var caroMsg = document.querySelector("#CarolinaMessage")

function CaroValidateInput() {
  if (caroName.value == "") {
    alert("Bitte geben Sie Ihren Namen ein.");
  }
  if (caroMail.value == "") {
    alert("Bitte geben Sie eine gültige E-Mail Adresse ein.");
  }

  if (caroSubj.value == "") {
    alert("Bitte geben Sie einen Betreff ein.");
  }

  if (caroMsg.value == "") {
    alert("Bitte fügen Sie eine Nachricht ein");
  }
}
//Caro Form JS end//

//Gianni JS Start
var GianniAddress = document.querySelector("#gianni-anrede")
var GianniFname = document.querySelector("#gianni-fname")
var GianniStreet = document.querySelector("#gianni-strnum")
var GianniEmail = document.querySelector("#gianni-email")
var GianniDob = document.querySelector("#gianni-birthdate")
var GianniLname = document.querySelector("#gianni-lname")
var GianniZip = document.querySelector("#gianni-zip")
var GianniMobile = document.querySelector("#gianni-mobile")

function GianniValidateInput() {
  if (GianniAddress.value == "") {
    alert("please input an email")
  }
  if (GianniFname.value == "") {
    alert("please input a first name")
  }
  if (GianniStreet.value == "") {
    alert("please input a street")
  }
  if (GianniEmail.value == "") {
    alert("please input an email")
  }
  if (GianniDob.value == "") {
    alert("please input a date of birth")
  }
  if (GianniLname.value == "") {
    alert("please input a last name")
  }
  if (GianniZiü.value == "") {
    alert("please input a zip code")
  }
  if (GianniMobile.value == "") {
    alert("please input a mobile number")
  }
}
//end

//Dina JS Start
var DinaEmail = document.querySelector("#DinaEmail")
var DinaName = document.querySelector("#DinaName")

function DinaValidateInput() {
  if (DinaEmail.value == "") {
    alert("please input an email")
  }
  if (DinaName.value == "") {
    alert("please input a name")
  }
}
//end

//OliverJS Start
var OliverName = document.querySelector("#OliverName")
var OliverEmail = document.querySelector("#OliverEmail")
var OliverComment = document.querySelector("#OliverComment")

function OliverValidateInput() {
  if (OliverName.value == "") {
    alert("please input a name")
  }
  if (OliverEmail.value == "") {
    alert("please input an Email")
  }
  if (OliverComment.value == "")  {
    alert("please input a comment")
  } 
}
//end

//Nico JS start

var NicoName = document.querySelector("#NicoName")
var NicoEmail = document.querySelector("#NicoEmai1")

function NicoValidateInput() {
  if (NicoEmail.value == "") {
    alert("please input an Email")
  }
  if (NicoName.value == "") {
    alert("please input a name")
  }
  
}