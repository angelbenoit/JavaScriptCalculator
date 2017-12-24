$(document).ready(function () {

    var firstNumber = [];
    var secondNumber = [];
    var expression = "";

    //checks for decimal
    var decimal = false;

    $("td").on("click", function(){
        var item = $(this).text();
        var num = Number(item);
        if(Number.isInteger(num)){
            firstNumber.push(num);
            console.log("TEST");
            update(firstNumber);
        }
        else if(item === "+" || item === "-" || item === "*" || item === "/"){
            expression = item;
            secondNumber = firstNumber;
            firstNumber = [];
            $("#textSmall").text(secondNumber + expression);
            //updateSmallText(secondNumber);
        }
        else if(item === "=" && expression.length === 1){
            var num1 = Number(secondNumber);
            var num2 = Number(firstNumber);
            var result = eval(num1.toString() + expression + num2.toString());
            console.log(result);
            $("#text").text(result.toFixed(2));
        }
    });

    $("#decimal").on("click", function () {
        if(decimal === false){
            firstNumber.push(".");
            decimal = true;
        }
    });

    $("#clear").on("click", function () {
        clear();
    });



    function update(num) {
        var display = num.join("");
        $("#text").text(display);
    }

    function updateSmallText(num) {
        var display = num.join("");
        $("#textSmall").text(display);
    }

    function clear() {
        decimal = false;
        firstNumber = [];
        secondNumber = [];
        expression = "";
        $("#text").text("0");
        $("#textSmall").text("0");
    }

});


