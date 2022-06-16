//(1) 스타트버튼
function startBtnCSS() {
  startBtn.locate(width / 2 - 160, (height * 6.25) / 7.5);
  startBtn.resize(350, 50);
  startBtn.stroke = "";
  startBtn.strokeWeight = 3;
  startBtn.cornerRadius = 10;
  startBtn.textFont = captionFont;
  startBtn.text = "해피 만나러가기 ▶️";
  startBtn.textColor = "#ed8090";
  startBtn.textSize = 40;
}

startBtn.onHover = () => {
  cursor("grab");
  startBtn.textColor = "#4991CA";
  startBtn.textSize = 45;
};

startBtn.onPress = () => {
  isThumbnail = false;
  isStartmessage = true;
  bgImg = blackImg;  
  // if(!introSound.isPlaying()) {
  //            introSound.play();
  //    }blink
};

startBtn.onOutside = () => {
  startBtn.stroke = "rgba(0,0,0,0)";
  startBtn.textColor = "#ed8090";
  startBtn.textSize = 40;
  startBtn.color = "rgba(0,0,0,0)";
  cursor();
};

//(2) 프롤로그 시작
function toPrologBtnCSS() {
  toPrologBtn.locate(width - 140, height - 95);
  toPrologBtn.resize(100, 60);
  toPrologBtn.stroke = "rgba(0,0,0,0)";
  toPrologBtn.color = "#FFD556";
  toPrologBtn.textFont = captionFont;
  toPrologBtn.text = "다음";
  toPrologBtn.textSize = 40;
}
toPrologBtn.onHover = () => {
  cursor("grab");
};
toPrologBtn.onOutside = () => {
  cursor("");
};
toPrologBtn.onPress = () => {
  isStartmessage = false;
  isProlog = true;
  bgImg = dream1;
  bgm1.play();

  setTimeout(() => {
    bgImg = dream1;
    bark2.play();
    
    // toBlackBtn.draw();
  }, 1000);
  setTimeout(() => {
    bgImg = dream2;
    
  }, 3000);
  setTimeout(() => {
    bgImg = dreamRun;
    
  }, 5000);
  setTimeout(() => {
    isProlog = false;
    isPrologEnd = true;
  }, 7000);
};

//(2) 프롤로그 끝나고 화면 까매지는 버튼
function toBlackBtnCSS() {
  toBlackBtn.locate(width - 140, height - 95);
  toBlackBtn.resize(100, 60);
  toBlackBtn.stroke = "rgba(0,0,0,0)";
  toBlackBtn.color = "#FFD556";
  toBlackBtn.textFont = captionFont;
  toBlackBtn.text = "다음";
  toBlackBtn.textSize = 40;
}
toBlackBtn.onHover = () => {
  cursor("grab");
};
toBlackBtn.onOutside = () => {
  cursor("");
};
toBlackBtn.onPress = () => {
  isPrologEnd = false;

  bgImg = blackImg;

  setTimeout(() => {
    bgImg = blink1Img;
  }, 1000);
  setTimeout(() => {
    bgImg = blink2Img;
  }, 1200);
  setTimeout(() => {
    bgImg = blink3Img;
  }, 1400);
  setTimeout(() => {
    bgImg = blink4Img;
  }, 1600);
  setTimeout(() => {
    bgImg = blink5Img;
  }, 1800);
  setTimeout(() => {
    bgImg = blink6Img;
  }, 2000);
  setTimeout(() => {
    bgImg = blink7Img;
  }, 2200);
  setTimeout(() => {
    bgImg = roomImg;
  }, 3400);
  setTimeout(() => {
    isPrologEnd = false;
    isRoom = true;
    isHappyPro_1CaptionActive = true;
  }, 5000);
};

///(3) 첫번째 해피 이미지 나올 때 next버튼
function toFirsthappyBtnCSS() {
  toFirsthappyBtn.locate(width-130, height-50);
  toFirsthappyBtn.resize(100, 40);
  toFirsthappyBtn.stroke = "rgba(0,0,0,0)";
  toFirsthappyBtn.color = "rgba(0,0,0,0)";
  toFirsthappyBtn.textFont = captionFont;
  toFirsthappyBtn.text = "> NEXT";
  toFirsthappyBtn.textSize = 24;
}
toFirsthappyBtn.onHover = () => {
  cursor("grab");
};
toFirsthappyBtn.onOutside = () => {
  cursor("");
};
toFirsthappyBtn.onPress = () => {
  isRoom = false;
  isFirsthappy = true;
  // bgImg = happyfirstImg;
  bgm2.play();
  setTimeout(() => {
    isHappyPro_2CaptionActive = true;
  }, 2000);
};

