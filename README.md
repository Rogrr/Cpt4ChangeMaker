Extra 4-2 Develop the Change Calculator
In this exercise, you’ll develop an application that tells how many quarters, dimes, nickels, and pennies are needed to make change for any amount of change from 0 through 99 cents. One way to get the results is to use the divide and modulus operators along with the parseInt() method for truncating the results so they are whole numbers.
1. Download the zip file on canvas. It will contain an html file already linked to a css file and js file that are also provided. Make sure to save them all in the same folder.
Then, run the application to see the user interface shown above, although that interface won’t do anything until you develop the JavaScript for it.
2. In the JavaScript file, note that the $() function has already been coded.
3. Code an event handler named processEntry() that gets the user’s entry and checks to make sure that it is a number between 0 and 99. If so, call a function named makeChange() and pass it the user’s entry. Otherwise, display an alert dialog box for the error.
4. Code the makeChange() function, which should have one parameter that accepts the user’s entry. This function shouldn’t return anything, but it should display the results in the text boxes for Quarters, Dimes, Nickels, and Pennies.
5. Code a DOMContentLoaded event handler that attaches the processEntry() event handler to the click event of the Make Change button. Then, test this application.
6. Once all your files are completed you will upload them to a Github Pages repository and submit a link to your index page so I can test your application. Make sure you test it before submitting the link.
