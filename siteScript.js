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
  {
    picTitle: "Naziv usluge",
    picSourse: "./materijal/slikeProjekata1.png",
    id: 1
  },
  {
    picTitle: "Naziv usluge",
    picSourse: "./materijal/slikeProjekata2.png",
    id: 2
  },
  {
    picTitle: "Ili klijenta",
    picSourse: "./materijal/slikeProjekata3.png",
    id: 3
  },
  {
    picTitle: "Ili projekta",
    picSourse: "./materijal/slikeProjekata4.png",
    id: 4
  },
  {
    picTitle: "Ili kampanje",
    picSourse: "./materijal/slikeProjekata5.png",
    id: 5
  },
  {
    picTitle: "Vrsta proizvoda",
    picSourse: "./materijal/slikeProjekata6.png",
    id: 6
  },
  {
    picTitle: "Grad ili mesto",
    picSourse: "./materijal/slikeProjekata7.png",
    id: 7
  }
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
  var picT1 = document.getElementById("firstPicTitle");
  var picT2 = document.getElementById("secondPicTitle");
  var picT3 = document.getElementById("thirdPicTitle");
  var picT4 = document.getElementById("fourthPicTitle");

  firstPic.style.backgroundImage =
    "url(" + slidePictures[counter2].picSourse + ")";
  firstPic.setAttribute("class", slidePictures[counter2].id);
  secondPic.style.backgroundImage =
    "url(" + slidePictures[findCountRight(counter2, 1)].picSourse + ")";
  secondPic.setAttribute(
    "class",
    slidePictures[findCountRight(counter2, 1)].id
  );
  thirdPic.style.backgroundImage =
    "url(" + slidePictures[findCountRight(counter2, 2)].picSourse + ")";
  secondPic.setAttribute(
    "class",
    slidePictures[findCountRight(counter2, 2)].id
  );
  fourthPic.style.backgroundImage =
    "url(" + slidePictures[findCountRight(counter2, 3)].picSourse + ")";
  fourthPic.setAttribute(
    "class",
    slidePictures[findCountRight(counter2, 3)].id
  );
  lastPic.style.backgroundImage =
    "linear-gradient( to right, transparent, white), url(" +
    slidePictures[findCountRight(counter2, 4)].picSourse +
    ")";
  lastPic.setAttribute("class", slidePictures[findCountRight(counter2, 4)].id);
  picT1.innerHTML = slidePictures[counter2].picTitle;
  picT2.innerHTML = slidePictures[findCountRight(counter2, 1)].picTitle;
  picT3.innerHTML = slidePictures[findCountRight(counter2, 2)].picTitle;
  picT4.innerHTML = slidePictures[findCountRight(counter2, 3)].picTitle;
  counter2++;
}
goRight();
function findCountRight(xn, yn) {
  var z = xn + yn;
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
  firstPic.style.backgroundImage =
    "url(" + slidePictures[counter2].picSourse + ")";
  secondPic.style.backgroundImage =
    "url(" + slidePictures[findCountRight(counter2, 1)].picSourse + ")";
  thirdPic.style.backgroundImage =
    "url(" + slidePictures[findCountRight(counter2, 2)].picSourse + ")";
  fourthPic.style.backgroundImage =
    "url(" + slidePictures[findCountRight(counter2, 3)].picSourse + ")";
  lastPic.style.backgroundImage =
    "linear-gradient( to right, transparent, white), url(" +
    slidePictures[findCountRight(counter2, 4)].picSourse +
    ")";
  counter2--;
}
var myPics = setInterval(goRight, 5000);

document.getElementById("firstPicDiv").addEventListener("click", function() {
  bigPictureShow(this.style.backgroundImage);
});
document.getElementById("secondPicDiv").addEventListener("click", function() {
  bigPictureShow(this.style.backgroundImage);
});
document.getElementById("thirdPicDiv").addEventListener("click", function() {
  bigPictureShow(this.style.backgroundImage);
});
document.getElementById("fourthPicDiv").addEventListener("click", function() {
  bigPictureShow(this.style.backgroundImage);
});
document.getElementById("lastPicDiv").addEventListener("click", function() {
  bigPictureShow(this.style.backgroundImage);
});
document.getElementById("lastPicDiv").addEventListener("click", goRight);

