	/* Landon Harrison */

	//Function to check for words in special requests box, thank user for ordering,
	//and detail their order when finished
	function myfunc(){
		
		//variables of elements
		let noteElement = document.getElementById('notes');
		let quantityElement = document.getElementById('quantitySlid');
		let quantityWord = document.getElementById('quantityWord');
		let quantityNum = quantityElement.value;
		let typeElement = document.getElementById('cheesecakeType');
		let orderElement = document.getElementById('orderBut');
		let notesWord = document.getElementById('notesWord');
		let notes = noteElement.value.toLowerCase();

		//denotes which type of cheesecake they chose
		var whichElement = "hello";
		if(document.getElementById('plain').checked){
			whichElement = "plain";
		}
		else if(document.getElementById('pb').checked){
			whichElement = "peanut butter";
		}
		else if(document.getElementById('mango').checked){
			whichElement = "mango";
		}

		//warning user that cheesecake is not vegan if requested
		if(notes.includes("vegan")){
			alert("Our cheesecakes include dairy and are not vegan."); }

		
		//turns elements to hidden after completing order
		//thanks the user and details their order (ie num and type of cheesecake)
		else{
			noteElement.style.visibility = "hidden";
			quantityElement.style.visibility = "hidden";
			typeElement.style.visibility = "hidden";
			orderElement.style.visibility = "hidden";
			quantityWord.style.visibility = "hidden";
			notesWord.style.visibility = "hidden";
			let text = "Thank you for ordering!\n\n"+
			"Your order for " + quantityNum + " " + whichElement + 
			" cheesecake will ship within 5 business days.\n\n" +
			"Notes: " + notes;
			document.getElementById("thankYou").innerHTML = text;
		}
		
	}