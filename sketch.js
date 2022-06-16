let testMode = true;


////변수 선언 및 초기화

//(1) 프롤로그 변수 선언
let isThumbnail = true;
let isStartmessage = false;
let isProlog = false;
let isPrologEnd = false;
let isRoom = false;
let isFirsthappy = false;
let isFirsthappy1 = false;

//(2) 스테이지 onoff 변수 선언
let isStage0_1 = false;
let isStage1 = false;
let isStage2 = false;
let isStage2_1 = false;
let isStage2_2 = false;
let isStage3 = false;
let isStage3_1 = false;
let isStage3_2 = false;
let isStage3_3 = false;
let isStage3_4 = false;
let isEnding = false;

//(3) 스테이지별 자막 활성화
let isFirstCaptionActive = false;
let isHappyProCaptionActive = false;
let isHappyPro_1CaptionActive = false;
let isHappyPro_2CaptionActive = false;
let isHappyStage1_1CaptionActive = false;
let isStage2CaptionActive = false;
let isHappyStage2_2CaptionActive = false;
let isHappyStage3CaptionActive = false;
let isHappyStage3_1CaptionActive = false;
let isHappyStage3_2CaptionActive = false;

//(3-1) 물건찾기 자막 onoff
let isCushionment = false;
let isSlipperment = false;
let isBonement = false;
let isMemoryClose = true;

////스테이지별 버튼

//(1) 프롤로그 버튼
let startBtn = new Clickable();
let toStartmessageBtn = new Clickable();
let toPrologBtn = new Clickable();
let toBlackBtn = new Clickable();
// let toRoomBtn = new Clickable();
let toFirsthappyBtn = new Clickable();
let firstHappyBtn = new Clickable();
let atHappyProCaptionBtn = new Clickable();
let atHappyPro_1CaptionBtn = new Clickable();
let atHappyPro_2CaptionBtn = new Clickable();

//(2) 스테이지1에 들어가는 버튼
// let toStage0_1Btn = new Clickable();
// let toStage0_2Btn = new Clickable();
let toStage1Btn = new Clickable();
let MemoryCloseBtn = new Clickable();
let cushionBtn = new Clickable();
let slipperBtn = new Clickable();
let boneBtn = new Clickable();
let atHappyStage1_1CaptionBtn = new Clickable();

//(3) 스테이지2에 들어가는 버튼
let toStage2Btn = new Clickable();
let atHappyStage2CaptionBtn = new Clickable();
let toHappyTouch1Btn = new Clickable();
// let toHappyTouch2Btn = new Clickable();
let atHappyStage2_2CaptionBtn = new Clickable();

//(4) 스테이지3에 들어가는 버튼
let toStage3Btn = new Clickable();
let atHappyStage3CaptionBtn = new Clickable();
let atHappyStage3_1CaptionBtn = new Clickable();
let atHappyStage3_2CaptionBtn = new Clickable();
let atHappyStage3_3CaptionBtn = new Clickable();
let atHappyStage3_4CaptionBtn = new Clickable();
let toletterBtn = new Clickable();
let quitletterBtn = new Clickable();
let tohappybyeBtn = new Clickable();
let toendingBtn = new Clickable();
let endingBtn = new Clickable();
let restartBtn = new Clickable();

// (5) 홈버튼
let restartBtn2 = new Clickable();


////스테이지별 자막 초기화 설정

//(1) 프롤로그~stage1 자막 초기화 설정
let FirstCaptionText =
  "해피! 평소라면 침대에 올라와 날 깨웠을 텐데 오늘은 웬일이지?";
let FirstCaptionIndex = 0;
let FirsthappyOpacity = 0;
let HappyPro_1CaptionText =
  "'아.. 꿈이었구나. 해피, 오랜만이네.. 꿈에서라도 만나니까 좋다'";
let HappyPro_1CaptionIndex = 0;
let HappyPro_2CaptionText =
  "'어? 아까 깬 줄 알았는데 아직 꿈인가? \n 해피는 분명 얼마 전…'";
let HappyPro_2CaptionIndex = 0;
let HappyProCaptionText = "안녕?";
let HappyProCaptionIndex = 0;
let HappyStage1_1CaptionText = "잘 찾아줬네!";
let HappyStage1_1CaptionIndex = 0;

//(2) stage2 자막 초기화 설정
let HappyStage2CaptionText = "근데~ 그거 알아? 네가 날 예뻐해 줄 때가 제일 좋더라";
let HappyStage2CaptionIndex = 0;

