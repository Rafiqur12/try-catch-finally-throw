// Try catch and finally checking 


// const tryButton = document.querySelector(".try-btn");
// tryButton.addEventListener('click', function(){
//     try{
//         alert("Hi everyOne.");
//         alert(x);
//         alert("Bye everyOne.");
//     }
//     catch(err){
//         alert("Inside catch error.")
//        alert(err.name);
//        alert(err.message);
//     }
//     finally{
//         alert("Congratulations.");
        
//     }

// });


document.querySelector("#check-btn").addEventListener("click", function(){
   var num = document.querySelector("#numTextField").value;
    try{
        if(num < 5){
            throw "Input is too low";
        }else if(num > 10){
            throw "Input is so long";
        }
    }
    catch(err){
console.log(err);

    }
    
})