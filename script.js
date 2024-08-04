
const calculator_data = {num1 : 0, num2 : 0, operation : "", currentNumber : "1"}

function numberInput(num)
{
    
    if (calculator_data.currentNumber === "1")
    {
        calculator_data.num1 = (calculator_data.num1 * 10) + num;
        
    }

    else if (calculator_data.currentNumber === "2")
    {
        calculator_data.num2 = (calculator_data.num2 * 10) + num;
        
    }

    else
    {
        console.log("Error!");
    }
    console.log(calculator_data);
}

function operatorInput(op)
{
    const operations = new Set(["+","-","*","/"]);
    console.log(op);

    if (operations.has(op))
    {
        calculator_data.operation = op;
        if (calculator_data.currentNumber == "1")
        {
            calculator_data.currentNumber = "2";
        }

        else if (calculator_data.currentNumber == "2")
        {
            calculator_data.currentNumber = "1";
        }
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

function evaluate_expn()
{
    //TODO: Handle case where the result of the operation is NaN
    console.log(calculator_data);
    calculator_data.num1 = operation(calculator_data.num1,calculator_data.num2,calculator_data.operation); 
    calculator_data.num2 = 0;
    calculator_data.currentNumber = "1";
    console.log(calculator_data.num1);
    document.getElementById("result").textContent = calculator_data.num1;
}


