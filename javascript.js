window.onload = function() {
	var url = "http://localhost/gumball/sales.json";
	var request = new XMLHttpRequest();
	request.open("GET", url);
	request.onload = function() {
		if (request.status == 200) {
			updateSales(request.responseText);
		}
	};
	request.send(null);
}
function updateSales(responseText) {
	var salesDiv = document.getElementById("sales");
	salesDiv.innerHTML = responseText;
}


/*window.onload = function() {
	var url = "http://someserver.com/data.json";
	var request = new XMLHttpRequest();
	request.onload = function() {
		if(request.status == 200) {
			alert(request.responseText);
		}
	};
	request.open("GET", url);
	request.send(null);
}

function displayLuck(luck) {
	var p = document.getElementById("luck");
	p.innerHTML = "Today you are" + luck; 
}*/