//(3) stage2_2 자막 초기화 설정
let HappyStage2_2CaptionText =
  "오랜만에 느끼는 주인 손길 너무 포근하다~" ;
let HappyStage2_2CaptionIndex = 0;

//(4) stage3 자막 초기화 설정
let HappyStage3CaptionText =
  "나 이제 정말 강아지별로 가봐야 해. \n 마지막 부탁이 있는데.. 들어줄 수 있어?!";
let HappyStage3CaptionIndex = 0;

//(5) stage3_1 자막 초기화 설정
let HappyStage3_1CaptionText =
  "나를 너의 가족이자 친구로 받아주고 함께해 줘서 고마웠어";
let HappyStage3_1CaptionIndex = 0;


// stage3
let textArea;
let textArea_show;
let textArea_reset;
let letterText;

let blackOpacity = 0;
let blackOpacity2 = 0;
let blackOpacity3 = 255;
let blackOpacity4 = 255;

/*bgm 볼륨변수

let bgm1Volume = 1;
let bgm2Volume = 1;
let bgm3Volume = 1;
*/


////파일 미리 불러오기
function preload() {
  
  //bgm
  bgm1 = loadSound("Asset/bgm/c_A Summer Nights Dream.mp3");
  bgm2 = loadSound("Asset/bgm/d_frad_first_date.mp3");
  bgm3 = loadSound("Asset/bgm/g_Snowy Hut.mp3");
  bark1 = loadSound("Asset/bgm/bark1.mp3");
  bark2 = loadSound("Asset/bgm/bark2.mp3");
  bark3 = loadSound("Asset/bgm/bark3.mp3");
  
  //(1) 프롤로그/첫시작 단계 이미지
  captionFont = loadFont("Asset/font/a솜사탕.ttf");
  playerFont = loadFont("Asset/font/a시월구일2.ttf")
  // elseFont = loadFont("Asset/font/a시월구일2.ttf")
  
  bgImg = loadImage("Asset/img/start.png");
  messageImg = loadImage("Asset/img/startmessage.png");
  blackImg = loadImage("Asset/img/black.png");
  blink1Img = loadImage("Asset/img/blink1.png");
  blink2Img = loadImage("Asset/img/blink2.png");
  blink3Img = loadImage("Asset/img/blink3.png");
  blink4Img = loadImage("Asset/img/blink4.png");
  blink5Img = loadImage("Asset/img/blink5.png");
  blink6Img = loadImage("Asset/img/blink6.png");
  blink7Img = loadImage("Asset/img/blink7.png");

  
  //(2) 스테이지별 배경 이미지
  dream1 = loadImage("Asset/prolog/dream1.png"); // 꿈에 나온 해피1
  dream2 = loadImage("Asset/prolog/dream2.png"); //꿈에나온 해피2
  dreamRun = loadImage("Asset/prolog/dream_run.png"); // 멀리 달려가는 해피
  roomImg = loadImage("Asset/img/room.png");
  stage2Img = loadImage("Asset/stage2/stage2.png");
  letter = loadImage("Asset/stage3/letter.png"); //편지지 배경

///엔딩까지 배경 이미지 
  happybye1 = loadImage("Asset/stage3/happybye1.png")
  happybye2 = loadImage("Asset/stage3/happybye2.png")
  happybye3 = loadImage("Asset/stage3/happybye3.png")
  ending =  loadImage("Asset/stage3/ending.png");
//편지 자랑하는 해피

  //(3) 해피 이미지
  happybaseImg = loadImage("Asset/happy/happybase.png");
  happyfirstImg = loadImage("Asset/happy/happyfirst.png");
  happyclickImg = loadImage("Asset/happy/happyclick.png");
  happytoungeImg = loadImage("Asset/happy/happytounge.png");
  happyHip = loadImage("Asset/happy/happyhip.png"); // 엉덩이 만져달라는 해피
  happyStomach = loadImage("Asset/happy/happystomach.png"); // 배 만져달라는 해피
  happyfeelgood = loadImage("Asset/happy/happyfeelgood.png"); // 행복한 해피 
  happyletterImg = loadImage("Asset/happy/happyletter.png"); // 편지 든 해피
  happyletterhover = loadImage("Asset/happy/happyletterhover.png"); // 편지 든 해피 호버
  happyletter_2 = loadImage("Asset/happy/happyletter_2.png"); // 편지 문 해피
  happyletter_3 = loadImage("Asset/happy/happyletter_3.png"); // 편지 내려놓은 해피 
  

  //(4) 물건 + 스테이지2 회상 이미지
  cushionH = loadImage("Asset/stage1/cushion_hover.png");
  slipperH = loadImage("Asset/stage1/slipper_hover.png");
  boneH = loadImage("Asset/stage1/bone_hover.png");
  memoryoneImg = loadImage("Asset/stage1/memoryone.png");
  memorytwoImg = loadImage("Asset/stage1/memorytwo.png");
  memorythreeImg = loadImage("Asset/stage1/memorythree.png");
  
  //기타 UI
  loveGauge = loadImage("Asset/stage2/loveGauge.png");
  loveGauge1 = loadImage("Asset/stage2/loveGauge1.png");
  heart2 = loadImage("Asset/stage2/heart2.png");
  heart3 = loadImage("Asset/stage2/heart3.png");
  click = loadImage("Asset/stage2/click.png"); // 클릭!표시
  playing = loadImage("Asset/prolog/playing.png"); // playing표시
  
}

