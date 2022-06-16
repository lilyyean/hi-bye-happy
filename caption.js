//자막 함수 (파란색)
function caption(content) {
  if (
    content == "해피야! 어디 가니? 잠깐만 기다려.."
    ){
    fill("#FFF59AB7");
    textFont(playerFont);  
  } else if(
    content == "'아..꿈이었구나. 해피, 오랜만이네.. 꿈에서라도 만나니까 좋다'"
 ){
    fill("#FFF59AB7");
    textFont(playerFont);  
  } else if(
    content == "'해피 보고싶다..'"
  ){
    fill("#FFF59AB7");
    textFont(playerFont);
  } else if(
    content == "'어? 아까 깬 줄 알았는데 아직 꿈인가? \n  해피는 분명 얼마 전…'"
  ){
    fill("#FFF59AB7");
    textFont(playerFont);

  } else if(
    content == "'해피가 천사가 되어 나한테 찾아와 준 건가?'"
  ){
    fill("#FFF59AB7");
        textFont(playerFont);  
  } else if(
    content == "'해피야!'"
  ){
    fill("#FFF59AB7");
        textFont(playerFont);  
  } else if(
    content == "응! 당연하지"
  ){
    fill("#FFF59AB7");
        textFont(playerFont);  
  } else if(
    content == "나도 너랑 함께 지내면서 행복한 시간을 만들 수 있었어. 고마워!"
  ){
    fill("#FFF59AB7");
        textFont(playerFont);  
  } else if(
    content == "맞아. 나도 네가 좋아하는 모습을 보는 게 가장 행복했어!"
  ){
    fill("#FFF59AB7");
        textFont(playerFont);  
  } else if(
    content == "좋아!"
  ){
    fill("#FFF59AB7");
        textFont(playerFont);  
  } else if(
    content == "내 가장 친한 친구이자 가족이었지"
  ){
    fill("#FFF59AB7");
        textFont(playerFont);  
  } else if(
    content == "당연하지~ 뭔데? 말해봐"
  ){
    fill("#FFF59AB7");
        textFont(playerFont);  
  } else if(
    content == "해피! 평소라면 침대에 올라와 날 깨웠을 텐데 오늘은 웬일이지?"
  ){
    fill("#FFF59AB7");
        textFont(playerFont);  
  } else if(
    content == "'아.. 꿈이었구나. 해피, 오랜만이네.. 꿈에서라도 만나니까 좋다'"
  ){
    fill("#FFF59AB7");
        textFont(playerFont);  
  } else if(
    content == "'어? 아까 깬 줄 알았는데 아직 꿈인가? \n 해피는 분명 얼마 전…'"
  ){
    fill("#FFF59AB7");
        textFont(playerFont);  
  } else if(
    content == "해피가 어렸을 땐 이 방석에서만 잤는데.. 금방 자라버려서 못 쓰게 됐어."
  ){
    fill("#FFF59AB7");
        textFont(playerFont);  
  } else if(
    content == "해피가 어렸을 땐 참 말썽쟁이였지..!! \n 하지만 그 귀여운 눈빛을 보면 차마 혼을 낼 수가 없었는데.."
  ){
    fill("#FFF59AB7");
        textFont(playerFont);  
  } else if(
    content == "해피는 터그 놀이를 제일 좋아했어! \n 힘든 것도 아닌데 나중에는 바쁘다는 핑계로 잘 놀아주지 못했구나.."
  ){
    fill("#FFF59AB7");
        textFont(playerFont);  
  }
  
  
  
  else {
      fill("rgba(195,232,248,0.8)");  
      textFont(captionFont);
  }
  
  rect(0, height - 140, width, 150);
  fill(0);
  textLeading(40);
  textAlign(CENTER, CENTER);
  textSize(31);
  textLeading(45);
  text(content, width / 2, height - 75);
}

//설명 함수: 게임 안내 (하늘색)
function HowCaption2(content) {
  fill("rgba(242, 245, 152,0.8)");
  rect(width / 2 + 163, 185, 264, 39,150);
  fill("#9ECFE8CC");
  rect(width / 2 + 165, 186, 260, 35,150);
  //fill(158, 207, 232);
  //line(width / 2 + 100, 212, width / 2 + 200, 212);
  fill(0);
  //stroke(158, 207, 232);
  //strokeWeight(3);
  textFont(captionFont);
  textStyle(ITALIC);
  textAlign(CENTER, CENTER);
  textSize(25);
  text(content, width / 2 + 295, 200);
}

