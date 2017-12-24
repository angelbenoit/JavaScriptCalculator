$(document).ready(function () {

    var firstNumber = [];
    var secondNumber = [];

    //checks for decimal
    var decimal = false;

    $("td").on("click", function(){
        var item = $(this).text();
        item = Number(item);
        if(Number.isInteger(item)){
            firstNumber.push(item);
            console.log("TEST");
            update(firstNumber);
        }
    });

    $("#decimal").on("click", function () {
        if(decimal === false){
            firstNumber.push(".");
            decimal = true;
        }
    });

    $("#clear").on("click", function () {
        decimal = false;
        firstNumber = [];
        secondNumber = [];
        $("#text").text("0");
    });



    function update(num) {
        var display = num.join("");
        $("#text").text(display);
    }

    function updateSmallText(num) {
        $("#textSmall").text(num);
    }


});


