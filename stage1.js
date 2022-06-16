let isSlipperOn = false;
let isCushionOn = false;
let isBoneOn = false;

//추억 닫기
function MemoryCloseCSS() {
  MemoryCloseBtn.locate(width*12/16,35);
  MemoryCloseBtn.resize(103, 42);
  MemoryCloseBtn.stroke = "rgba(0,0,0,0)";
  MemoryCloseBtn.color = "#FF6699";
  MemoryCloseBtn.cornerRadius = 10;
  MemoryCloseBtn.text = "추억 닫기";
  MemoryCloseBtn.textSize = 24;
  MemoryCloseBtn.textFont = captionFont;

}

MemoryCloseBtn.onPress = () => {
  isCushionment = false;
  isSlipperment = false;
  isBonement = false;
  bgImg = roomImg;
  isMemoryClose = true
}
MemoryCloseBtn.onHover = () => {
  cursor('grab');
}
MemoryCloseBtn.onOutside = () => {
  cursor('');
}

  
//cushion 클릭 시 호버 
function cushionBtnCSS() {
  cushionBtn.locate(575, 486);
  cushionBtn.resize(205, 100);
  cushionBtn.stroke = "rgba(0,0,0,0)";
  cushionBtn.color = "rgba(0,0,0,0)";
  cushionBtn.text = "";
}
cushionBtn.onHover = () => {
  cursor('grab');
    if(isCushionOn==false){
  image(cushionH, 0,0);
}
}
cushionBtn.onOutside = () => {
  cursor('');
}
cushionBtn.onPress = () => {
  isCushionment = true;
  bgImg = memoryoneImg;
}



//slipper 클릭 시 호버 
function slipperBtnCSS() {
  slipperBtn.locate(1005, 610);
  slipperBtn.resize(100, 50);
  slipperBtn.stroke = "rgba(0,0,0,0)";
  slipperBtn.color = "rgba(0,0,0,0)";
  slipperBtn.text = "";
}
slipperBtn.onHover = () => {
  cursor('grab');
  if(isSlipperOn==false){
  image(slipperH, 0,0);
}
}
slipperBtn.onOutside = () => {
  cursor('');
}
slipperBtn.onPress = () => {
  isSlipperment = true;
  bgImg = memorytwoImg;
}


//bone 클릭 시 호버 
function boneBtnCSS() {
  boneBtn.locate(373, 470);
  boneBtn.resize(160, 55);
  boneBtn.stroke = "rgba(0,0,0,0)";
  boneBtn.color = "rgba(0,0,0,0)";
  boneBtn.text = "";
}
  boneBtn.onHover = () => {
  cursor('grab');
      if(isBoneOn==false){
  image(boneH, 0,0);
}
  }
  boneBtn.onOutside = () => {
  cursor('');
}
  boneBtn.onPress = () => {
  isBonement = true;
  bgImg = memorythreeImg;
}

  
