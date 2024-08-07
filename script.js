
const calculator_data = {num1 : 0, num2 : 0, operation : "", currentNumber : "1"}

function numberInput(num)
{
    
    if (calculator_data.currentNumber === "1")
    {
        calculator_data.num1 = (calculator_data.num1 * 10) + num;
        document.getElementById("result").textContent = calculator_data.num1;
        
    }

    else if (calculator_data.currentNumber === "2")
    {
        calculator_data.num2 = (calculator_data.num2 * 10) + num;
        document.getElementById("result").textContent = calculator_data.num2;
        
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
                allClear(NaN);
                return 0;
                
                
            }
            return num1 / num2;
        default:
            return 0;
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

function allClear(resultValue)
{
    calculator_data.num1 = 0;
    calculator_data.num2 = 0;
    calculator_data.operation = "";
    calculator_data.currentNumber = "1";
    document.getElementById("result").textContent = resultValue;
}
