//JavaScript, use pictures as buttons, sends and receives values to/from the Rpi
//These are all the buttons
var button_0 = document.getElementById("button_0");
var button_1 = document.getElementById("button_1");
var button_2 = document.getElementById("button_2");
var button_3 = document.getElementById("button_3");
var button_4 = document.getElementById("button_4");
var button_5 = document.getElementById("button_5");
var button_6 = document.getElementById("button_6");
var button_7 = document.getElementById("button_7");
var button_8 = document.getElementById("button_8");
var button_9 = document.getElementById("button_9");
var button_10 = document.getElementById("button_10");
var button_11 = document.getElementById("button_11");
var button_12 = document.getElementById("button_12");
var button_13 = document.getElementById("button_13");
var button_14 = document.getElementById("button_14");
var button_15 = document.getElementById("button_15");
var button_16 = document.getElementById("button_16");

//this function sends and receives the pin's status
function change_pin (pin, status) {
	//this is the http request
	var request = new XMLHttpRequest();
	request.open( "GET" , "gpio.php?pin=" + pin + "&status=" + status );
	request.send(null);
	//receiving information
	request.onreadystatechange = function () {
		if (request.readyState == 4 && request.status == 200) {
			return (parseInt(request.responseText));
		}
	//test if fail
		else if (request.readyState == 4 && request.status == 500) {
			alert ("server error");
			return ("fail");
		}
	//else 
		else { return ("fail"); }
	}
}

//these are all the button's events, it just calls the change_pin function and updates the page in function of the return of it.
button_0.addEventListener("click", function () { 
	//if checked
	if ( button_0.checked ) {
		//use the function
		var new_status = change_pin ( 4, 1);
		if (new_status !== "fail") { 
			button_0.prop('checked', false);
			return 0;
			}
		}
	//if unchecked
	else {
		//use the function
		var new_status = change_pin ( 4, 0);
		if (new_status !== "fail") { 
			button_0.prop('checked', true);
			return 0;
			}
		}
} );
	
button_1.addEventListener("click", function () { 
	//if checked
	if ( button_1.checked ) {
		//use the function
		var new_status = change_pin ( 5, 1);
		if (new_status !== "fail") { 
			button_1.prop('checked', false);
			return 0;
			}
		}
	//if unchecked
	else {
		//use the function
		var new_status = change_pin ( 5, 0);
		if (new_status !== "fail") { 
			button_1.prop('checked', true);
			return 0;
			}
		}
} );

button_2.addEventListener("click", function () { 
	//if checked
	if ( button_2.checked ) {
		//use the function
		var new_status = change_pin ( 6, 1);
		if (new_status !== "fail") { 
			button_2.prop('checked', false);
			return 0;
			}
		}
	//if unchecked
	else {
		//use the function
		var new_status = change_pin ( 6, 0);
		if (new_status !== "fail") { 
			button_2.prop('checked', true);
			return 0;
			}
		}
} );

button_3.addEventListener("click", function () { 
	//if checked
	if ( button_3.checked ) {
		//use the function
		var new_status = change_pin ( 12, 1);
		if (new_status !== "fail") { 
			button_3.prop('checked', false);
			return 0;
			}
		}
	//if unchecked
	else {
		//use the function
		var new_status = change_pin ( 12, 0);
		if (new_status !== "fail") { 
			button_3.prop('checked', true);
			return 0;
			}
		}
} );

button_4.addEventListener("click", function () { 
	//if checked
	if ( button_4.checked ) {
		//use the function
		var new_status = change_pin ( 13, 1);
		if (new_status !== "fail") { 
			button_4.prop('checked', false);
			return 0;
			}
		}
	//if unchecked
	else {
		//use the function
		var new_status = change_pin ( 13, 0);
		if (new_status !== "fail") { 
			button_4.prop('checked', true);
			return 0;
			}
		}
} );

button_5.addEventListener("click", function () { 
	//if checked
	if ( button_5.checked ) {
		//use the function
		var new_status = change_pin ( 16, 1);
		if (new_status !== "fail") { 
			button_5.prop('checked', false);
			return 0;
			}
		}
	//if unchecked
	else {
		//use the function
		var new_status = change_pin ( 16, 0);
		if (new_status !== "fail") { 
			button_5.prop('checked', true);
			return 0;
			}
		}
} );

button_6.addEventListener("click", function () { 
	//if checked
	if ( button_6.checked ) {
		//use the function
		var new_status = change_pin ( 17, 1);
		if (new_status !== "fail") { 
			button_6.prop('checked', false);
			return 0;
			}
		}
	//if unchecked
	else {
		//use the function
		var new_status = change_pin ( 17, 0);
		if (new_status !== "fail") { 
			button_6.prop('checked', true);
			return 0;
			}
		}
} );

