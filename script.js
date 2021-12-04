// Teachable Machine
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/TeachableMachine/1-teachable-machine.html
// https://editor.p5js.org/codingtrain/sketches/PoZXqbu4v

// The video
let video;
// For displaying the label
let label = "waiting...";
// The classifier
let classifier;

let modelURL = 'https://teachablemachine.withgoogle.com/models/liAI-eXcn/';

// STEP 1: Load the model!
function preload() {
  classifier = ml5.imageClassifier(modelURL + 'model.json');
  
}


function setup() {
  createCanvas(390,450, 150, 150);
  
  // Create the video
  video = createCapture(VIDEO);
  video.hide();
  // STEP 2: Start classifying
  classifyVideo();
}

// STEP 2 classify the videeo!
function classifyVideo() {
  classifier.classify(video, gotResults);
}

function draw() {
  background("Blue");

  // Draw the video
  image(video, 80, 100, 230, 230);

  // STEP 4: Draw the label
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);
  text(label, width / 2, height - 16);

  // Pick an emoji, the "default" is train
  let emoji = " 😷 ";
  if (label == "Mass") {
    emoji = "😷";
  } else if (label == "No Mass") {
    emoji = "😴";
    
  } 
  

  // Draw the emoji
  textSize(30);
  textAlign(CENTER, CENTER);
  text(emoji, width / 2, height - 60);
}

// STEP 3: Get the classification!
function gotResults(error, results) {
  // Something went wrong!
  if (error) {
    console.error(error);
    return;
  }
  // Store the label and classify again!
  label = results[0].label;
  classifyVideo();
}
