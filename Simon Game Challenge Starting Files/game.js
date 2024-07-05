var buttonColours = ["green","red","yellow","blue"];
var gamePattern = [];
var userClickedPattern = [];

var level = 0;

$(document).on("keypress",function(event){
    if((event.key === "a" || event.key === "A") && level === 0 ){
        $("h1").text("Leval " + level);
        nextSequence();
    }
});

$(".btn").on("click", function(){
    var userChosenColour = $(this).attr("id");

    userClickedPattern.push(userChosenColour);

    animatePress(userChosenColour);

    playSound(userChosenColour);

    console.log(level)
    console.log(userClickedPattern[level])
    checkAnswer(userClickedPattern[level-1]);
    
});

function nextSequence(){

    $("h1").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);

    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    
    level += 1; 
}

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");

    setTimeout(function(){
    $("#"+currentColour).removeClass("pressed");
    }, 100);
}

function checkAnswer(colorLevel){
    var answer = ""
    if(colorLevel === gamePattern[level-1]){
        
        console.log("succes");

        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
              nextSequence();
            }, 1000);
    
          }
    }else{
        console.log("wrong");

        var audio = new Audio("sounds/wrong.mp3");
        audio.play();

        $("body").addClass("game-over");

        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);

        $("#level-title").text("Game Over, Press Any Key to Restart");
        $(document).on("click",function(){
            startOver();
        })
    }
}

function startOver(){
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
}