//설명 함수: 게임 안내 (핑크색)
function HowCaption(content) {
  fill("rgba(253,206,255,0.8)");
  rect(0, 30, width, 100);
  fill(0);
  textFont(captionFont);
  textAlign(CENTER, CENTER);
  textSize(30);
  text(content, width / 2, 78);
}

//설명 함수: 게임 안내 (연핑크색)
function HowCaption3(content) {
  fill("rgba(242, 245, 152,0.8)");
  rect(width / 2 + 163, 185, 264, 39,150);
  fill("rgba(253,206,255,0.8)");
  rect(width / 2 + 165, 186, 260, 35,150);
  //fill(158, 207, 232);
  //line(width / 2 + 100, 212, width / 2 + 200, 212);
  fill(0);
  //stroke(158, 207, 232);
  //strokeWeight(3);
  textFont(captionFont);
  textStyle(ITALIC);
  textAlign(CENTER, CENTER);
  textSize(25);
  text(content, width / 2 + 295, 200);
}

//프롤로그 방안에서 눈 떴을 때 독백
function atHappyPro_1CaptionCSS() {
  atHappyPro_1CaptionBtn.locate(width-130, height-50);
  atHappyPro_1CaptionBtn.resize(100, 40);
  atHappyPro_1CaptionBtn.stroke = "rgba(0,0,0,0)";
  atHappyPro_1CaptionBtn.color = "rgba(0,0,0,0)";
  atHappyPro_1CaptionBtn.textSize = 24;
  atHappyPro_1CaptionBtn.textFont = captionFont;
  atHappyPro_1CaptionBtn.text = "> NEXT";
}
atHappyPro_1CaptionBtn.onHover = () => {
  cursor("grab");
};
atHappyPro_1CaptionBtn.onOutside = () => {
  cursor("");
};
atHappyPro_1CaptionBtn.onPress = () => {
  HappyPro_1CaptionIndex += 1;
  switch (HappyPro_1CaptionIndex) {
    case 0:
      HappyPro_1CaptionText = "'아..꿈이었구나. 해피, 오랜만이네.. 꿈에서라도 만나니까 좋다'";
      break;
    case 1:
      HappyPro_1CaptionText = "'해피 보고싶다..'";
      break;
      
    default:
      break;
  }
};

//프롤로그 해피 나타났을때 
function atHappyPro_2CaptionCSS() {
  atHappyPro_2CaptionBtn.locate(width-130, height-50);
  atHappyPro_2CaptionBtn.resize(100, 40);
  atHappyPro_2CaptionBtn.stroke = "rgba(0,0,0,0)";
  atHappyPro_2CaptionBtn.color = "rgba(0,0,0,0)";
  atHappyPro_2CaptionBtn.textSize = 25;
  atHappyPro_2CaptionBtn.textFont = captionFont;
  atHappyPro_2CaptionBtn.text = "> NEXT";
}
atHappyPro_2CaptionBtn.onHover = () => {
  cursor("grab");
};
atHappyPro_2CaptionBtn.onOutside = () => {
  cursor("");
};
atHappyPro_2CaptionBtn.onPress = () => {
  HappyPro_2CaptionIndex += 1;
  switch (HappyPro_2CaptionIndex) {
    case 0:
      HappyPro_2CaptionText = "'어? 아까 깬 줄 알았는데 아직 꿈인가? \n  해피는 분명 얼마 전…'";
      break;
    case 1:
      HappyPro_2CaptionText = "'해피가 천사가 되어 나한테 찾아와 준 건가?'";
      break;
     case 2:
      HappyPro_2CaptionText = "'해피야!'";
      break;  
    
    default:
      break;
  }
};




//스테이지1 물건찾기 전 
function atHappyProCaptionCSS() {
  atHappyProCaptionBtn.locate(width-130, height-50);
  atHappyProCaptionBtn.resize(100, 40);
  atHappyProCaptionBtn.stroke = "rgba(0,0,0,0)";
  atHappyProCaptionBtn.color = "rgba(0,0,0,0)";
  atHappyProCaptionBtn.textSize = 25;
  atHappyProCaptionBtn.textFont = captionFont;
  atHappyProCaptionBtn.text = "> NEXT";
}
atHappyProCaptionBtn.onHover = () => {
  cursor("grab");
};
atHappyProCaptionBtn.onOutside = () => {
  cursor("");
};
atHappyProCaptionBtn.onPress = () => {
  HappyProCaptionIndex += 1;
  switch (HappyProCaptionIndex) {
    case 0:
      HappyProCaptionText = "주인, 안녕?";
      break;
    case 1:
      HappyProCaptionText = "오랜만에 보는데 잘 지냈어?";
      break;
    case 2:
      HappyProCaptionText = "내가 왜 아직 여기 남아있는지 궁금하지?";
      break;
    case 3:
      HappyProCaptionText =
        "내가 떠난 후로 네가 너무 슬퍼하는 것 같아서 강아지별로 떠나지 못했어..";
      break;
    case 4:
      HappyProCaptionText =
        "내가 마음 편하게 강아지별로 떠날 수 있게, 네가 꼭 들어줬으면 하는 부탁이 있어!";
      break;
    case 5:
      HappyProCaptionText = "들어줄 수 있지?";
      break;
   
       case 6:
      HappyProCaptionText = "응! 당연하지";
      break;
     
      case 7:
      HappyProCaptionText = "첫 번째로, 나와의 소중한 추억이 담겨있는 물건 3개를 방 안에서 찾아줘!"
      break;

    default:
      break;
  }
};

