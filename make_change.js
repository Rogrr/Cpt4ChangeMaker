//    Develop The Change Calculator 
   
   
   // Enable strict mode
   "use strict";   


// create a const named $, equal to a arrow function  with the parameter placeholder name selector (its where I input a class, id , or name). 
// document.querySelector( ) is a js method that finds the first element in the dom that matches with the CSS 

const $ = selector => document.querySelector(selector);

// long form for reference 
// const $ = function(selector) {
//     return document.querySelector(selector);
// };

// jquery for reference 
// const $ = selector => $(selector);



// 3.Code an event handler named processEntry() that gets the user’s entry 
function processEntry() {

    // get the string value from the input field with ID "cents"
    const input = $("#cents").value; 
    // parse the value 
    const cents = parseInt(input); 

    // checks that the input is a number , and checks to make sure that it is a number between 0 and 99. 
    if (!isNaN(cents) && cents >= 0 && cents <= 99){
          // If so, call a function named makeChange() and pass it the user’s entry
          makeChange(cents);      
        } else {
            // Otherwise, display an alert dialog box for the error. 
            alert("Error: Please enter a number between 0 and 99.")
        } 
    }
      

// 4. Code the makeChange() function, which should have one parameter that accepts the user’s entry. This function shouldn’t return anything, but it should display the results in the text boxes for Quarters, Dimes, Nickels, and Pennies.
    
  function makeChange(cents) {
        // math.floor rounds down to the nearest integer , regardless if poistive or negative, then divides by 25, 10, 5  depending on input amount

        // divide by 25 and rounds down, telling us how many full quarters are needed. Using the document example of 67 , 2 quarters will go into 67
        const quarters = Math.floor(cents / 25);
        // this updates cents to the remainder amount ex: if we had 67 it be 17 . 67-50= 17  , 2 quarter and 17 cents
        cents %= 25;
        console.log (cents);
        // cents in updated , and divided by 10 . telling us how many full dimes fit. should be 1.
        const dimes = Math.floor(cents / 10);
        // the remainder is gets subtracted so 1 dime and 7 cents 
        cents %= 10;
        console.log (cents);
        // divide remainder by 5 to calculate number of nicke;s
        const nickels = Math.floor(cents / 5);
        console.log (cents);
        // calculates the remainder of the cents after subtracting the larger coins denominator. continuing ex it should be 2 cents (7-5=2) so 1 nickel 2 cents
        const pennies = cents % 5;
        console.log (cents);
        // Output the result, because what ever left over is a exact pennies left

        // console log to check 
        console.log(`Quarters: ${quarters}, Dimes: ${dimes}, Nickels: ${nickels}, Pennies: ${pennies}`);

        // Display the results in the input fields using .value method used to se the current value of on input. Using $() function to select the element to input quarter,nickles,dimes, pennies. 

        $("#quarters").value = quarters;
        $("#dimes").value = dimes;
        $("#nickels").value = nickels;
        $("#pennies").value = pennies;

    }


// 5. Code a DOMContentLoaded event handler that attaches the processEntry() event handler to the click event of the Make Change button. Then, test this application.


    // Add event listener for DOMContentLoaded to ensure elements are loaded
document.addEventListener("DOMContentLoaded", () => {
    // Attach the processEntry function to the "click" event of the "Calculate" button
    $("#calculate").addEventListener("click", processEntry);
});


// 6. Once all your files are completed you will upload them to a Github Pages repository and submit a link to your index page so I can test your application. Make sure you test it before submitting the link.