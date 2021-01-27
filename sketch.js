
var child,school,flag,Up,Down,Right,Left;
var backgroundImg, happyImg, sadImg, schoolImg, flagImg,upImg, downImg, rightImg, leftImg;

function preload(){
  backgroundImg = loadImage("background.jpg");
  happyImg  = loadImage("happy emoji.png");
  sadImg = loadImage("sad emoji.png");
  schoolImg = loadImage("school.png");
  upImg = loadImage("up.png");
  downImg = loadImage("down.png");
  rightImg = loadImage("right.png");
  leftImg = loadImage("left.png");

}

function setup() {
  createCanvas(displayWidth,displayHeight);
  school = createSprite(displayWidth/2,50,10,10);
  school.addImage(schoolImg);
  school.scale = 0.5;


  child = createSprite(displayWidth/2,displayHeight/2,10,10);
  child.addImage(happyImg);
  child.scale = 0.1;

  Up = createSprite(child.x-100,child.y+100,10,10);
  Up.addImage(upImg);
  Up.scale = 0.16
  Down = createSprite(child.x-50,child.y+100,10,10);
  Down.addImage(downImg);
  Down.scale = 0.16;
  Right = createSprite(child.x+50,child.y+100,10,10);
  Right.addImage(rightImg);
  Right.scale = 0.16;
  Left = createSprite(child.x+100,child.y+100,10,10);
  Left.addImage(leftImg);
  Left.scale = 0.16;
}



function draw() {
  background(backgroundImg);

  
  camera.y = child.y;
  camera.x = child.x; 

  allOldText();
  allNewText();

  if(keyDown(LEFT_ARROW) || mousePressedOver(Left)) {
    child.x = child.x-2;
    Up.x = Up.x-2;
    Down.x = Down.x-2;
    Right.x = Right.x-2;
    Left.x = Left.x-2;
  }

  

  if(keyDown(RIGHT_ARROW) || mousePressedOver(Right)){
    child.x = child.x+2;
    Up.x = Up.x+2;
    Down.x = Down.x+2;
    Right.x = Right.x+2;
    Left.x = Left.x+2;
  }

  if(keyDown(UP_ARROW) || mousePressedOver(Up)){
    child.y = child.y-2;
    Up.y = Up.y-2
    Down.y = Down.y-2;
    Right.y = Right.y-2;
    Left.y = Left.y-2;
  }

  if(keyDown(DOWN_ARROW) || mousePressedOver(Down)){
    child.y = child.y+2;
    Up.y = Up.y+2
    Down.y = Down.y+2;
    Right.y = Right.y+2;
    Left.y = Left.y+2;
  }

  if(child.x < displayWidth/2){
    child.addImage(sadImg)
  }

  if(child.x > displayWidth/2){
    child.addImage(happyImg)
  }

  
  line(displayWidth/2,-20000,displayWidth/2,displayHeight+20000)
  textSize(24);
  textFont("Georgia");
  fill(255);
  text("পুরানো শিক্ষানীতি",displayWidth/2 - 300,50)
  text("নতুন শিক্ষানীতি",displayWidth/2 + 200,10)
  drawSprites();
}

