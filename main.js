noseX=0;
noseY=0;
distance=0;
rightwristX=0;
leftwristX=0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 450); 
    canvas=createCanvas(550,450);
canvas.position(600,110);
Da_VARRIABLE=ml5.poseNet(video,modelLoaded)
      Da_VARRIABLE.on("pose",gotPoses)   
}
function preload(){

}
function draw(){
background("aqua");
fill("blue");
textSize(distance);
text("this block is strechy",100,200);
}
function modelLoaded(){
console.log("DA MODEL IS LOADED!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
}
function gotPoses(results){

if(results.length>0){
    console.log(results)
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("The nose x cord is "+noseX+" and the nose y cord is "+noseY+".");
    rightwristX=results[0].pose.rightWrist.x;
    leftwristX=results[0].pose.leftWrist.x;
    console.log("the x coordanite of the right wrist is "+rightwristX+" and the x coordanite of the left wrist is"+leftwristX+".");
    distance=Math.floor(leftwristX-rightwristX);
}
}