function setup() {
  createCanvas(1280, 720);
  noStroke();
  textLeading(30);
  startBtnCSS(); //스타트버튼 css
  toPrologBtnCSS();
  toBlackBtnCSS();
  toFirsthappyBtnCSS(); // 해피 첫등장으로 가는 버튼 css
  firstHappyBtnCSS();
  atHappyProCaptionCSS(); // 해피 자막 바꾸기 버튼
  atHappyPro_1CaptionCSS();
  atHappyPro_2CaptionCSS();
  atHappyStage1_1CaptionCSS();
  atHappyStage2CaptionCSS(); // 스테이지2 해피 자막 바꾸기 버튼
  atHappyStage2_2CaptionCSS();

  input = createInput("");
  input.position(-500, -500);

//  toStage0_1BtnCSS();
  // toStage0_2BtnCSS();
  toStage1BtnCSS();
  MemoryCloseCSS();
  cushionBtnCSS();
  slipperBtnCSS();
  boneBtnCSS();
  toStage2BtnCSS();

  toHappyTouch1BtnCSS();
  // toHappyTouch2BtnCSS();
  toStage3BtnCSS();

  atHappyStage3CaptionCSS();
  atHappyStage3_1CaptionCSS();
  toletterBtnCSS();
  quitletterBtnCSS();
  tohappybyeBtnCSS();
  toendingBtnCSS();
  endingBtnCSS();
  restartBtnCSS();
  
  restartBtnCSS2();
  //stage3
  setupLetter()
  


  
}

