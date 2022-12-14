// Author: Austin Cooper
// Version: 1.3
// Date: December 3 2022
var peachButton = document.getElementById('peachbutton');
var perwinkleButton = document.getElementById('perwinklebutton');
var pinkButton = document.getElementById('pinkbutton');
var sandButton = document.getElementById('sandbutton');
var chartreuseButton = document.getElementById('chartreusebutton');
var steelgreyButton = document.getElementById('steelgraybutton');

function getNumCartItems() {
    return String(sessionStorage.length);
}

price = "25.99"
colour = "default"

peachButton.onclick = function(){
    colour = "peach-"
    if (confirm("Confirm add to cart?")) {
        sessionStorage.setItem("Item:"+getNumCartItems()+":itemtype:" + colour, price)
    } 
}

perwinkleButton.onclick = function(){
    colour = "perwinkle-"
    if (confirm("Confirm add to cart?")) {
        sessionStorage.setItem("Item:"+getNumCartItems()+":itemtype:" + colour, price)
    } 
}

pinkButton.onclick = function(){
    colour = "pink-"
    if (confirm("Confirm add to cart?")) {
        sessionStorage.setItem("Item:"+getNumCartItems()+":itemtype:" + colour, price)
    } 
}

sandButton.onclick = function(){
    colour = "sand-"
    if (confirm("Confirm add to cart?")) {
        sessionStorage.setItem("Item:"+getNumCartItems()+":itemtype:" + colour, price)
    } 
}

chartreuseButton.onclick = function(){
    colour = "chartreuse-"
    if (confirm("Confirm add to cart?")) {
        sessionStorage.setItem("Item:"+getNumCartItems()+":itemtype:" + colour, price)
    } 
}

steelgreyButton.onclick = function(){
    colour = "steelgrey-"
    if (confirm("Confirm add to cart?")) {
        sessionStorage.setItem("Item:"+getNumCartItems()+":itemtype:" + colour, price)
    } 
}