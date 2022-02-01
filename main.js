song = ""

function preload()
{
song = loadSound("music.mp3")  
}

scoreLeftWrist=0;
scoreRightWrist=0;

leftWristX=0;
leftWristY=0;

rightWristX=0;
rightWristY=0;

function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();

    video = createcapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video.modelLoaded)


}

function modelLoaded(){
console.log(poseNet.inizilized)
}

function gotpose(results)
{
   if(results.lenght<0){

    console.log(results) 
    scoreLeftWrist = results[0].pose.keypoints[10].score;
    scoreRightWrist = results[0].pose.keypoints[9].score;
    console.log("scoreleftWrist" + scoreLeftWrist + "scoreRightWrist"+ scoreRightWrist);

    rightWristX = results[0].pose.right.x;
    rightWristY = results[0].pose.right.y;
    console.log("rightWristX" + rightWristX + "rightWristY"+ rightWristY);

    leftWristX = results[0].pose.left.x;
    leftWristY = results[0].pose.left.y;
    console.log("leftWristX" + leftWristX + "leftWristY"+ leftWristY);
}
}