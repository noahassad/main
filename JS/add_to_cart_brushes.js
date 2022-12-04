var flatheadbrushButton = document.getElementById('flatheadbrush');
var pointedbrushButton = document.getElementById('pointedbrush');
var edgedbrushButton = document.getElementById('edgedbrush');
var rollerbrushButton = document.getElementById('rollerbrush');
var rollerreplaceButton = document.getElementById('rollerreplace');
var fullkitButtonButton = document.getElementById('fullkit');

function getNumCartItems() {
    return String(sessionStorage.length);
}

price = "25.99"
item = "default"

flatheadbrushButton.onclick = function(){
    price = "15.99"
    item = "flathead"
    if (confirm("Confirm add to cart?")) {
        sessionStorage.setItem("Item:"+getNumCartItems+":itemtype:" + item, price)
    } 
}

pointedbrushButton.onclick = function(){
    price = "25.99"
    item = "pointed"
    if (confirm("Confirm add to cart?")) {
        sessionStorage.setItem("Item:"+getNumCartItems+":itemtype:" + item, price)
    } 
}

edgedbrushButton.onclick = function(){
    price = "10.99"
    item = "edged"
    if (confirm("Confirm add to cart?")) {
        sessionStorage.setItem("Item:"+getNumCartItems+":itemtype:" + item, price)
    } 
}

rollerbrushButton.onclick = function(){
    price = "11.99"
    item = "roller"
    if (confirm("Confirm add to cart?")) {
        sessionStorage.setItem("Item:"+getNumCartItems+":itemtype:" + item, price)
    } 
}

rollerreplaceButton.onclick = function(){
    price = "25.99"
    item = "rollereplace"
    if (confirm("Confirm add to cart?")) {
        sessionStorage.setItem("Item:"+getNumCartItems+":itemtype:" + item, price)
    } 
}

fullkitButtonButton.onclick = function(){
    price = "250.99"
    item = "fullkit"
    if (confirm("Confirm add to cart?")) {
        sessionStorage.setItem("Item:"+getNumCartItems+":itemtype:" + item, price)
    } 
}