function bigPictureShow(picUrl) {
  var bigPicture = document.getElementById("bigPic");
  bigPicture.style.display = "block";
  var picWrap = document.getElementById("bigPicWrap");
  picWrap.style.display = "block";
  picWrap.style.backgroundImage = picUrl;
  console.log(picUrl);
}

document.getElementById("close").addEventListener("click", closeBigPic);
function closeBigPic() {
  var bigPicture = document.getElementById("bigPic");
  bigPicture.style.display = "none";
}


var leftAr = document.getElementById("slideArrowLeft");
var rightAr = document.getElementById("slideArrowRight");

leftAr.addEventListener("click", function() {
  var picWrap = document.getElementById("bigPicWrap");
  var tempUrl = picWrap.style.backgroundImage;
  findPrev(tempUrl);
});
rightAr.addEventListener("click", function() {
  var picWrap = document.getElementById("bigPicWrap");
  var tempUrl = picWrap.style.backgroundImage;
  findNext(tempUrl);
});

function findNext(tempUrl) {
  var allPics = slidePictures;
  for (var i = 0; i < allPics.length; i++) {
    var xUrl = 'url("' + allPics[i].picSourse + '")';
    var xyUrl='linear-gradient(to right, transparent, white), url("' + allPics[i].picSourse + '")'
    if (xUrl == tempUrl|| xyUrl==tempUrl) {
      var ij = i + 1;
      if (ij > allPics.length - 1) {
        ij = 0;
      }
      callNext(ij);
    }
  }
}
function findPrev(tempUrl){
   var allPics = slidePictures;
  for (var i = 0; i < allPics.length; i++) {
    var xUrl = 'url("' + allPics[i].picSourse + '")';
    var xyUrl='linear-gradient(to right, transparent, white), url("' + allPics[i].picSourse + '")'
    if (xUrl == tempUrl || xyUrl==tempUrl) {
      var ij = i - 1;
      if (ij <0 ) {
        ij = allPics.length - 1;
      }
      callNext(ij);
    }
  }
}
function callNext(ij){
var allPics = slidePictures;
var xUrl = 'url("' + allPics[ij].picSourse + '")';
bigPictureShow(xUrl);
}

(function() {
  document.getElementById("wraper").addEventListener("mousemove", parallax);
  const elem = document.querySelector("#bigWrap");
  function parallax(e) {
    let _w = window.innerWidth / 2;
    let _h = window.innerHeight / 2;
    let _mouseX = e.clientX;
    let _mouseY = e.clientY;
    let _depth1 = `${10 - (_mouseX - _w) * 0.01}% ${10 -
      (_mouseY - _h) * 0.01}%`;
    let _depth2 = `${10 - (_mouseX - _w) * 0.01}% ${10 -
      (_mouseY - _h) * 0.01}%`;
    let _depth3 = `${10 - (_mouseX - _w) * 0.03}% ${10 -
      (_mouseY - _h) * 0.03}%`;
    let x = `${_depth3}, ${_depth2}, ${_depth1}`;
    elem.style.backgroundPosition = x;
  }
})();

(function() {
  document.getElementById("wraper").addEventListener("mousemove", parallax2);
  const elem2 = document.querySelector("#smallWrap");
  function parallax2(e) {
    let _w = window.innerWidth / 2;
    let _h = window.innerHeight / 2;
    let _mouseX = e.clientX;
    let _mouseY = e.clientY;
    let _depth1 = `${50 - (_mouseX - _w) * 0.03}% ${50 -
      (_mouseY - _h) * 0.01}%`;
    let _depth2 = `${50 - (_mouseX - _w) * 0.08}% ${50 -
      (_mouseY - _h) * 0.08}%`;
    let _depth3 = `${50 - (_mouseX - _w) * 0.1}% ${50 - (_mouseY - _h) * 0.1}%`;
    var y = `${_depth3}, ${_depth2}, ${_depth1}`;
    elem2.style.backgroundPosition = y;
  }
})();