function allOldText(){
  textSize(18);
  textFont("Alatsi");
  fill(255);

  text("10 + 2 ", displayWidth/2 - 300,displayHeight/2);
  text("স্কুলিং সিস্টেম", displayWidth/2 - 300,displayHeight/2 + 50);

  text("এই নীতিটি কেবলমাত্র চিহ্ন এবং শিক্ষাবিদদের উপর দৃষ্টি নিবদ্ধ করে", displayWidth/2 - 700,displayHeight/2 - 200);

  text("এই নীতি শিক্ষার্থীদের নিজস্ব ভাষায় অধ্যয়ন করতে দেয় না", displayWidth/2 - 1300,displayHeight/2 - 100);
  
  text("আমরা আমাদের কোনও দক্ষতায় কোনও ইন্টার্নশিপ পাচ্ছি না", displayWidth/2 - 1000,displayHeight/2 + 200);

  text("পরীক্ষাগুলি সবেমাত্র ইংরেজি এবং হিন্দিতে অনুষ্ঠিত হয়", displayWidth/2 - 1000,displayHeight/2 + 70);

  text("শিক্ষকদের কেবলমাত্র একজন ছাত্রকে র‌্যাঙ্ক দেওয়ার অধিকার রয়েছে", displayWidth/2 -700, displayHeight/2 +300);

  text("শিক্ষার্থীরা কেবল একাডেমিক পারফরম্যান্সের ভিত্তিতে র‌্যাঙ্কড হয়", displayWidth/2 - 1500,displayHeight/2 - 270);

  text("শিক্ষার্থীদের কোডিং, মৃৎশিল্প ইত্যাদির মতো কোনও দক্ষতা শেখানো হয় না", displayWidth/2 - 1200,displayHeight/2  + 400);

  text("বোর্ড পরীক্ষা বার্ষিক অনুষ্ঠিত হয়", displayWidth/2 - 1400,displayHeight/2 + 10);

  text("কোন সাংস্কৃতিক অধ্যয়ন সরবরাহ করা হয়", displayWidth/2 - 1400,displayHeight/2 +300);

  text("যোগ্যতা শুধুমাত্র কোর্স শেষ করার পরে প্রদান করা হয়", displayWidth/2 - 1600,displayHeight/2 + 140);

  text("কলেজের ভর্তির জন্য 12 নম্বর গুরুত্বপূর্ণ", displayWidth/2 - 1800,displayHeight/2 - 200);

  text("ফি বাধা নেই", displayWidth/2 - 1400,displayHeight/2 + 480);

  text("শিক্ষার্থীরা বিষয়গুলিতে সীমাবদ্ধ", displayWidth/2 - 1750,displayHeight/2 + 350);
  
}

function allNewText(){
  textSize(18);
  textFont("Alatsi");
  fill(255);

  text(" 5 + 3 + 3 + 4 ", displayWidth/2 + 50,displayHeight/2);
  text("স্কুলিং সিস্টেম", displayWidth/2 + 50,displayHeight/2 + 50);

  text("এই নীতিটি কেবল চিহ্ন এবং শিক্ষাবিদদের উপর দৃষ্টি নিবদ্ধ করে না, এটি দক্ষতা এবং অ-একাডেমিক ক্রিয়াকলাপগুলিতেও মনোনিবেশ করে", displayWidth/2 + 200,displayHeight/2 - 250);

  text("শিক্ষার্থীরা এখন তাদের আঞ্চলিক ভাষায় অধ্যয়ন করতে পারে", displayWidth/2 + 300,displayHeight/2 - 100);
  
  text("আমরা আমাদের স্কুল-বয়সে আমাদের দক্ষতায় ইন্টার্নশিপ পেতে পারি", displayWidth/2 + 500,displayHeight/2 + 200);

  text("এখন পরীক্ষাগুলি আঞ্চলিক ভাষায় পাওয়া যায়", displayWidth/2 + 250,displayHeight/2 + 120);

  text("শিক্ষক এবং শিক্ষার্থীরা একটি শিশুকে স্থান দেয়", displayWidth/2 +250, displayHeight/2 +300);

  text("শিক্ষার্থীদের একাডেমিক পারফরম্যান্স এবং সৃজনশীলতার ভিত্তিতেও স্থান দেওয়া হয়", displayWidth/2 + 1000,displayHeight/2 - 310);

  text("শিক্ষার্থীদের কোডিং, মৃৎশিল্প ইত্যাদির মতো অনেক দক্ষতা শেখানো হয়", displayWidth/2 + 700,displayHeight/2  + 400);

  text("এখন বোর্ড পরীক্ষা দুটি সেমিস্টারে অনুষ্ঠিত হয়", displayWidth/2 + 900,displayHeight/2 + 10);

  text("স্কুলে ভারতীয় সংস্কৃতি পড়ানো হয়", displayWidth/2 + 900,displayHeight/2 +300);

  text("যোগ্যতা সম্পূর্ণ কোর্সের পরে প্রদান করা হয় এবং কোর্সগুলির মধ্যে শংসাপত্র এবং ডিপ্লোমা সরবরাহ করা হয়", displayWidth/2 + 1100,displayHeight/2 + 140);

  text("কলেজের ভর্তির জন্য 12 নম্বর গুরুত্বপূর্ণ নয়, শিক্ষার্থীরা প্রবেশিকা পরীক্ষা দিতে পারে", displayWidth/2 + 800,displayHeight/2 - 200);

  text("ফি বাধা আছে", displayWidth/2 + 300,displayHeight/2 + 400);

  text("শিক্ষার্থীরা চাইলে যে কোনও বিষয় নিতে পারে", displayWidth/2 + 1250,displayHeight/2 + 350);
  
}