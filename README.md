# Etch-a-Sketch

Technologies used: HTML, CSS, vanilla JS.

An exercise to consolidate skills in DOM manipulation and event handling with listeners. 


Generate a dynamically populated grid of N by N squares.
Hover over them to paint the canvas.

Time to complete: ~ 2 hours

What I learned and further inquiry:
- Having a fixed size for the canvas, I initially calculated each square's width to its nearest integer value by using Math.floor(). I had assumed CSS would only work with integer widths and heights. Now I've learned that fractions are respected by CSS, so my squares take the full width of the canvas without leaving ugly white borders.  
- First time working with sliders. Simple lookup of online resources (W3Schools) fixed the issue. 
- I had debated whether I should initialize global or local variables. Looking back, since it's a self-contained simple application, it would be safe to keep common elements shared by many functions as global (e.g. body element, number of squares), as there would be no conflict of naming and the state of the application is only used by itself.   
