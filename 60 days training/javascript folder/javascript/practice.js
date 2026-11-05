let firstnumber=document.querySelector("#num1")
let secoundnumber= document.querySelector("#num2")
const calculatorButtons = document.querySelector("#calculatorButtons");
const calculatorResult = document.querySelector("#calculatorResult");


function calculate(a,b,operation){

    if(operation==="add"){
        return a+b;
    }
    else if(operation==="subtract"){
        return a-b;
    }
    else if (operation === "multiply") {
        return a * b;
    } 
    else if (operation === "divide") {
        if (b === 0) {
            return "Cannot divide by zero.";
    }
    return a / b;
  }

  return "Unknown operation.";
}


calculatorButtons.addEventListener("click" ,(r)=>{
    const clickButton=r.target.closest("button[data-operation]");

    if(!clickButton){
        return;
    }

    if(firstnumber.value.trim()===""||secoundnumber.value.trim()===""){
        calculatorResult.textContent="enter both input";
    }

    const a= Number(firstnumber.value);
    const b=Number(secoundnumber.value);
    const operation =clickButton.dataset.operation;

    const result=calculate(a,b,operation);

    calculatorResult.textContent=`Result: ${result}`;

}
)