button_7.addEventListener("click", function () { 
	//if checked
	if ( button_7.checked ) {
		//use the function
		var new_status = change_pin ( 18, 1);
		if (new_status !== "fail") { 
			button_7.prop('checked', false);
			return 0;
			}
		}
	//if unchecked
	else {
		//use the function
		var new_status = change_pin ( 18, 0);
		if (new_status !== "fail") { 
			button_7.prop('checked', true);
			return 0;
			}
		}
} );

button_8.addEventListener("click", function () { 
	//if checked
	if ( button_8.checked ) {
		//use the function
		var new_status = change_pin ( 19, 1);
		if (new_status !== "fail") { 
			button_8.prop('checked', false);
			return 0;
			}
		}
	//if unchecked
	else {
		//use the function
		var new_status = change_pin ( 19, 0);
		if (new_status !== "fail") { 
			button_8.prop('checked', true);
			return 0;
			}
		}
} );

button_9.addEventListener("click", function () { 
	//if checked
	if ( button_9.checked ) {
		//use the function
		var new_status = change_pin ( 20, 1);
		if (new_status !== "fail") { 
			button_9.prop('checked', false);
			return 0;
			}
		}
	//if unchecked
	else {
		//use the function
		var new_status = change_pin ( 20, 0);
		if (new_status !== "fail") { 
			button_9.prop('checked', true);
			return 0;
			}
		}
} );

button_10.addEventListener("click", function () { 
	//if checked
	if ( button_10.checked ) {
		//use the function
		var new_status = change_pin ( 21, 1);
		if (new_status !== "fail") { 
			button_10.prop('checked', false);
			return 0;
			}
		}
	//if unchecked
	else {
		//use the function
		var new_status = change_pin ( 21, 0);
		if (new_status !== "fail") { 
			button_10.prop('checked', true);
			return 0;
			}
		}
} );

button_11.addEventListener("click", function () { 
	//if checked
	if ( button_11.checked ) {
		//use the function
		var new_status = change_pin ( 22, 1);
		if (new_status !== "fail") { 
			button_11.prop('checked', false);
			return 0;
			}
		}
	//if unchecked
	else {
		//use the function
		var new_status = change_pin ( 22, 0);
		if (new_status !== "fail") { 
			button_11.prop('checked', true);
			return 0;
			}
		}
} );

button_12.addEventListener("click", function () { 
	//if checked
	if ( button_12.checked ) {
		//use the function
		var new_status = change_pin ( 23, 1);
		if (new_status !== "fail") { 
			button_12.prop('checked', false);
			return 0;
			}
		}
	//if unchecked
	else {
		//use the function
		var new_status = change_pin ( 23, 0);
		if (new_status !== "fail") { 
			button_12.prop('checked', true);
			return 0;
			}
		}
} );

button_13.addEventListener("click", function () { 
	//if checked
	if ( button_13.checked ) {
		//use the function
		var new_status = change_pin ( 24, 1);
		if (new_status !== "fail") { 
			button_13.prop('checked', false);
			return 0;
			}
		}
	//if unchecked
	else {
		//use the function
		var new_status = change_pin ( 24, 0);
		if (new_status !== "fail") { 
			button_13.prop('checked', true);
			return 0;
			}
		}
} );

button_14.addEventListener("click", function () { 
	//if checked
	if ( button_14.checked ) {
		//use the function
		var new_status = change_pin ( 25, 1);
		if (new_status !== "fail") { 
			button_14.prop('checked', false);
			return 0;
			}
		}
	//if unchecked
	else {
		//use the function
		var new_status = change_pin ( 25, 0);
		if (new_status !== "fail") { 
			button_14.prop('checked', true);
			return 0;
			}
		}
} );

button_15.addEventListener("click", function () { 
	//if checked
	if ( button_15.checked ) {
		//use the function
		var new_status = change_pin ( 26, 1);
		if (new_status !== "fail") { 
			button_15.prop('checked', false);
			return 0;
			}
		}
	//if unchecked
	else {
		//use the function
		var new_status = change_pin ( 26, 0);
		if (new_status !== "fail") { 
			button_15.prop('checked', true);
			return 0;
			}
		}
} );

button_16.addEventListener("click", function () { 
	//if checked
	if ( button_16.checked ) {
		//use the function
		var new_status = change_pin ( 27, 1);
		if (new_status !== "fail") { 
			button_16.prop('checked', false);
			return 0;
			}
		}
	//if unchecked
	else {
		//use the function
		var new_status = change_pin ( 27, 0);
		if (new_status !== "fail") { 
			button_16.prop('checked', true);
			return 0;
			}
		}
} );