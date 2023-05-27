const display = document.querySelector("#display");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const plus = document.querySelector("#plus");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const minus = document.querySelector("#minus");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const multiply = document.querySelector("#multiply");
const zero = document.querySelector("#zero");
const decimal=document.querySelector("#decimal");
const division = document.querySelector("#division");
const equalTo = document.querySelector("#equalto");
var calculate =(number)=>{
    if(number==='%')
    {
        display.value=parseFloat(display.value/100);
    }
    else{
    display.value=display.value+number;
    }
}
var result= ()=>{
    try{
        display.value=eval(display.value);
    }
    catch{
        display.value="invalid value";
    }
};
document.getElementById("delete").addEventListener("click",()=>{
    display.value=display.value.substr(0,display.value.length-1);
});




