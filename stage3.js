function letterWrite() {
  // draw - 3-1
  image(letter, 0, 0);
  quitletterBtn.draw();
}

function setupLetter() {
  // setup
  textArea = createElement("textArea");
  textArea.style("background-color", "#FDF8E0");
  textArea.style("padding", "30px");
  textArea.style("border", "none");
  // textArea.style("border-radius", "30px");
  textArea.position(370, 100);
  textArea.size(440, 500);
  textArea.id("myTextArea");
  textArea.attribute("maxlength", 200);
  textArea_show = false;
  textArea_reset = false;
  fill(100);
  text("max input: 200 characters",750, 550);
}

function resetLetter() {
  // draw 3-1
  if (!textArea_reset) {
    textArea.value("");
    textArea_reset = true;
  }
}

function resetLetterReady() {
  // draw 3-2
  textArea_reset = false;
}

function showHideLetter() {
  // draw
  if (textArea_show) {
    textArea.show();
  } else {
    textArea.hide();
  }
}
function saveLetterText() {
  letterText = document.getElementById("myTextArea").value;
  console.log("save letter");
  console.log(letterText);
}

function loadWrittenLetter() {
  console.log("3_3 loaded", letterText);
  //textAlign(CENTER, CENTER);
  //textAlign(CENTER, TOP);
  textAlign(LEFT);
  //textLeading(10);
  let letterWidth = textWidth(letterText); //Calculates and returns the width of any character or text string

  textSize(23);
  text(letterText, width / 2, 100, 200);
  //line(letterWidth, 50, letterWidth, 80);
  //textWrap(WORD);
  //textWrap(CHAR);
}
