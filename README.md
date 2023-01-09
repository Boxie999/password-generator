# password-generator
I created an empty array, and if the user for example, wants to include numbers, then I push the numbers array in 
this combined array. I can repeat this with the other options too, so finally this array will include
all the arrays of characters the user wanted to include.
I created a function to get random elements from an array, so I can use this function to get random 
elements from the combined array.
Prompting the user to type a number between 10 and 64 is in a while loop, so until we don't get the right number
between 10 and 64, the loop will run again and again, until we get the right number. 
When the condition in the while loop is not true anywore, (validnumber === false), the loop will stop and
we can move on to the next questions. 
I included confirm messages, asking the user if they would like to include:
uppercase characters, lowercase characters, numbers and special characters. Their answer will be true or false, and 
if it is true, I will push that array into the combined array.
And finally in the generatePassword function, I created this for loop :

var finalPassword = "" // i created an empty variable so I can store the final password here
 
   console.log('Number choice is :', numberChoice);
  for ( var i = 0; i < numberChoice; i++) {
    var randomResult = getRandom(combinedArray)
    finalPassword += randomResult
  }

  The numberChoice variable is where I store the user input of the length of the password they would like
  to generate. This loop iterates through the combined array and gets random elements from that array
  based on the number the user typed. Then I store these items in a new variable called randomResult.
  And finally I add these values to the finalPassword variable.
  At the end of this function, return finalPassword will print the generated password to the users screen.
  
  <img width="1246" alt="Screenshot 2023-01-09 at 20 40 46" src="https://user-images.githubusercontent.com/118014637/211404173-659991c1-42ff-4934-94ea-62e449a575bd.png">
  
  URL to the deployed application :
   https://boxie999.github.io/password-generator/
