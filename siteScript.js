var counter3 = 0;
var counter4 = 0;
var countDatas = [
  { firstLine: "Više od ", numData: 300, lastLine: "završenih projekata" },
  { firstLine: "Preko", numData: 150, lastLine: "zadovoljnih klijenata" },
  { firstLine: "Urađeno više od", numData: 100, lastLine: "kampanja" },
  { firstLine: "Preko", numData: 15, lastLine: "godina postojanja" }
];

var myCountUp = setInterval(setCountUp, 10);
function setCountUp() {
  if (counter3 > countDatas.length - 1) {
    counter3 = 0;
  }
  var firstLineCount = document.getElementById("countFirstLine");
  var countNumbs = document.getElementById("numCount");
  var lastLineCount = document.getElementById("countLastLine");
  firstLineCount.innerHTML = countDatas[counter3].firstLine;
  lastLineCount.innerHTML = countDatas[counter3].lastLine;
  countNumbs.innerHTML = counter4;
  counter4++;
  if (counter4 > countDatas[counter3].numData - 1) {
    if (counter4 > countDatas[counter3].numData + 1000) {
      counter3++;
      counter4 = 0;
    } else {
      countNumbs.innerHTML = countDatas[counter3].numData;
    }
  }
}

var counter1 = 0;
var quotes = [
  {
    oneQuote:
      "Employees of the Agency Headline have excellent client approach, proactive thinking and find the best models of communication, respecting deadlines and never losing patience.",
    oneQuoteAutor:
      "LJUDMILA JEVTIĆ, SENIOR ADVISOR FOR PR AND MARKETING OTP BANK SERBIA"
  },
  {
    oneQuote:
      "It is a pleasure to work with people who are dedicated to their work and who, due to personal traits, make your work responsibilities a pleasure.",
    oneQuoteAutor:
      "ANĐELINA KUZMANOVIĆ, HEAD OF MARKETING KNAUF INSULATION SOUTHERN BALKANS"
  },
  {
    oneQuote:
      "After working with number of agencies, D-Kit bought us with their directness, creativity, and great understanding for all our demands. They are always there to help us in the right way and turn our wishes into reality.",
    oneQuoteAutor: "MONIKA MILINKOVIĆ, FARMALOGIST MARKETING"
  },
  {
    oneQuote:
      "It is a rarity in this days and also a great pleasure when you have the opportunity to work with professional, smart, hard-working people and those who know their job well.",
    oneQuoteAutor: "AIDA ĐEDOVIĆ, EDITOR, PRVA TELEVISION"
  },
  {
    oneQuote:
      "What Tesla is in science. What Messi is in football. What Madonna is in music. What Đokovic is in tennis. That is agency Headline in communication business.",
    oneQuoteAutor:
      "SLOBODAN ŠARENAC, EDITOR OF SPORT AT NATIONAL BROADCASTER RADIO TELEVISION OF SERBIA"
  },
  {
    oneQuote:
      "Committed, resourceful, helpful... and very important for us in journalism - accurate and precise in arrangements.",
    oneQuoteAutor:
      "JULIJANA SIMIĆ, EDITOR OF BELGRADE DEPARTMENT, POLITIKA DAILY"
  }
];
var myQuote = setInterval(setQuote, 5000);

function setQuote() {
  var oneQuoteText = document.getElementById("quoteText");
  var quoteAutor = document.getElementById("quoteAutor");
  if (counter1 > quotes.length - 1) {
    counter1 = 0;
  }
  oneQuoteText.innerHTML = quotes[counter1].oneQuote;
  quoteAutor.innerHTML = quotes[counter1].oneQuoteAutor;
  counter1++;
}

var slidePictures = [
  "./materijal/slikeProjekata1.png",
  "./materijal/slikeProjekata2.png",
  "./materijal/slikeProjekata3.png",
  "./materijal/slikeProjekata4.png",
  "./materijal/slikeProjekata5.png",
  "./materijal/slikeProjekata6.png",
  "./materijal/slikeProjekata7.png"
];
document.getElementById("leftArrow").addEventListener("click", goLeft);
document.getElementById("rightArrow").addEventListener("click", goRight);
var counter2 = 0;
function goRight() {
  if (counter2 > slidePictures.length - 1) {
    counter2 = 0;
  }
  var firstPic = document.getElementById("firstPicDiv");
  var secondPic = document.getElementById("secondPicDiv");
  var thirdPic = document.getElementById("thirdPicDiv");
  var fourthPic = document.getElementById("fourthPicDiv");
  var lastPic = document.getElementById("lastPicDiv");
  firstPic.style.backgroundImage = "url(" + slidePictures[counter2] + ")";
  secondPic.style.backgroundImage =
    "url(" + slidePictures[findCountRight(counter2, 1)] + ")";
  thirdPic.style.backgroundImage =
    "url(" + slidePictures[findCountRight(counter2, 2)] + ")";
  fourthPic.style.backgroundImage =
    "url(" + slidePictures[findCountRight(counter2, 3)] + ")";
  lastPic.style.backgroundImage =
    "linear-gradient( to right, transparent, white), url(" +
    slidePictures[findCountRight(counter2, 4)] +
    ")";
  counter2++;
}
function findCountRight(x, y) {
  var z = x + y;
  if (z > slidePictures.length - 1) {
    z = z - 7;
  }
  return z;
}
function goLeft() {
  if (counter2 < 0) {
    counter2 = slidePictures.length - 1;
  }
  var firstPic = document.getElementById("firstPicDiv");
  var secondPic = document.getElementById("secondPicDiv");
  var thirdPic = document.getElementById("thirdPicDiv");
  var fourthPic = document.getElementById("fourthPicDiv");
  var lastPic = document.getElementById("lastPicDiv");
  firstPic.style.backgroundImage = "url(" + slidePictures[counter2] + ")";
  secondPic.style.backgroundImage =
    "url(" + slidePictures[findCountRight(counter2, 1)] + ")";
  thirdPic.style.backgroundImage =
    "url(" + slidePictures[findCountRight(counter2, 2)] + ")";
  fourthPic.style.backgroundImage =
    "url(" + slidePictures[findCountRight(counter2, 3)] + ")";
  lastPic.style.backgroundImage =
    "linear-gradient( to right, transparent, white), url(" +
    slidePictures[findCountRight(counter2, 4)] +
    ")";
  counter2--;
}
var myPics = setInterval(goRight, 5000);
document.getElementById("bigPicWrap").style.backgroundImage="./materijal/slikeProjekata1.png";

document
  .getElementById("firstPicDiv")
  .addEventListener("click", bigPictureShow);
document
  .getElementById("secondPicDiv")
  .addEventListener("click", bigPictureShow);
document
  .getElementById("thirdPicDiv")
  .addEventListener("click", bigPictureShow);
document
  .getElementById("fourthPicDiv")
  .addEventListener("click", bigPictureShow);
document.getElementById("lastPicDiv").addEventListener("click", bigPictureShow);
document.getElementById("lastPicDiv").addEventListener("click", goRight);
function bigPictureShow() {
  var x = this;
  if (this == undefined) {
    x = document.getElementById("firstPicDiv");
  }
  var bigPicture = document.getElementById("bigPic");
  bigPicture.style.display = "block"; 
  var picWrap = document.getElementById("bigPicWrap");
  picWrap.style.display = "block";
  picWrap.style.backgroundImage = x.style.backgroundImage;
}
document.getElementById("close").addEventListener("click", closeBigPic);
function closeBigPic(){
  var bigPicture = document.getElementById("bigPic");
  bigPicture.style.display = "none";
}