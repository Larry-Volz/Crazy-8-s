$(function(){

startButtonHandlers();

function startButtonHandlers() {
    $("#game-start-btn").on("click", function (){
        console.log("click");
        $("#game-start").hide();
        //TODO: put axios.get() calls here to start game/get deck# from API
        //let $deckNum = ...

        $("#join-btn-clicked").hide();
        $("#card-fan").hide();
        $("#start-btn-clicked").show();
        $("#card-game-area").show();
    });

    $("#join-game-btn").on("click", ()=>{
        $("#game-start").hide();
        $("#join-btn-clicked").show();
    });

    $("#get-game-code").on("submit", (evt)=>{
        evt.preventDefault();
        let $deckNum = $("#game-num-input").val();
        $("#join-btn-clicked").hide();
        $("#card-fan").hide();
        // $("#start-btn-clicked").show();
        $("#card-game-area").show();
    })
}













})