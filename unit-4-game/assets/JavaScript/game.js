$(document).ready(function() {

var winNum = 0;
var loseNum = 0;

    $("#beginButton").on("click", function() {
        var randomNumArray = [];
        var playerCount = 0;
        var targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

        // for loop intended to populate the array that will hold the hidden gem values
        function arrayGen() {
            for (var i = 0; i < 4; i++) {
                console.log("For Loop Begin");
                if (randomNumArray.length == 0) {
                    var random = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
                    randomNumArray.push(random);
                    console.log(randomNumArray);
                } else if ((randomNumArray.length < 4) && (randomNumArray.length > 0)) {
                    var random = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
                    randomNumArray.push(random);
                    console.log(randomNumArray);
                } else if (randomNumArray.length = 4) {
                    console.log("Finished Array Synthesis");
                }
            }
        }

        arrayGen();

        $("#BluGem").on("click", function() {
            playerCount += randomNumArray[0];
            $("#PlayerCount").text(playerCount);
            winEval();
        });

        $("#GrenGem").on("click", function() {
            playerCount += randomNumArray[1];
            $("#PlayerCount").text(playerCount);
            winEval();
        });

        $("#RedGem").on("click", function() {
            playerCount += randomNumArray[2];
            $("#PlayerCount").text(playerCount);
            winEval();
        });

        $("#YellGem").on("click", function() {
            playerCount += randomNumArray[3];
            $("#PlayerCount").text(playerCount);
            winEval();
        });

        $("#TargetCount").text(targetNumber);

        console.log("Code is working, captain")

        function winEval() {
            if (playerCount == targetNumber) {
                console.log("EvalWin")
                alert("You win!");
                var r = confirm("Would you like to play again?");
                    if (r == true) {
                        winNum += 1;
                            $("#winCount").text("Wins: " + winNum);
                        randomNumArray = [];
                            arrayGen();
                        playerCount = 0;
                            $("#PlayerCount").text(playerCount);
                        targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
                            $("#TargetCount").text(targetNumber);
                    } else {
                        alert("Have a good day");
                    }
            } else if (playerCount > targetNumber) {
                console.log("EvalLose")
                alert("Defeat!");
                var r = confirm("Would you like to play again?");
                    if (r == true) {
                        loseNum += 1;
                            $("#lossCount").text("Losses: " + loseNum);
                        randomNumArray = [];
                            arrayGen();
                        playerCount = 0;
                            $("#PlayerCount").text(playerCount);
                        targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
                            $("#TargetCount").text(targetNumber);
                    } else {
                        alert("Have a good day");
                    }
            }
            console.log("Code is at the end, Captain")
        }
    });
});