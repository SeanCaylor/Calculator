// document.getElementById("display").innerHTML
//*Clicks over to zero for first button press while switching to user input B, keeping the sum inside of the display window. Admittedly, its only a problem on numbers over 10 trillion

var uiA = 0; //user input A
var uiB = 0; //user input B
var op = 0; //the operand
var display = document.getElementById("display").innerHTML;
var abSwitch = false; //whether to feed the calculation A or B, f:A t:B

function allClear() {
    var uiA = 0;
    var uiB = 0;
    var op = 0;
    var abSwitch = false;
    document.getElementById("display").innerHTML = 0;
} 

function calculate() {
    uiB = document.getElementById("display").innerHTML
    if (op == 0 || op > 4) {
        document.getElementById("display").innerHTML = "Err"
    }else {
        if (op == 1){
            document.getElementById("display").innerHTML = Number(uiA) + Number(uiB);
            display = 0;
        }else if (op == 2){
            document.getElementById("display").innerHTML = Number(uiA) - Number(uiB);
        }else if (op == 3){
            document.getElementById("display").innerHTML = Number(uiA) * Number(uiB);
        }else if (op == 4){
            document.getElementById("display").innerHTML = Number(uiA) / Number(uiB);
        }
        abSwitch = false;
    }
}

function clr() {
    document.getElementById("display").innerHTML = 0;
}

function press(key) {
    let inputEnable = screenOverflow();
    if (abSwitch = false) {
        document.getElementById("display").innerHTML = 0;
    }
    if (inputEnable == true) {
        if (key == "." && document.getElementById("display").innerHTML.indexOf(".") == -1 ){
            document.getElementById("display").innerHTML = "" + document.getElementById("display").innerHTML + key;
        }else if ((key != "." &&  document.getElementById("display").innerHTML == "0.") || (key != "." &&  document.getElementById("display").innerHTML == "0.0")) {
            document.getElementById("display").innerHTML = "" + document.getElementById("display").innerHTML + key;
        }else if (key != "." && document.getElementById("display").innerHTML != 0) {
            document.getElementById("display").innerHTML = "" + document.getElementById("display").innerHTML + key;
        }else if (key != "." && document.getElementById("display").innerHTML != ""){
            document.getElementById("display").innerHTML = key;
        }
    }
}

function screenOverflow(){
    if (document.getElementById("display").innerHTML.length <= 10){
        return true;
    }else {
        return false;
    } 
}

function setOP(operation){
    if (abSwitch == false){
        uiA = document.getElementById("display").innerHTML
        abSwitch = true;
        clr()
    } else {
        calculate()
    }
    
    if (operation == '+'){
        op = 1;
    }else if (operation == '-'){
        op = 2;
    }else if (operation == '*'){
        op = 3;
    }else if (operation == '/'){
        op = 4;
    }
}