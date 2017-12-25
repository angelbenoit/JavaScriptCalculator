$(document).ready(function () {

    var firstNumber = [];
    var secondNumber = 0;
    var expression = "";

    //checks for decimal
    var decimal = false;
    var negative = false;

    $("td").on("click", function(){
        var item = $(this).text();
        var num = Number(item);
        if(Number.isInteger(num)){
            firstNumber.push(num);
            update(firstNumber);
        }
        else if(item === "±"){
            if(negative === false){
                firstNumber.unshift("-");
                update(firstNumber);
                negative = true;
            }
        }
        else if(item === "+" || item === "-" || item === "*" || item === "/"){
            expression = item;
            secondNumber = firstNumber.join("");
            firstNumber = [];
            decimal = false;
            negative = false;
            updateSmallText(secondNumber, expression);
        }
        else if(item === "=" && expression.length === 1){
            var num1 = Number(secondNumber);
            var num2 = Number(firstNumber.join(""));
            var result = eval(num1.toString() + expression + num2.toString());
            if(expression === "/" && num2 === 0){
                $("#text").text("Cannot divide by 0");
            }
            else{
                $("#text").text(result.toFixed(2));
            }

        }
    });


    $("#decimal").on("click", function () {
        if(decimal === false){
            firstNumber.push(".");
            update(firstNumber);
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

    function updateSmallText(num, exp) {
        $("#textSmall").text(num + exp);
    }

    function clear() {
        decimal = false;
        negative = false;
        firstNumber = [];
        secondNumber = [];
        expression = "";
        $("#text").text("0");
        $("#textSmall").text("0");
    }

});


