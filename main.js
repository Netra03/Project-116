mustacheX = 0;
mustacheY = 0;

function preload() {
    mustache = loadImage('https://i.postimg.cc/pr4grXkk/mustache-png.webp');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 300, 300);
    fill(255,0,0);
    stroke(255,0,0);
    image(mustache, mustacheX-23, mustacheY, 50, 30);    
}

function take_snapshot() {
    save('netra.png');
}

function modelLoaded() {
    console.log('Model is loaded');
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        console.log("mustache x  = " + mustacheX);
        console.log("mustache y = " + mustacheY);
        mustacheX = results[0].pose.nose.x;
        mustacheY = results[0].pose.nose.y;
    }
}



