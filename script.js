const buttons= document.querySelectorAll("button");
//console.log(buttons);
const displayElm=document.querySelector("#result");
let textToDisplay="";
const symbols =["+", "-","*","/"];
buttons.forEach(btn=>{
   btn.addEventListener("click",()=>{
    displayElm.style.backgroundColor = "";
    displayElm.style.color="";
       const val= btn.innerText;//grabing the data from innertext after==
       const lastChar=textToDisplay[textToDisplay.length-1]; 
       //console.log(val);
       //console.log(btn);
       //displayElm.innerText=val;
       //dont allow to click symbol at the begining
       //if . exist, dont let user enother .
       if(val==="." && textToDisplay.includes(".")) return;
    
      
        

       if(textToDisplay.length<1 && symbols.includes(val)) return;//return stops out of execution
       if(symbols.includes(lastChar)&& symbols.includes(val))
       {
        textToDisplay=textToDisplay.slice(0,-1);

           //textToDisplay+= val;
       }
       //if operator already exists,replace it with new one
       if(val=== "AC")//clear everything from display
       {
           return resetDisplay();
       }
       //total calulated valur
       if(val=== "="){
           //const lastChar=textToDisplay[textToDisplay.length-1];
           if(symbols.includes(lastChar))
           {
            textToDisplay=textToDisplay.slice(0,-1);
           }

           return onTotal();
       }
       //cut the last charcter from the display
       if(val==="C")
       {
           textToDisplay=textToDisplay.slice(0,-1);//cut the last charcter from  text todisplay
           return display(textToDisplay);
       }
       //display the value in the display
       textToDisplay += val;
       display(textToDisplay);
       //console.log(val);
   });
});

const display= (toDisplay) =>
{
    displayElm.innerText= toDisplay || "0.00";//updte if we wrote .innertect before==
    
};
const onTotal=()=>
{
    const prankNum=randomNumber();
    //do animation if pranknumber is greater than 0
    if(prankNum>0){
    displayElm.style.backgroundColor = "red";
    displayElm.style.color="white";
    //animation
    displayElm.classList.add("prank");

    displayElm.addEventListener("animationed",()=>{
        displayElm.classList.remove("prank");
    })
    //remove the class after animation
    }
   // displayElm.getElementsByClassName.backgroundColor="red";
    const total=eval(textToDisplay)+prankNum;

    display(total); 
    textToDisplay=""; 
}

const resetDisplay=()=>
{

    display("0.00");
    textToDisplay="";


    
};
const randomNumber =()=>
{
    const num= Math.round(Math.random()*10);//0-10
    console.log(num);
    return num<9 ?num:0
}