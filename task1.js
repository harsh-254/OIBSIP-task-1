function AC() {
	document.getElementById("input").value = "0";
}
function addnumber(number) {
	var value = document.getElementById("input").value
	if (value == "0") {
		document.getElementById("input").value = number;
	}
	else {
		if (value.length < 10) {
			document.getElementById("input").value += number;
		}
		 
	}
}
function calc() {
	function calculate(fn) {
		return new Function('return ' + fn)();
	}
	var value = document.getElementById("input").value;
	try {
		document.getElementById("input").value = calculate(value);
	} catch(err) {
		alert("error!");
		document.getElementById("input").value = "0";
	}
	
}