// 빛나는 해피 버튼. 누르면 해피가 말하기 시작함
function firstHappyBtnCSS() {
  firstHappyBtn.locate((width * 4.7) / 16, (height * 1) / 8 - 50);
  firstHappyBtn.resize(500, 450);
  firstHappyBtn.stroke = "rgba(0,0,0,0)"; 
  firstHappyBtn.color = "rgba(0,0,0,0)";
  firstHappyBtn.text = "";
}
firstHappyBtn.onHover = () => {
  image(happyclickImg, 0,0);
  cursor("grab");
};
firstHappyBtn.onOutside = () => {
  cursor("");
};
firstHappyBtn.onPress = () => {
  isFirsthappy = false;
  isFirsthappy1 = true;
  isHappyProCaptionActive = true;
  bark1.play();
};




//(2)tostage1으로 가는 버튼 1
function toStage1BtnCSS() {
  toStage1Btn.locate(width-185, height-105);
  ////locate(width-130, height-54.35); 고려! 
  toStage1Btn.resize(100, 40);
  toStage1Btn.stroke = "rgba(0,0,0,0)";
  toStage1Btn.color = "rgba(0,0,0,0)";
  toStage1Btn.textFont = captionFont;
  toStage1Btn.text = "> 찾으러 가기";
  toStage1Btn.textSize = 24;
}
toStage1Btn.onHover = () => {
  cursor("grab");
};
toStage1Btn.onOutside = () => {
  cursor("");
};
toStage1Btn.onPress = () => {
  isFirsthappy1 = false;
  isStage1 = true;
  isStage1CaptionActive = true;
  bgImg = roomImg;
  setTimeout(() => {
  isStage1CaptionActive = false;
  }, 5000);
};

//(3)tostage2으로 가는 버튼
function toStage2BtnCSS() {
  toStage2Btn.locate(width-130, height-54.35);
  toStage1Btn.resize(100, 40);
  toStage2Btn.stroke = "rgba(0,0,0,0)";
  toStage2Btn.color = "rgba(0,0,0,0)";
  toStage2Btn.textFont = captionFont;
  toStage2Btn.text = "> NEXT";
  toStage2Btn.textSize = 24;
}
toStage2Btn.onHover = () => {
  cursor("grab");
};
toStage2Btn.onOutside = () => {
  cursor("");
};
toStage2Btn.onPress = () => {
  isStage1 = false;
  isStage2 = true;
  isHappyStage2CaptionActive = true;
  bark1.play();
  // bgImg = stage2Img;
  //setTimeout(() => {
  //isHappyStage2CaptionActive = false;
  //}, 2000);
};

//(4)happy touch로 가는 버튼1
function toHappyTouch1BtnCSS() {
  toHappyTouch1Btn.locate(width-130, height-54.35);
  toStage1Btn.resize(100, 40);
  toHappyTouch1Btn.stroke = "rgba(0,0,0,0)";
  toHappyTouch1Btn.color = "rgba(0,0,0,0)";
  toHappyTouch1Btn.textFont = captionFont;
  toHappyTouch1Btn.text = "> NEXT";
  toHappyTouch1Btn.textSize = 24;
}
toHappyTouch1Btn.onHover = () => {
  cursor("grab");
};
toHappyTouch1Btn.onOutside = () => {
  cursor("");
};
toHappyTouch1Btn.onPress = () => {
  isStage2 = false;
  isStage2_1 = true;
};

// ////////// happy touch로 가는 버튼2
// function toHappyTouch2BtnCSS(){
//   toHappyTouch2Btn.locate((width * 6.5/16), (height * 7.5/8));
//   // toStage1Btn.resize(100, 30);
//   toHappyTouch2Btn.stroke = "rgba(0,0,0,0)";
//   toHappyTouch2Btn.color = "rgba(0,0,0,0)";
//   toHappyTouch2Btn.textFont = captionFont;
//   toHappyTouch2Btn.text = "> 나도 그러고 싶었어!";
//   toHappyTouch2Btn.textSize = 24;
// }
// toHappyTouch2Btn.onHover = () => {
//   cursor("grab");
// };
// toHappyTouch2Btn.onOutside = () => {
//   cursor("");
// };
// toHappyTouch2Btn.onPress = () => {
//   isStage2 = false;
//   isStage2_1 = true;
// }

//(5)tostage3로 가는 버튼
function toStage3BtnCSS() {
  toStage3Btn.locate(width-130, height-54.4);
  toStage1Btn.resize(100, 40);
  toStage3Btn.stroke = "rgba(0,0,0,0)";
  toStage3Btn.color = "rgba(0,0,0,0)";
  toStage3Btn.textFont = captionFont;
  toStage3Btn.text = "> NEXT";
  toStage3Btn.textSize = 24;
}
toStage3Btn.onHover = () => {
  cursor("grab");
};
toStage3Btn.onOutside = () => {
  cursor("");
};
toStage3Btn.onPress = () => {
  isStage2_2 = false; //사이에 2_1false, 2_2true, 2_2false가 추가되어야 할 듯!!)
  isStage3 = true;
  isHappyStage3CaptionActive = true;
  if(!bgm2.isPlaying()) {
         bgm2.play();
    }
  
};

