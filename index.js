let cardRef = document.querySelector(".card");
let maskRef = document.querySelector(".mask");


function randomString(){
    let str = 'ABCD';
    
    let randomIndex = Math.floor(Math.random() * str.length);
    let word = str.charAt(randomIndex);

    return word;
     
}

function hideFn(){
   maskRef.style.display = 'block';
   let myWord = randomString();
   console.log(myWord)
   cardRef.innerText = myWord;
    
}

function showFn(){
     
    maskRef.style.display = 'none';
   
     
 }