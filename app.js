const inputText = document.querySelector("#text-input");
const checkButton = document.querySelector("#check-btn");
const displayResult = document.querySelector("#result");




const reverseWord = (userInput) => {
   const reverseText = userInput.split('').reverse().join('');
   if(reverseText === userInput){
    return `${reverseText} is a palindrome`;
   }else{
    return `${userInput} is not a palindrome`;
   }
}

 const checkTextInput = () => {
    const text = inputText.value;
    if(text === ''){
        alert("Please input a value")
    }
 }


const displayUserInput = () => {
    checkTextInput();
    const text = inputText.value;
    const reverseText = reverseWord(text)
    displayResult.style.display = "block";
    displayResult.innerText = reverseText;
    inputText.value = "";
}


checkButton.addEventListener("click", displayUserInput);