//스테이지1 물건찾기 후 자막 버튼
function atHappyStage1_1CaptionCSS() {
  atHappyStage1_1CaptionBtn.locate(width-130, height-50);
  atHappyStage1_1CaptionBtn.resize(100, 40);
  atHappyStage1_1CaptionBtn.stroke = "rgba(0,0,0,0)";
  atHappyStage1_1CaptionBtn.color = "rgba(0,0,0,0)";
  atHappyStage1_1CaptionBtn.textSize = 25;
  atHappyStage1_1CaptionBtn.textFont = captionFont;
  atHappyStage1_1CaptionBtn.text = "> NEXT";
}
atHappyStage1_1CaptionBtn.onHover = () => {
  cursor("grab");
};
atHappyStage1_1CaptionBtn.onOutside = () => {
  cursor("");
};
atHappyStage1_1CaptionBtn.onPress = () => {
  HappyStage1_1CaptionIndex += 1;
  switch (HappyStage1_1CaptionIndex) {
    case 0:
      HappyStage1_1CaptionText = "잘 찾아줬네!";
      break;
    case 1:
      HappyStage1_1CaptionText =
        "너와의 추억이 담겨있는 물건을 보니 이 집에서 행복하게 살 때가 많이 생각난다";
      break;
    case 2:
      HappyStage1_1CaptionText =
        "나도 너랑 함께 지내면서 행복한 시간을 만들 수 있었어. 고마워!";
      break;
    // case 4:
    //   atHappyPro_1CaptionText = " ";
    //   break;

    default:
      break;
  }
};

//스테이지2 자막 버튼
function atHappyStage2CaptionCSS() {
  atHappyStage2CaptionBtn.locate(width-130, height-50);
  atHappyStage2CaptionBtn.resize(100, 40);
  atHappyStage2CaptionBtn.stroke = "rgba(0,0,0,0)";
  atHappyStage2CaptionBtn.color = "rgba(0,0,0,0)";
  atHappyStage2CaptionBtn.textSize = 25;
  atHappyStage2CaptionBtn.textFont = captionFont;
  atHappyStage2CaptionBtn.text = "> NEXT";
}
atHappyStage2CaptionBtn.onHover = () => {
  cursor("grab");
};
atHappyStage2CaptionBtn.onOutside = () => {
  cursor("");
};
atHappyStage2CaptionBtn.onPress = () => {
  HappyStage2CaptionIndex += 1;
  switch (HappyStage2CaptionIndex) {
    case 0:
      HappyStage2CaptionText =
        "근데~ 그거 알아? 네가 날 예뻐해 줄 때가 제일 좋더라";
      break;
    case 1:
      HappyStage2CaptionText =
        "맞아. 나도 네가 좋아하는 모습을 보는 게 가장 행복했어!";
      break;
    case 2:
      HappyStage2CaptionText = "그럼 이번엔 나를 쓰다듬어줄래?";
      break;
    case 3:
      HappyStage2CaptionText = "좋아!";
      break;
    case 4:
      HappyStage2CaptionText = " ";
      break;

    default:
      break;
  }
};