function draw() {
  

  background(bgImg);

  //(1) 시작화면
  if (isThumbnail) {
    startBtn.draw(); //스타트버튼
  }

  //// 설명 화면
  if (isStartmessage) {
  textSize(35);
  fill(255);
  textAlign(CENTER,CENTER);
  textFont(captionFont);
  textLeading(50);
  text("이 게임은 \n 반려동물을 떠나보낸 사람들을 \n 위로하기 위해 제작되었습니다.", width/2, 230);
  text("대사에 집중할수록 \n 더욱 몰입감을 느끼실 수 있습니다.",width/2, 430)
    
    toPrologBtn.draw();
  }

 ///프롤로그
  if (isProlog){
   image(playing,0,0);
  }
  
  
  /// 프롤로그 끝날때
  if (isPrologEnd) {
    caption("해피야! 어디 가니? 잠깐만 기다려..");
    //// 이 사이에 텀 두는건 고민이 필요! ㅠㅠ
    image(playing,0,0);
    
    fill(0,blackOpacity);
    rect(0,0,1280,720);
    blackOpacity += 1;
    
    toBlackBtn.draw();
    
    
  }

  //// 스테이지1

  //stage1_꿈에서 깸
  if (isRoom) {
    if (isHappyPro_1CaptionActive) {
      caption(HappyPro_1CaptionText);
      if (HappyPro_1CaptionIndex < 1) {
        atHappyPro_1CaptionBtn.draw();
      } else {
        toFirsthappyBtn.draw();
       // bgm1Volume += -0.1
      }
    }
  restartBtn2.draw();
  }

  //stage1_해피 나타남
  if (isFirsthappy) {
    tint(255, FirsthappyOpacity);
    
    if (FirsthappyOpacity < 150) {
      FirsthappyOpacity += 50;
    } else if (FirsthappyOpacity < 256) {
      FirsthappyOpacity += 100;
    }
    bgm1.stop();
    image(happybaseImg, 0,0);
    if (isHappyPro_2CaptionActive) {
      caption(HappyPro_2CaptionText);
      if (HappyPro_2CaptionIndex < 2) {
        atHappyPro_2CaptionBtn.draw();
      } else {
        firstHappyBtn.draw();
        HowCaption2("해피를 클릭해 보세요!")
      }
    }
  restartBtn2.draw();
  }

  //stage1_해피가 말을 걸어옴
  if (isFirsthappy1) {
    image(happyfirstImg, 0,0);
    if (isHappyProCaptionActive) {
      caption(HappyProCaptionText);
      if (HappyProCaptionIndex <7) {
        atHappyProCaptionBtn.draw();
      }else {
        toStage1Btn.draw();

        // toStage0_2Btn.draw();

        // bgImg = happyfirstImge
    }}
  restartBtn2.draw();
  }


  if (isStage1) {
    //   if(!introSound.isPlaying()) {
    //           introSound.play();
    // }
    if (!isCushionment && !isSlipperment && !isBonement) {
      if (isStage1CaptionActive) {
        HowCaption("방 안의 물건을 살펴보며, 해피와의 추억을 떠올려보자!");
      }
      cushionBtn.draw();
      slipperBtn.draw();
      boneBtn.draw();
    }
    if (isCushionment) {
      MemoryCloseBtn.draw();
      caption(
        "해피가 어렸을 땐 이 방석에서만 잤는데.. 금방 자라버려서 못 쓰게 됐어."
      );
      isCushionOn = true;
      isMemoryClose = false;
    }
    if (isSlipperment) {
      MemoryCloseBtn.draw();
      caption(
        "해피가 어렸을 땐 참 말썽쟁이였지..!! \n 하지만 그 귀여운 눈빛을 보면 차마 혼을 낼 수가 없었는데.."
      );
      isSlipperOn = true;
      isMemoryClose = false;
    }
    if (isBonement) {
      MemoryCloseBtn.draw();
      caption(
        "해피는 터그 놀이를 제일 좋아했어! \n 힘든 것도 아닌데 나중에는 바쁘다는 핑계로 잘 놀아주지 못했구나.."
      );
      isBoneOn = true;
      isMemoryClose = false;
    }

    if (
      isSlipperOn == true &&
      isBoneOn == true &&
      isCushionOn == true &&
      isMemoryClose == true
    ) {

      isCushionment = false;
      isSlipperment = false;
      isBonement = false;

      // bgImg = roomImg

      setTimeout(() => {
        bgImg = roomImg;
        isHappyStage1_1CaptionActive = true;
      }, 2000);

      image(happytoungeImg, 0,0);
      // caption(
      //   "잘 찾아줬네. 너와의 추억이 담겨있는 물건을 보니 이 집에서 행복하게 살 때가 생각이 많이 난다"
      if (isHappyStage1_1CaptionActive) {
        caption(HappyStage1_1CaptionText);
        if (HappyStage1_1CaptionIndex < 2) {
          atHappyStage1_1CaptionBtn.draw();
        } else {
          toStage2Btn.draw();
        }
      }
    }
  restartBtn2.draw();
  }

  //////스테이지2

  //스테이지2 시작
  if (isStage2) {
    image(happyfirstImg, 0,0);

    if (isHappyStage2CaptionActive) {
      caption(HappyStage2CaptionText);
      if (HappyStage2CaptionIndex < 3) {
        atHappyStage2CaptionBtn.draw();
      } else {
        toHappyTouch1Btn.draw();
        // toHappyTouch2Btn.draw();
      }
    }
  restartBtn2.draw();
  }

  //스테이지2 만지기 게임
  if (isStage2_1) {
    happyTouch(); //만지기게임 함수 실행 (stage2.js)
    restartBtn2.draw();
  }

  //스테이지2 만지기 게임 종료 후
  if (isStage2_2) {
    image(happyfirstImg, 0,0)
    if (isHappyStage2_2CaptionActive) {
      caption(HappyStage2_2CaptionText);
      if (HappyStage2_2CaptionIndex < 5) {
        atHappyStage2_2CaptionBtn.draw();
      } else {
        toStage3Btn.draw();
      }
    }
  restartBtn2.draw();
  }

  //////스테이지3

  //(7) 스테이지 3 시작 (캡션)
  if (isStage3) {
    
    image(happybaseImg, 0,0);

    if (isHappyStage3CaptionActive) {
      caption(HappyStage3CaptionText);
      if (HappyStage3CaptionIndex < 4) {
        atHappyStage3CaptionBtn.draw();
      } else {
        image(happyletterImg, 0,0);
        HowCaption3("편지를 클릭해 보세요!")
        toletterBtn.draw();
        //restartBtn.draw();
      }
    }
    restartBtn2.draw();
  }

  
  
  //(9) 스테이지3 편지쓰기
  if (isStage3_1) {
    
    resetLetter();
    letterWrite(); //편지쓰기 게임 함수 실행  
    fill(100);
    textSize(20);
    text("max input: 200 characters",750, 695);
    restartBtn2.draw();
  }
  
  

  //(10) 스테이지3 편지 건네준 후 (캡션)
  if (isStage3_2) {
    
    resetLetterReady();

    
    if (isHappyStage3_1CaptionActive) {
      caption(HappyStage3_1CaptionText);
      if (HappyStage3_1CaptionIndex < 2) {
        atHappyStage3_1CaptionBtn.draw();
    } else {
        tohappybyeBtn.draw();
      }
    }
  restartBtn2.draw();
  }
  
  if(isStage3_3){
    
    
    fill(0,blackOpacity2);
    rect(0,0,1280,720);
    blackOpacity2 += 10;
    
    //image(blackImg, 0, 0);
    toendingBtn.draw();
  }
  
  if(isStage3_4) {
    image(ending, 0, 0);
    loadWrittenLetter();
    // fill(0,blackOpacity3);
    // rect(0,0,1280,720);
    // blackOpacity3 +=  -5;
    
    endingBtn.draw();
  }
  
  if(isEnding){
  background(0);
  textSize(25);
  fill(255);
  textAlign(CENTER,CENTER);
  textFont(captionFont);
  textLeading(35);
  text("반려동물의 죽음이 찾아오면, \n반려인들은 반려동물의 죽음을 인지하기 쉽지 않습니다. \n우울감을 느끼기도 하고, \n반려동물을 잘 돌보지 못했다는 죄책감을 느끼기도 합니다. \n \n 미국 수의사협회는 반려동물의 죽음으로 인한 심리적 타격을 덜 수 있는 \n 5가지 방안을 이야기합니다. \n 1. 반려동물이 없는 현실을 받아들이려 노력한다.\n 2. 슬픈 감정을 충분히 느낀다.\n 3. 반려동물과의 추억을 떠올린다.\n 4. 반려동물이 내게 어떤 의미였는지 되새긴다. \n5. 다른 사람과 감정을 공유한다. \n \n 반려동물을 떠나보낸 모든 사람들이 \n 이 게임을 통해 위로를 받았기를 바랍니다.",width/2,height/2);

    fill(0,blackOpacity4);
    blackOpacity4 += -10;
  rect(0,0,1280,720);
    
  restartBtn.draw();
  }
  
  showHideLetter();
  

} // 마지막 닫기




//// 제작자 숏컷
// function keyPressed(){
//   if(testMode){  
//     // 만지기게임 shortcut
//    if(key === '2'){ 
//   isThumbnail = false;
//   isStartmessage = false;
//  isProlog = false;
//  isPrologEnd = false;
//  isRoom = false;
//  isFirsthappy = false;
//  isFirsthappy1 = false;
//   isStage0_1 = false;
//      isStage1 = false;
//      isStage2 = false
//      isStage2_1 = true;
//      isStage2_2 = false;
//      isStage3 = false;
//      isStage3_1 = false;
//    }
  
  
//   //편지쓰기 shortcut (쓰는건 안됨)
//      if(key === '3'){ 
//   isThumbnail = false;
//   isStartmessage = false;
//  isProlog = false;
//  isPrologEnd = false;
//  isRoom = false;
//  isFirsthappy = false;
//  isFirsthappy1 = false;
//   isStage0_1 = false;
//      isStage1 = false;
//      isStage2 = false
//      isStage2_1 = false;
//      isStage2_2 = false;
//      isStage3 = false;
//      isStage3_1 = true;
//    }
    

  
//   }
// }
