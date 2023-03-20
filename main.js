song="";

function preload(){
    song=loadSound("Cradles.mp3");

}

function setup(){
canvas= createCanvas(650,500);
canvas.center;
webcam=createCapture(VIDEO);
webcam.hide();


poseNet=ml5.poseNet(webcam,modelLoaded);
    
    
poseNet.on('pose',gotPoses);

}



function draw(){
    image(webcam,0,0,650,500);
}

function play(){
song.play();
song.setVolume(1);
song.rate(1);
}



    
    function modelLoaded(){
    
    
    console.log('modelLoaded');
    
    
    }
    
    
rightWristX=0;
rightWristY=0;
leftWristX=0;
leftWristY=0;

    function gotPoses(results){


        if(results.length>0){
         
            console.log(results);
            rightWristX=results[0].pose.rightWrist.x;
            rightWristY=results[0].pose.rightWrist.y;

            leftWristX=results[0].pose.leftWrist.x;
            leftWristY=results[0].pose.leftWrist.y;

            console.log("Right Wrist X = "+ rightWristX+"Right Wrist Y = "+ rightWristY);

            console.log("Left Wrist X = "+ leftWristX+"Left Wrist Y = "+ leftWristY);

        }


    }

    function draw(){

        fill("red")
        stroke("black")
        circle(leftWristX,leftWristY,20);

       InNumberLeftWristY=Number(leftWristY);
       Bruh=floor(InNumberLeftWristY);
       volume=Bruh/500;
       document.getElementById("label_volume").innerHTML="Volume: "+volume;
       song.setVolume(volume);

    }

    
    
    