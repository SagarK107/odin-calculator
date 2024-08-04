
const calculator_data = {num1 : 0, num2 : 0, operation : "", currentNumber : "1"}

function numberInput(num,whichNumber)
{
    if (whichNumber === "1")
    {
        calculator_data.num1 = num;
        calculator_data.currentNumber = "2";
    }

    else if (whichNumber === "2")
    {
        calculator_data.num2 = num;
        calculator_data.currentNumber = "1";
    }

    else
    {
        console.log("Error!");
    }
}

function operation(num1,num2,operation)
{
    switch(operation)
    {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 === 0)
            {
                return NaN;
            }
            return num1 / num2;
        default:
            return NaN;
    }
}


