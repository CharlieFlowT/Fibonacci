# Fibonacci
Fibonacci resolver


It´s a very simple process.
The fibonacci sequence is created by adding of the 2 previouis numbers to get a new one, so we only have to set the 2 first numbers of the sequence and get adding the last 2 to get the next one.
So, we only have to ask for the "index" of the number we are looking for and with a for loop we could add N pars of "previous" numbers until we reach the index target.

The for-loop is the tricky part. We have to begin with 2 already set up numbers (0 and 1) and the function returns the "Final" number calculated. For starters, the final number is set to be the index asekd number. So, if the user whats the index: 0 or 1, we don´t need to calculate the answer. For the 3 position (index) we now enter the for loop and start adding pars of previous numbers and calcualte the answer. 

The improvement as you can see is that we can call the function getValue with the parameter directly, instead of using the getFibonacciValue function.
