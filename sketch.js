var ball;
var database;
var ref,position;


function setup(){
    database = firebase.database(); // first step.
    ref = database.ref("ball/position");// second step.
    ref.on("value", readCalls , showError);


    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
}




function draw(){
    background("white");
    if(position !== undefined){
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    
}
    drawSprites();

}


function changePosition(x,y){
   ref.set({
    x: position.x + x,
    y: position.y + y
   })
}



function readCalls(data){
    console.log(data.val());
    position = data.val();
    ball.x = position.x;
    ball.y = position.y;
}

function showError(){
    console.log("there is an error");

}