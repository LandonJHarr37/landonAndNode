	//changes the month on the dropdown button to the chosen month
	//I learned about JS parameters from w3schools
	//I realized you can pull object specifics from the objects themselves
	function monthChange(month){
		let monthElement = document.getElementById('monthDrp');
		document.getElementById('monthDrp').innerHTML = month.name;

		}