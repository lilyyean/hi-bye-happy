let gauge = 0;
let happyHip;
let happyStomach;
let happyHappy;
let offset = 0;
var mouseRange = 200;

function happyTouch() {
  background(stage2Img);

  image(loveGauge1, 0, 0);

  fill(230, 128, 143);
  rect(1067, 548, 15, -gauge, 100);

  if (gauge >= 0 && gauge < 140) {
    if (mouseIsPressed) {
      if (
        mouseX > width / 2 + 120 &&
        mouseX < width / 2 + 254 &&
        mouseY > height / 2 - 15 &&
        mouseY < height / 2 + 200
      ) {
        offset = random(-2, 2);
        gauge += 8;
      }
    }
    image(happyHip, 0 + offset, 0 + offset);
    image(click, 0, 0);
    HowCaption("▶엉덩이◀ 를 쓰다듬어줘");
  } else if (gauge >= 140 && gauge < 280) {
    if (mouseIsPressed) {
      if (
        mouseX > width / 2 - 110 &&
        mouseX < width / 2 + 20 &&
        mouseY > height / 2 + 50 &&
        mouseY < height / 2 + 210
      ) {
        offset = random(-2, 2);
        gauge += 8;
      }
    }
    image(happyStomach, 0 + offset, 0 + offset);
    image(click, 0, 0);
    image(heart2, 0, 0);
    HowCaption("▶배◀ 도 만져주면 좋겠어!");
    mouseRange = 400;
  } else if (gauge >= 280) {
    gauge = 280;
    image(happyfeelgood, 0, 0);

    setTimeout(() => {
      isStage2_1 = false;
      isStage2_2 = true;
      isHappyStage2_2CaptionActive = true;
    }, 3000);
  }
  
  if (gauge == 272){
    bark3.play();
  }

  if (gauge == 140) {
    //if(mouseIsPressed){
    //if (
    //mouseX > width / 2 &&
    //mouseX < width / 2 + 200 &&
    //mouseY > height / 2 &&
    //mouseY < height / 2 + 200
    //) {
    image(heart2, 0, 0);
    //}
  } else if (gauge == 280) {
    //if(mouseIsPressed){
    //if (
    //mouseX > width / 2 &&
    //mouseX < width / 2 + 200 &&
    //mouseY > height / 2 &&
    //mouseY < height / 2 + 200
    //) {
    image(heart3, 0, 0);
    //}
  }
}
