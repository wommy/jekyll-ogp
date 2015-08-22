
function changeShirtColor_sprite( obj, elmnt ){
	//var shirt_color = obj;
	document.getElementById("tshirt-color").className="sprite color color-"+obj;
	removeAdd_Selected(0, elmnt);
	//thisSelect(elmnt);
}

function changeShirtLogo_sprite( obj, elmnt ){
	//var shirt_logo = obj;
	document.getElementById("tshirt-logo").className="logo logo-"+obj;
	removeAdd_Selected(1, elmnt);
	//thisSelect(elmnt);
}

function removeAdd_Selected( N, elmnt ){
	document.querySelectorAll("a[selected]")[N].removeAttribute("selected");
	elmnt.setAttribute('selected','selected');
	//this.setAttribute("selected");

	// document.querySelectorAll("a[selected]")[0].removeAttribute("class");
}

function thisSelect(elmnt) {
  elmnt.setAttribute('selected','selected');

  //document.getElementsByClassName('color-nav')[0].getElementsByTagName("a")[1].setAttribute("selected", true);
}

document.addEventListener("keyup", escHash);

function escHash(e) {
    if(location.hash) {
    	if (e.keyCode == 27) { // escape key maps to keycode `27`
				location.hash = '#'
			}
    }
}



// document.getElementsByClassName("color-nav").children
	// for each check for attribute selected, remove
	// add selected to this.element

// http://www.w3schools.com/jsref/met_element_hasattribute.asp
// http://www.w3schools.com/jsref/met_element_getattribute.asp
// http://www.w3schools.com/jsref/met_element_removeattribute.asp
// http://www.w3schools.com/jsref/met_element_setattribute.asp

