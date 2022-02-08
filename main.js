function setup(){
    video = createCapture(VIDEO);
    video.size(550 , 500);
    canvas = createCanvas(550 , 500);
    canvas.position(560 , 100);
    video.position(0 , 100);

    poseNet = ml5.poseNet(video , modelLoded);
    poseNet.on('pose' , gotPoses);
}

function modelLoded(){
    console.log("PoseNet model Initialized!");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}

function background(){
    background('#969A97');
}