$(document).ready(function () {

    var globalNumber = "";
    var tempNumber = "";
    //checkers
    var decimal = false;
    var sum = false;
    var subtract = false;
    var divide = false;
    var multiply = false;


    $("#decimal").on("click", function () {
       if(decimal !== true){
           globalNumber += ".";
           update(globalNumber);
           decimal = true;
       }
    });

    $("#clear").on("click", function () {
        globalNumber = "0";
        tempNumber = "0";
        decimal = false;
        updateBoolean();
        update(globalNumber);
        updateSmallText(tempNumber);
    });


    $("#add").on("click", function () {
        tempNumber = globalNumber;
        globalNumber = "0";
        update();
        updateSmallText(tempNumber + '+');
        updateBoolean();
        sum = true;
    });

    $("#minus").on("click", function () {
        tempNumber = globalNumber;
        globalNumber = "0";
        update();
        updateSmallText(tempNumber + '-');
        updateBoolean();
        subtract = true;
    });

    $("#divide").on("click", function () {
        tempNumber = globalNumber;
        globalNumber = "0";
        update();
        updateSmallText(tempNumber + '/');
        updateBoolean();
        divide = true;
    });

    $("#multiply").on("click", function () {
        tempNumber = globalNumber;
        globalNumber = "0";
        update();
        updateSmallText(tempNumber + '*');
        updateBoolean();
        multiply = true;
    });

    $("#submit").on("click", function () {
        var num2 = Number(globalNumber);
        var num1 = Number(tempNumber);
        var total = 0;
        if(sum === true){
            total = num1 + num2;
            update(total);
        }
        else if(subtract === true){
            total = num1 - num2;
            update(total);
        }
        else if(divide === true){
            total = num1/num2;
            update(total);
        }

    });

/*
=================================================================================================================
        NUMBERS

 */
    $("#one").on("click", function () {
        globalNumber = globalNumber.concat("1");
        update(globalNumber);
    });

    $("#two").on("click", function () {
        globalNumber = globalNumber.concat("2");
        update(globalNumber);
    });

    $("#three").on("click", function () {
        globalNumber = globalNumber.concat("3");
        update(globalNumber);
    });

    $("#four").on("click", function () {
        globalNumber = globalNumber.concat("4");
        update(globalNumber);
    });

    $("#five").on("click", function () {
        globalNumber = globalNumber.concat("5");
        update(globalNumber);
    });

    $("#six").on("click", function () {
        globalNumber = globalNumber.concat("6");
        update(globalNumber);
    });

    $("#seven").on("click", function () {
        globalNumber = globalNumber.concat("7");
        update(globalNumber);
    });

    $("#eight").on("click", function () {
        globalNumber = globalNumber.concat("8");
        update(globalNumber);
    });

    $("#nine").on("click", function () {
        globalNumber = globalNumber.concat("9");
        update(globalNumber);
    });
    //=========================================================================================================

    $("#plusMinus").on("click", function () {
        if(globalNumber !== "0"){
            var tempNum = Number(globalNumber);
            tempNum = tempNum * -1;
            globalNumber = tempNum.toString();
            update(globalNumber);
        }
    });

    function update(num) {
        $("#text").text(num);
    }

    function updateSmallText(num) {
        $("#textSmall").text(num);
    }

    function updateBoolean() {
        decimal = false;
        sum = false;
        subtract = false;
        divide = false;
        multiply = false;
    }
});


