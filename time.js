window.onload = displayClock;
function displayClock() {
	var d = new Date();
	var min = (mins = ('0' + d.getMinutes()).slice(-2));
	var hh = ('0' + d.getHours()).slice(-2);
	var ampm = '';
	
	const weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	const months   = ['January','February','March','April','May','June','July','August','September','October','November','December'];
	const weekday  = weekdays[d.getDay()];
	const day      = d.getDate();
	const month    = months[d.getMonth()];
	const dateString = `${weekday}, ${day} ${month}`;
	
	document.getElementById('time').textContent = `${hh}:${min}`;
	document.getElementById('date').textContent = `${dateString}`;

	setTimeout(displayClock, 1000);
}
