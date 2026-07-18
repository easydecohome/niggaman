

let floatLogo = document.querySelector("#floatlogo");


let top6 = document.querySelector("#description-catalogue-3").offsetTop;
document.addEventListener("scroll", function(){
  let scrTop = html.scrollTop;
  if(scrTop >= top6){
    if (window.SIZE == 'Sm'){
      floatButton.style.width = "10.5vw";
      floatLogo.style.transform = "translate(0, 0)";
    }else{
      floatButton.style.width = "3.5vw";
      floatLogo.style.transform = "translate(0, 0)";
    }
  }
});


let fold = document.querySelector("#fold");
let fold2 = document.querySelector("#fold2");
let technicalSheet = document.querySelector("#technical-sheet-1");
let faqFold = document.querySelector("#FAQ-fold");
let faqFold1 = document.querySelectorAll(".FAQ-fold-1");

fold.addEventListener("click", function(){
  technicalSheet.className = "fold2";
  fold.style.opacity = "0";
  fold.style.pointerEvents = "none";
});
fold2.addEventListener("click", function(){
  technicalSheet.className = "fold2";
  fold2.style.opacity = "0";
  fold2.style.pointerEvents = "none";
});
faqFold.addEventListener("click", function(){
  for (let i = 0; i < faqFold1.length; i++) {
    faqFold1[i].className = "FAQ-fold-2";
  }
  faqFold.style.opacity = "0";
  faqFold.style.pointerEvents = "none";
});



let mainPhoto1 = document.querySelectorAll("#main-photo > img");
let mainPhoto2 = document.querySelectorAll("#main-photo-2 > img");


for (let i = 0; i < mainPhoto1.length; i++) {
  mainPhoto1[i].addEventListener("click", function(){
    mainPhoto1[(i+3)%5].style.transform = "translate(-45vw, 1.8vw) scale(0.6, 0.6)";
    mainPhoto1[(i+3)%5].style.opacity = "0.5";
    mainPhoto1[(i+3)%5].style.zIndex = "0";
    mainPhoto1[(i+3)%5].style.boxShadow = "0 0 0 #666";
    mainPhoto1[(i+4)%5].style.transform = "translate(-25vw, 1vw) scale(0.8, 0.8)";
    mainPhoto1[(i+4)%5].style.opacity = "1";
    mainPhoto1[(i+4)%5].style.zIndex = "1";
    mainPhoto1[(i+4)%5].style.boxShadow = ".5vw .5vw 1vw #666";
    mainPhoto1[i].style.transform = "translate(0, 0) scale(1, 1)";
    mainPhoto1[i].style.opacity = "1";
    mainPhoto1[i].style.zIndex = "2";
    mainPhoto1[i].style.boxShadow = "1vw 1vw 2vw #666";
    mainPhoto1[(i+6)%5].style.transform = "translate(25vw, 1vw) scale(0.8, 0.8)";
    mainPhoto1[(i+6)%5].style.opacity = "1";
    mainPhoto1[(i+6)%5].style.zIndex = "1";
    mainPhoto1[(i+6)%5].style.boxShadow = ".5vw .5vw 1vw #666";
    mainPhoto1[(i+7)%5].style.transform = "translate(45vw, 1.8vw) scale(0.6, 0.6)";
    mainPhoto1[(i+7)%5].style.opacity = "0.5";
    mainPhoto1[(i+7)%5].style.zIndex = "0";
    mainPhoto1[(i+7)%5].style.boxShadow = "0 0 0 #666";
  })
}
for (let i = 0; i < mainPhoto2.length; i++) {
  mainPhoto2[i].addEventListener("click", function(){
    mainPhoto2[(i+4)%5].style.transform = "translate(-20vw, 1.8vw) scale(0.9, 0.9)";
    mainPhoto2[(i+4)%5].style.opacity = "0.5";
    mainPhoto2[(i+4)%5].style.zIndex = "0";
    mainPhoto2[(i+4)%5].style.boxShadow = "0 0 0 #666";
    mainPhoto2[i].style.transform = "translate(-10vw, 1vw) scale(1, 1)";
    mainPhoto2[i].style.opacity = "1";
    mainPhoto2[i].style.zIndex = "1";
    mainPhoto2[i].style.boxShadow = ".5vw .5vw 1vw #666";
    mainPhoto2[(i+6)%5].style.transform = "translate(0, 0) scale(1.1, 1.1)";
    mainPhoto2[(i+6)%5].style.opacity = "1";
    mainPhoto2[(i+6)%5].style.zIndex = "2";
    mainPhoto2[(i+6)%5].style.boxShadow = "1vw 1vw 2vw #666";
    mainPhoto2[(i+7)%5].style.transform = "translate(10vw, 1vw) scale(1, 1)";
    mainPhoto2[(i+7)%5].style.opacity = "1";
    mainPhoto2[(i+7)%5].style.zIndex = "1";
    mainPhoto2[(i+7)%5].style.boxShadow = ".5vw .5vw 1vw #666";
    mainPhoto2[(i+3)%5].style.transform = "translate(20vw, 1.8vw) scale(0.9, 0.9)";
    mainPhoto2[(i+3)%5].style.opacity = "0.5";
    mainPhoto2[(i+3)%5].style.zIndex = "0";
    mainPhoto2[(i+3)%5].style.boxShadow = "0 0 0 #666";
  })
}

