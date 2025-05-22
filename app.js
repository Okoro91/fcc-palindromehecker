const inputText = document.querySelector("#text-input");
const checkButton = document.querySelector("#check-btn");
const displayResult = document.querySelector("#result");



const reverseWord = (userInput) => {
   const textClean = userInput.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
   const reverseText = textClean.split('').reverse().join('');
   if(reverseText === textClean){
    return `${userInput} is a palindrome`;
   }else{
    return `${userInput} is not a palindrome`;
   }
}

 


const displayUserInput = () => {
    const text = inputText.value;
    if(text === ''){
       alert("Please input a value")
    }
    const reverseText = reverseWord(text);
    displayResult.style.display = "block";
    displayResult.innerText = reverseText;
    inputText.value = "";

}


checkButton.addEventListener("click", displayUserInput);



