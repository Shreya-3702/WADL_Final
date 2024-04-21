
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;
$(document).keypress(()=>{
    if(!started)
    {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
})
$(".btn").click(function(event){
    
        var userChosenColour = $(this).attr("id");
        userClickedPattern.push(userChosenColour);
        playSound(userChosenColour);
        animatePress(userChosenColour);
        
        checkAnswer(userClickedPattern.length - 1);
    
});

function nextSequence() {

    userClickedPattern = [];
    level++;
    $("#level-title").text("level "+level);
        
    var randomNumber = Math.round(Math.random() * 3);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    console.log(randomChosenColour);

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeIn(100);
    playSound(randomChosenColour);   

}


function playSound(name)
{
    var audio = new Audio("sounds/"+name + ".mp3");
    audio.play();
};
function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");

    },100);
}

 
function checkAnswer(currentLevel)
{
    if(userClickedPattern[currentLevel] == gamePattern[currentLevel])
    {
        console.log(userClickedPattern);
        console.log(gamePattern);
        console.log("success");
        if(userClickedPattern.length == gamePattern.length)
        {
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }
    else
    {
        console.log(userClickedPattern);
        console.log(gamePattern);
        console.log("wrong");
        
        playSound("wrong");

        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");
        setTimeout(function(){
            $("body").fadeOut(100).fadeIn(100).fadeIn(100);
            $("body").removeClass("game-over");
        },200);
       
        startOver();
    }
}

function startOver()
{
    started = false;
    level = 0;
    gamePattern = [];
    
}

