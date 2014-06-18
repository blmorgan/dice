//____________________________
//Program   : DiceEmulator.js
//Author    : Ben Morgan
//Date      : 6/17/2014
//Purpose   : Create a dice/spinner emulator.
//Updated   : 
//Last Run  :   
//____________________________

function Emulator() {
var LowNumber = document.getElementById("LowNumber").value; //lower bound
var HighNumber = document.getElementById("HighNumber").value; //upper bound

//verify input

if (! LowNumber) {
        confirm("Enter valid lower number.");
        return;
}
if (! HighNumber) {
        confirm("Enter valid upper number.");
        return;
}
if (Number(HighNumber) - Number(LowNumber) <= 0) {
        confirm("High number must be greater than low number.");
        return;
}

//generate number

var result = Math.floor(Math.random() * (Number(HighNumber) - Number(LowNumber) + 1)) + Number(LowNumber);

document.getElementById("Result").innerHTML = result;

};