// Author: Austin Cooper
// Version: 1.3
// Date: December 3 2022
var stepladderButton = document.getElementById('stepladder');
var fixedladderButton = document.getElementById('fixedladder');
var extendableladderButton = document.getElementById('extendableladder');
var paintmaskButton = document.getElementById('paintmask');
var paintragsButton = document.getElementById('paintrags');
var painttapeButton = document.getElementById('painttape');

function getNumCartItems() {
    return String(sessionStorage.length);
}

price = "25.99"
item = "default"

stepladderButton.onclick = function(){
    price = "79.99"
    item = "stepladder-"
    if (confirm("Confirm add to cart?")) {
        sessionStorage.setItem("Item:"+getNumCartItems()+":itemtype:" + item, price)
    } 
}

fixedladderButton.onclick = function(){
    price = "149.99"
    item = "fixedladder-"
    if (confirm("Confirm add to cart?")) {
        sessionStorage.setItem("Item:"+getNumCartItems()+":itemtype:" + item, price)
    } 
}

extendableladderButton.onclick = function(){
    price = "249.99"
    item = "extendableladder-"
    if (confirm("Confirm add to cart?")) {
        sessionStorage.setItem("Item:"+getNumCartItems()+":itemtype:" + item, price)
    } 
}

paintmaskButton.onclick = function(){
    price = "59.99"
    item = "paintmask-"
    if (confirm("Confirm add to cart?")) {
        sessionStorage.setItem("Item:"+getNumCartItems()+":itemtype:" + item, price)
    } 
}

paintragsButton.onclick = function(){
    price = "15.99"
    item = "paintrags-"
    if (confirm("Confirm add to cart?")) {
        sessionStorage.setItem("Item:"+getNumCartItems()+":itemtype:" + item, price)
    } 
}

painttapeButton.onclick = function(){
    price = "3.99"
    item = "painttape-"
    if (confirm("Confirm add to cart?")) {
        sessionStorage.setItem("Item:"+getNumCartItems()+":itemtype:" + item, price)
    } 
}