LAB 3

Welcome to your first multi-file assignment =). In this lab, you'll
implement a simple browser game using jQuery and CSS. This time, you
will find general instructions for the assignment in this file, and
more detailed instructions in comments in the js and css files.  
To turn in the assignment, upload this entire folder back to canvas.

The Game
--------
The goal of the game is to catch the mouse. The mouse is represented
by a div with id "mouse". Your pointer is the cat, and catching the
mouse means clicking on it.

Open up cat-and-mouse.html in chrome. The pink box represents the
mouse. He's fatally lackadaisical at the moment. We'll fix that
shortly. But first:

(1) Let's codify the game's goal in our javascript file. Register an
event handler that runs if you click on the mouse. The handler should
open up an alert announcing the win -- something like "Your kitty
ninja skillz have prevailed."

(2) Now, we're going to give the game a little character. Search the
interwebs for a cute picture of a mouse. Save it in this folder.
Replace the pink box on the page with the mouse picture by changing
only the css file.

Hints:
http://www.w3schools.com/cssref/pr_background-image.asp
http://www.w3schools.com/cssref/css3_pr_background-size.asp

(3) Your javascript file (cat-and-mouse.js) has some functions for
performing useful tasks at the bottom (in a section called "helpers").
Implement them according to the inline instructions.

(4) Okay, it's time to give the little guy a fighting chance, and
implement the 'scamper' method. 

The mouse should pick a direction from the DIRECTIONS array, run for a
distance of MOVE_LENGTH pixels over MOVE_TIME milliseconds (or until
he hits a wall), and then change direction, run, change direction, and
run (indefinitely). The choice of direction should be random each
time.

Keep in mind, adding to the left css property moves an object right.
Adding to the top css property moves an object down. (They represent
displacement from those positions).

Hints:
http://www.w3schools.com/cssref/pr_class_position.asp
http://api.jquery.com/animate/
