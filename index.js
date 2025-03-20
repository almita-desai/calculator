
const display=document.getElementById("display");

//function to append input to display
function appendtodisplay(input){
    display.value+=input;
    scrollToEnd(); 
}
function Clear(){
    display.value="";
}
function Calculate(){
    try{
        //evaluates the expression
        display.value=eval(display.value);
    }
    catch(error){
        display.value='Error'
    }
}
function scrollToEnd() {
    display.scrollLeft = display.scrollWidth;
}

//event listener to get inputs from keyboard
document.addEventListener("keydown", function(event) {
    if (/[\d+\-*/.=]/.test(event.key) || 
        event.key === "Enter" || 
        event.key === "Backspace" || 
        event.key === "Escape") {
        event.preventDefault();  
    }

    if (/[\d+\-*/.=]/.test(event.key)) {
        appendtodisplay(event.key);
    } else if (event.key === "Enter") {
        Calculate();
    } else if (event.key === "Backspace") {
        display.value = display.value.slice(0, -1);
    } else if (event.key === "Escape") {
        Clear();
    }
});