processButton = document.querySelectorAll(".process-button");
processChoose = document.querySelectorAll(".process-choose");
for (let i = 0; i < processButton.length; i++) {
  processButton[i].addEventListener("click", function(){
    for (let j = 0; j < processButton.length; j++) {
      processButton[j].style = "opacity: .5;"
      processChoose[j].style = "opacity: 0; pointer-events: none;"
    }    
    processButton[i].style = "opacity: 1;"
    processChoose[i].style = "opacity: 1; pointer-events: inherit;"
  });
}



let mainAdvantage = document.querySelectorAll("#main-advantage > div");

for (let i = 0; i < mainAdvantage.length; i++) {
  mainAdvantage[i].addEventListener("click", () => {
    floatcontact.className = (floatcontact.className == "floatcontact1")?"floatcontact2":"floatcontact1";
  });
  
}




let rightButton = document.querySelector("#rightbutton1");
let leftButton = document.querySelector("#leftbutton1");
let alloyPage = document.querySelector("#alloypage");
let se = document.querySelectorAll(".s-e-1, .s-e-2");
let floatcontact = document.querySelector(".floatcontact1");
let position = 0;
let gradeFrame = document.querySelectorAll(".gradeframe1").length;

rightButton.addEventListener("click", function(){
  if (position > -84*(gradeFrame-1)+1) {
    position -= 84;
    alloypage.style.transform = "translate(" + position + "vw, 0)";
  }
});
leftButton.addEventListener("click", function(){
  if (position < 0) {
    position += 84;
    alloypage.style.transform = "translate(" + position + "vw, 0)";
  }
});



let learnButton2 = document.querySelectorAll("#learn-button-2 > div");


function getPageTop(){  
  let pageTop = [];
  let section = document.querySelectorAll("main > section");
  for (let i = 0; i < section.length; i++) {
    pageTop.push(section[i].offsetTop);
  }
  pageTop.splice(0, 1);
  return pageTop;
}

let navTimer;
function pageScroll(btn, page, num=0) {
  btn.addEventListener("click", function(){
    let navTime = 0.02;
    navTimer = setInterval(function(){
      html.scrollTop += (getPageTop()[page] - html.scrollTop + num)*navTime;
      navTime += 0.01;
      if (html.scrollTop >= getPageTop()[page] + num - 1 & html.scrollTop <= getPageTop()[page] + num + 1) {
        clearInterval(navTimer);
      }
    }, 10);
  });
}

for (let i = 0; i < learnButton2.length; i++) {
  pageScroll(learnButton2[i], i, -10);
}

document.addEventListener("mousewheel", function(){
  clearInterval(navTimer);
});

//自动填充

function tagDel(x) {
  y = x.innerHTML.replace(/from China/g, '').replace(/<[^<]+>/g, '').replace(/\s+/g, ' ').replace(/(\r\n|\n|\r)/gm, "").trim();
  return y;
}

let bigContactBtn = document.querySelector("#contactbutton");
let smallContactBtn = document.querySelectorAll("#main-advantage > div");
let mainTitle = document.querySelector("#main-text > h1");
let asideSubject = document.querySelector("#aside-subject");

bigContactBtn.addEventListener("click", () => {
  asideSubject.value = tagDel(mainTitle);
});

if (smallContactBtn !== null) {
  for (let i = 0; i < smallContactBtn.length; i++) {
    smallContactBtn[i].addEventListener("click", () => {
      asideSubject.value = tagDel(mainTitle);
    });
  }
}

let footerSubject = document.querySelector("#footer-subject");
footerSubject.value = tagDel(mainTitle);


let rightPopular = document.querySelector("#popular-products-right");
let leftPopular = document.querySelector("#popular-products-left");
let popularProductsPart = document.querySelector("#popular-products-part");
let position2 = 6.5;

rightPopular.addEventListener("click", function(){
  if (position2 > -283.5) {
    position2 -= 29;
    popularProductsPart.style.transform = "translate(" + position2 + "vw, 0)";
  }
  leftPopular.style.pointerEvents = "inherit";
  leftPopular.style.opacity = 1;
  rightPopular.style.pointerEvents = "inherit";
  rightPopular.style.opacity = 1;
  if (position2 == -283.5) {
    rightPopular.style.pointerEvents = "none";
    rightPopular.style.opacity = 0;
  }
  if (position2 == 6.5) {
    leftPopular.style.pointerEvents = "none";
    leftPopular.style.opacity = 0;
  }
});
leftPopular.addEventListener("click", function(){
  if (position2 < 6.5) {
    position2 += 29;
    popularProductsPart.style.transform = "translate(" + position2 + "vw, 0)";
  }
  leftPopular.style.pointerEvents = "inherit";
  leftPopular.style.opacity = 1;
  rightPopular.style.pointerEvents = "inherit";
  rightPopular.style.opacity = 1;
  if (position2 == -283.5) {
    rightPopular.style.pointerEvents = "none";
    rightPopular.style.opacity = 0;
  }
  if (position2 == 6.5) {
    leftPopular.style.pointerEvents = "none";
    leftPopular.style.opacity = 0;
  }
});