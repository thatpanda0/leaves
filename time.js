window.onload = displayClock();
function displayClock() {
	const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	var d = new Date();
	var mm = monthNames[d.getMonth()];
	var dd = d.getDate();
	var min = (mins = ('0' + d.getMinutes()).slice(-2));
	var hh = d.getHours();
	var ampm = '';

	document.getElementById('time').innerText = `${hh}:${min}`;
	// document.getElementById('separator').innerHTML = ' : ';
	// document.getElementById('minutes').innerText = min + ampm;

	setTimeout(displayClock, 1000);
}
