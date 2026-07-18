(function(doc, win) {
  let screenWidth = 0, size = 'M', root = doc.documentElement;
  if (window.screen && screen.width) {
      screenWidth = screen.width;
      if (screenWidth > 1920) {
          size = 'L';
      } else if (screenWidth < 1000) {
          size = 'Sm';
      }
  }
  root.className = size;
  win.SIZE = size;
})(document, window);




let elementsContent = document.querySelectorAll(".chemicalc > div");
let elements = document.querySelectorAll(".chemicalc > div > div");
for (var i = 0; i < elements.length; i++) {
  if(elements[i].offsetWidth == 0){
    elementsContent[i].style.display = "none";
  }
}


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
    mainPhoto2[(i+4)%5].style.boxShadow = "0 0 0 #333";
    mainPhoto2[i].style.transform = "translate(-10vw, 1vw) scale(1, 1)";
    mainPhoto2[i].style.opacity = "1";
    mainPhoto2[i].style.zIndex = "1";
    mainPhoto2[i].style.boxShadow = ".5vw .5vw 1vw #333";
    mainPhoto2[(i+6)%5].style.transform = "translate(0, 0) scale(1.1, 1.1)";
    mainPhoto2[(i+6)%5].style.opacity = "1";
    mainPhoto2[(i+6)%5].style.zIndex = "2";
    mainPhoto2[(i+6)%5].style.boxShadow = "1vw 1vw 2vw #333";
    mainPhoto2[(i+7)%5].style.transform = "translate(10vw, 1vw) scale(1, 1)";
    mainPhoto2[(i+7)%5].style.opacity = "1";
    mainPhoto2[(i+7)%5].style.zIndex = "1";
    mainPhoto2[(i+7)%5].style.boxShadow = ".5vw .5vw 1vw #333";
    mainPhoto2[(i+3)%5].style.transform = "translate(20vw, 1.8vw) scale(0.9, 0.9)";
    mainPhoto2[(i+3)%5].style.opacity = "0.5";
    mainPhoto2[(i+3)%5].style.zIndex = "0";
    mainPhoto2[(i+3)%5].style.boxShadow = "0 0 0 #333";
  })
}



let mainAdvantage = document.querySelectorAll("#main-advantage > div");

for (let i = 0; i < mainAdvantage.length; i++) {
  mainAdvantage[i].addEventListener("click", () => {
    floatcontact.className = (floatcontact.className == "floatcontact1")?"floatcontact2":"floatcontact1";
    asideSubject.value = tagDel(mainTitle);
  });
  
}

let tagDiv = document.querySelectorAll("#tag-div > div");

for (let i = 0; i < tagDiv.length; i++) {
  tagDiv[i].addEventListener("click", () => {
    floatcontact.className = (floatcontact.className == "floatcontact1")?"floatcontact2":"floatcontact1";
    asideSubject.value = tagDel(mainTitle);
  });
  
}




let se = document.querySelectorAll(".s-e-1, .s-e-2");
let floatcontact = document.querySelector(".floatcontact1");



//DOM元素
let chemical = document.querySelectorAll(".chemical");

//布局函数
function rank() {
  let elementWidth = [];
  let elementWidthReverse = [];
  let elementWidthMax = [];
  for (let i = 0; i < chemical.length; i++) {
    let element = chemical[i].querySelectorAll(".element");
    for (let j = 0; j < element.length; j++) {
      element[j].querySelector(".chemeicalp").style.color = "#fff";
    }
  }
  for (let i = 0; i < chemical.length; i++) {
    elementWidth.push([]);
    let element = chemical[i].querySelectorAll(".element");
    for (let j = 0; j < element.length; j++) {
      elementWidth[i].push(element[j].offsetWidth);
      if (element[j].offsetWidth == 0) {
        element[j].querySelector(".chemeicalp").style.color = "transparent";
      }
    }
  }
  for (let i = 0; i < elementWidth.length; i++) {
    for (let j = 0; j < elementWidth[i].length; j++) {
      if (i == 0) {
        elementWidthReverse.push([]);
      }
      elementWidthReverse[j].push(elementWidth[i][j]);
    }
  }
  for (let i = 0; i < elementWidthReverse.length; i++) {
    elementWidthMax.push(maximum(elementWidthReverse[i]));
  }
  for (let i = 0; i < chemical.length; i++) {
    let bar = chemical[i].querySelectorAll(".ele-frame");
    for (let j = 0; j < bar.length; j++) {
      if (elementWidthMax[j] == 0) {
        bar[j].style.display = "none";
      }else{
        bar[j].style.display = "block";
      }
    }
  }
}
rank();


//最大化函数
function maximum(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }   
  }
  return max;
}

let screenHeight = document.querySelector("#main-page").offsetHeight;
let contactbutton2 = document.querySelector("#contactbutton-2");
document.addEventListener("mousewheel", function(){
  if (html.scrollTop >= screenHeight) {
    contactbutton2.style.opacity = "1";
    contactbutton2.style.pointerEvents = "inherit";
  }else{
    contactbutton2.style.opacity = "0";
    contactbutton2.style.pointerEvents = "none";    
  }
});



//自动填充

function tagDel(x) {
  y = x.innerHTML.replace(/from China/g, '').replace(/<[^<]+>/g, ' ').replace(/\s+/g, ' ').replace(/(\r\n|\n|\r)/gm, "").trim();
  return y;
}

let bigContactBtn = document.querySelector("#contactbutton");
let bigContactBtn2 = document.querySelector("#contactbutton-2");
let smallContactBtn = document.querySelectorAll("#main-advantage > div");
let mainTitle = document.querySelector("#main-text > h1");
let asideSubject = document.querySelector("#aside-subject");

bigContactBtn.addEventListener("click", () => {
  asideSubject.value = tagDel(mainTitle);
});
bigContactBtn2.addEventListener("click", () => {
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



let qFrame = document.querySelectorAll(".q-frame");
let faqFrame = document.querySelectorAll(".faq-frame");

for (let i = 0; i < qFrame.length; i++) {
  qFrame[i].addEventListener("click", () => {
    faqFrame[i].className = (faqFrame[i].className == "faq-frame faq-v")?"faq-frame faq-u":"faq-frame faq-v";
  });
}

let introP = document.querySelector("#intro-page > p");
let fold = document.querySelector("#fold");
fold.addEventListener("click", () => {
  introP.className = "";
  fold.style.opacity = 0;
  fold.style.display = "none";
});