//(6)letterWrite로 가는 버튼
function toletterBtnCSS() {
  toletterBtn.locate(width/2-20, height/2+10);
  toStage1Btn.resize(200, 160);
  toletterBtn.stroke = "rgba(0,0,0,0)";
  toletterBtn.color = "rgba(0,0,0,0)";
  toletterBtn.textFont = captionFont;
  // toletterBtn.text = "> NEXT";
  toletterBtn.textSize = 24;
}
toletterBtn.onHover = () => {
  cursor("grab");
  image(happyletterhover, 0,0);
};
toletterBtn.onOutside = () => {
  cursor("");
};
toletterBtn.onPress = () => {
  isStage3 = false;  
  isStage3_1 = true;
  textArea_show = true;
};

//(7)letterWrite 빠져 나오는 버튼
function quitletterBtnCSS() {
  quitletterBtn.locate(width-150, height-50);
  quitletterBtn.resize(100, 40);
  quitletterBtn.stroke = "rgba(0,0,0,0)";
  quitletterBtn.color = "rgba(0,0,0,0)";
  quitletterBtn.textFont = captionFont;
  quitletterBtn.text = "> 편지 건네주기";
  quitletterBtn.textSize = 24;
}
quitletterBtn.onHover = () => {
  cursor("grab");
};
quitletterBtn.onOutside = () => {
  cursor("");
};
quitletterBtn.onPress = () => {
  saveLetterText()
  isStage3_1 = false;
  textArea_show = false;
  isStage3_2 = true;
  
  bgm2.stop();
  bgm3.play();
  
  bgImg = happyletter_2;
  
        
    setTimeout(() => {
  bgImg = happyletter_3;
  bark1.play();
  }, 3000);

    setTimeout(() => {
  isHappyStage3_1CaptionActive = true;
  }, 5000);
  
};

//(8) 해피 보내주기 버튼 
function tohappybyeBtnCSS() {
  tohappybyeBtn.locate(width-150, height-50);
  tohappybyeBtn.resize(120, 40);
  tohappybyeBtn.stroke = "rgba(0,0,0,0)";
  tohappybyeBtn.color = "rgba(0,0,0,0)";
  tohappybyeBtn.textFont = captionFont;
  tohappybyeBtn.text = "> 해피 보내주기";
  tohappybyeBtn.textSize = 24;
}
tohappybyeBtn.onHover = () => {
  cursor("grab");
};
tohappybyeBtn.onOutside = () => {
  cursor("");
};
tohappybyeBtn.onPress = () => {
  isStage3_2 = false;
  bgImg = happybye1;
  setTimeout(()=>{
  bgImg =happybye2;
  },2000);
   setTimeout(()=>{
 bgImg =happybye3;
  },5000);
   setTimeout(()=>{
  isStage3_3 = true;  
   },10000);
};




//(9)ending으로 가는 버튼
function toendingBtnCSS() {
  toendingBtn.locate(width-170, height-80);
  toendingBtn.resize(130, 60);
  toendingBtn.stroke = "rgba(0,0,0,0)";
  toendingBtn.color = "#FFD556";
  toendingBtn.textFont = captionFont;
  toendingBtn.text = "> ENDING";
  toendingBtn.textSize = 26;
}
toendingBtn.onHover = () => {
  cursor("grab");
};
toendingBtn.onOutside = () => {
  cursor("");
};
toendingBtn.onPress = () => {
  isStage3_3 = false;
  isStage3_4 = true;
};

///ending끝내는 버튼
function endingBtnCSS() {
  endingBtn.locate(width-130, height-60);
  endingBtn.resize(100, 50);
  endingBtn.stroke = "rgba(0,0,0,0)";
  endingBtn.color = "rgba(0,0,0,0)";
  endingBtn.textFont = captionFont;
  endingBtn.text = "> 끝내기";
  endingBtn.textSize = 24;
}
endingBtn.onHover = () => {
  cursor("grab");
};
endingBtn.onOutside = () => {
  cursor("");
};
endingBtn.onPress = () => {
 isStage3_4=false;
  isEnding=true;
  blackOpacity3 +=  5;
};




//(ending용)재시작 버튼
function restartBtnCSS() {
  restartBtn.locate(width-240, height-90);
  restartBtn.resize(210, 60);
  restartBtn.stroke = "rgba(0,0,0,0)";
  restartBtn.color = "#CFF0FF";
  restartBtn.textFont = captionFont;
  restartBtn.text = "> 다시 플레이하기";
  restartBtn.textSize = 25;
}
restartBtn.onHover = () => {
  cursor("grab");
};
restartBtn.onOutside = () => {
  cursor("");
};
restartBtn.onPress = () => {
  location.reload();
};

//(stage용)재시작 버튼
function restartBtnCSS2() {
  restartBtn2.locate(width-120, 20);
  restartBtn2.resize(100, 50);
  restartBtn2.stroke = "rgba(0,0,0,0)";
  restartBtn2.color = "rgb(207,239,255)29,243)";
  restartBtn2.textFont = captionFont;
  restartBtn2.text = "HOME";
  restartBtn2.textSize = 20;
}
restartBtn2.onHover = () => {
  cursor("grab");
};
restartBtn2.onOutside = () => {
  cursor("");
};
restartBtn2.onPress = () => {
  location.reload();
};
