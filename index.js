const display=document.getElementById("display");

function displayIn(input){
    display.value += input;
}

function calculate(){
    try{
        display.value=eval(display.value)
     }
     catch(error){
        display.value="Error";
     }
}
function backspaceIn(){
    display.value=display.value.slice( 0,-1);
}

function clearIn(){
  display.value = "";
}