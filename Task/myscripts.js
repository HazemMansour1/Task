const convertBtn = document.getElementById("btn");
const cInput = document.getElementById("Cinput");
const output = document.getElementById("output");
convertBtn.addEventListener("click", function (e) 
{
    e.preventDefault();
    const enteredC = cInput.value;
    console.log(cInput.value);
    output.value = ( enteredC*(9/5) ) + 32;

}
)