//스테이지2 만지기 게임 후 자막 버튼
function atHappyStage2_2CaptionCSS() {
  atHappyStage2_2CaptionBtn.locate(width-130, height-50);
  atHappyStage2_2CaptionBtn.resize(100, 40);
  atHappyStage2_2CaptionBtn.stroke = "rgba(0,0,0,0)";
  atHappyStage2_2CaptionBtn.color = "rgba(0,0,0,0)";
  atHappyStage2_2CaptionBtn.textSize = 25;
  atHappyStage2_2CaptionBtn.textFont = captionFont;
  atHappyStage2_2CaptionBtn.text = "> NEXT";
}
atHappyStage2_2CaptionBtn.onHover = () => {
  cursor("grab");
};
atHappyStage2_2CaptionBtn.onOutside = () => {
  cursor("");
};
atHappyStage2_2CaptionBtn.onPress = () => {
  HappyStage2_2CaptionIndex += 1;
  switch (HappyStage2_2CaptionIndex) {
    case 0:
      HappyStage2_2CaptionText =
        "오랜만에 느끼는 주인 손길 너무 포근하다~";
      break;
    case 1:
      HappyStage2_2CaptionText =
        "나에게 너는 보기만 해도 기분이 좋아지는 든든한 존재야!";
      break;  
    case 2:
      HappyStage2_2CaptionText = "너에게 나는 어떤 존재였어?";
      break;
    case 3:
      HappyStage2_2CaptionText =
        "내 가장 친한 친구이자 가족이었지";
      // 나를 행복하게 해주는 존재
      break;
    case 4:
      HappyStage2_2CaptionText =
        "너의 기억 속에 그렇게 남아 있다면 그걸로 충분해";
      break;
    case 5:
      HappyStage2_2CaptionText =
        "덕분에 편안한 마음으로 강아지별에 갈 수 있을 것 같아";
      break;

    default:
      break;
  }
};

//스테이지 3 시작 자막 버튼
function atHappyStage3CaptionCSS() {
  atHappyStage3CaptionBtn.locate(width-130, height-50);
  atHappyStage3CaptionBtn.resize(100, 40);
  atHappyStage3CaptionBtn.stroke = "rgba(0,0,0,0)";
  atHappyStage3CaptionBtn.color = "rgba(0,0,0,0)";
  atHappyStage3CaptionBtn.textSize = 25;
  atHappyStage3CaptionBtn.textFont = captionFont;
  atHappyStage3CaptionBtn.text = "> NEXT";
}
atHappyStage3CaptionBtn.onHover = () => {
  cursor("grab");
};
atHappyStage3CaptionBtn.onOutside = () => {
  cursor("");
};
atHappyStage3CaptionBtn.onPress = () => {
  HappyStage3CaptionIndex += 1;
  switch (HappyStage3CaptionIndex) {
    case 0:
      HappyStage3CaptionText =
        "나 이제 정말 강아지별로 가봐야 해. \n 마지막 부탁이 있는데.. 들어줄 수 있어?!";
      break;

    case 1:
      HappyStage3CaptionText = "당연하지~ 뭔데? 말해봐";
      break;

    case 2:
      HappyStage3CaptionText =
        "강아지별 떠나기 전에, \n 내가 너에게 어떤 존재였는지, 너의 마음을 표현한 편지를 써줘!";
      break;
      
  case 3:
   HappyStage3CaptionText =
     "강아지별에 가서도 읽으면서 너와의 추억을 기억하고 싶어!";
  //    break;
      
    default:
      break;
  }
};

//스테이지 3 편지쓰기 후 자막 버튼
function atHappyStage3_1CaptionCSS() {
  atHappyStage3_1CaptionBtn.locate(width-130, height-50);
  atHappyStage3_1CaptionBtn.resize(100, 40);
  atHappyStage3_1CaptionBtn.stroke = "rgba(0,0,0,0)";
  atHappyStage3_1CaptionBtn.color = "rgba(0,0,0,0)";
  atHappyStage3_1CaptionBtn.textSize = 25;
  atHappyStage3_1CaptionBtn.textFont = captionFont;
  atHappyStage3_1CaptionBtn.text = "> NEXT";
}
atHappyStage3_1CaptionBtn.onHover = () => {
  cursor("grab");
};
atHappyStage3_1CaptionBtn.onOutside = () => {
  cursor("");
};
atHappyStage3_1CaptionBtn.onPress = () => {
  HappyStage3_1CaptionIndex += 1;
  switch (HappyStage3_1CaptionIndex) {
    case 0:
      HappyStage3_1CaptionText =
        "나를 너의 가족이자 친구로 받아주고 함께해 줘서 고마웠어";
      break;
    case 1:
      HappyStage3_1CaptionText =
        "너와 노는 시간도, 너를 바라보며 기다리는 시간도 모두 즐겁고 행복했어";
      break;
    case 2:
      HappyStage3_1CaptionText =
        "강아지별에서 설레는 마음으로 널 기다릴 테니까,\n 내가 없어도 잘 지내다가 꼭 나중에 다시 만나자!";
      break;
    default:
      break;
  }
};
