// Author: Austin Cooper
// Version: 1.3
// Date: December 3 2022
var checkoutButton = document.getElementById('checkoutbutton');

var sessionList = document.getElementById('cartlist');

var sessionLength = sessionStorage.length;

function getProductName(name) {
    //console.log(name)
    switch(name) {
        //Custom Colour
        case ":itemtype:custom_colour":
            return "Custom Colour: ";
            break;
        //Standard Colours
        case ":itemtype:perwinkle":
            return "Perwinkle Paint: ";
            break;
        case ":itemtype:steelgrey":
            return "Steel-Grey Paint: ";
            break;
        case ":itemtype:chartreuse":
            return "Chartreuse Paint: ";
            break;
        case ":itemtype:sand":
            return "Sand Paint: ";
            break;
        case ":itemtype:peach":
            return "Peach Paint: ";
            break;
        case ":itemtype:pink":
            return "Pink Paint: ";
            break;
        //Brushes
        case ":itemtype:roller":
            return "Roller Paint Brush:";
            break;
        case ":itemtype:flathead":
            return "Flathead Paint Brush:";
            break;
        case ":itemtype:pointed":
            return "Pointed Paint Brush: ";
            break;
        case ":itemtype:edged":
            return "Edged Paint Brush: ";
            break;
        case ":itemtype:rollereplace":
            return "Roller Replacements: ";
            break;
        case ":itemtype:fullkit":
            return "Full Brush Kit: ";
            break;
        //Misc
        case ":itemtype:paintrags":
            return "Paint Rags: ";
            break;
        case ":itemtype:fixedladder":
            return "Fixed Ladder: ";
            break;
        case ":itemtype:paintmask":
            return "Paint Mask: ";
            break;
        case ":itemtype:extendableladder":
            return "Extendable Ladder: ";
            break;
        case ":itemtype:stepladder":
            return "Step Ladder: ";
            break;
        case ":itemtype:painttape":
            return "Paint Tape: ";
            break;
        default:
    }
}

function getProductImagePath(name) {
    //console.log(name)
    switch(name) {
        //Custom Colour
        case ":itemtype:custom_colour":
            return "Custom";
        //Standard Colours
        case ":itemtype:perwinkle":
            return "../images/perwinkle.jpg";
            break;
        case ":itemtype:steelgrey":
            return "../images/steel gray.jpg";
            break;
        case ":itemtype:chartreuse":
            return "../images/chartreuse.jpg";
            break;
        case ":itemtype:sand":
            return "../images/sand.jpg";
            break;
        case ":itemtype:peach":
            return "../images/peach.jpg";
            break;
        case ":itemtype:pink":
            return "../images/pink.jpg";
            break;
        //Brushes
        case ":itemtype:roller":
            return "../images/roller1.jpg";
            break;
        case ":itemtype:flathead":
            return "../images/brush1.jpg";
            break;
        case ":itemtype:pointed":
            return "../images/brush2.jpg";
            break;
        case ":itemtype:edged":
            return "../images/brush3.jpg";
            break;
        case ":itemtype:rollereplace":
            return "../images/roller3.jpg";
            break;
        case ":itemtype:fullkit":
            return "../images/roller2.jpg";
            break;
        //Misc
        case ":itemtype:paintrags":
            return "../images/rags.jpg";
            break;
        case ":itemtype:fixedladder":
            return "../images/ladder2.jpg";
            break;
        case ":itemtype:paintmask":
            return "../images/masks.jpg";
            break;
        case ":itemtype:extendableladder":
            return "../images/ladder3.jpg";
            break;
        case ":itemtype:stepladder":
            return "../images/ladder.jpg";
            break;
        case ":itemtype:painttape":
            return "../images/tape.jpg";
            break;
        default:
    }
}

totalPrice = 0.00;

for (let i = 0; i < sessionLength; i++){
    var storageName = sessionStorage.key(i);
    var price = sessionStorage.getItem(storageName);
    totalPrice += parseFloat(price)
    var node = document.createElement('li');
    var _img= document.createElement('img');
    var custColour = document.createElement("input")
    //var nameAdd = document.createTextNode(storageName.substring(storageName.indexOf(":itemtype:"), storageName.indexOf("-")) + " $" + price);
    var nameAdd = document.createTextNode(getProductName(storageName.substring(storageName.indexOf(":itemtype:"), storageName.indexOf("-"))) + " $" + price);
    node.appendChild(nameAdd);
    if(getProductImagePath(storageName.substring(storageName.indexOf(":itemtype:"), storageName.indexOf("-"))) == "Custom") {
        //console.log("it works");
        node.style.color = storageName.substring(storageName.indexOf("#"));
    }
    else {
        _img.src= getProductImagePath(storageName.substring(storageName.indexOf(":itemtype:"), storageName.indexOf("-")));
        node.appendChild(_img);
    }
    sessionList.appendChild(node);
}

var node = document.createElement('li');
var nameAdd = document.createTextNode("Total Price: $" + String(totalPrice));
node.appendChild(nameAdd);
    sessionList.appendChild(node);

checkoutButton.onclick = function(){
    if (confirm("Confirm Checkout? **Still Under Development**")) {
        
    } 
}