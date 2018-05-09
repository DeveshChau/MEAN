var studentsArray = [];

/* Add the data to array */
function populateArray(name, age, grade) {
	studentsArray.push({ 
		"name": name, 
		"age": age, 
		"grade": grade });
		
	document.getElementById("txtName").focus();

}
function showDetails() {

		var outputTable = document.getElementById("outputTable"); 
		var tbody = document.createElement("tbody");

		var header = "<thead><tr><td>Name</td><td>Age</td><td>Grade</td></tr></thead>";
		document.getElementById("outputTable").innerHTML = header;

		for (var i = 0; i < studentsArray.length; i++) {
			var tr = document.createElement("tr");
			tr.className = "even odd"

			var td = document.createElement("td");
			var td1 = document.createElement("td");
			var td2 = document.createElement("td");

			var txt1 = document.createTextNode(studentsArray[i].name);
			var txt2 = document.createTextNode(studentsArray[i].age);
			var txt3 = document.createTextNode(studentsArray[i].grade);

			td.appendChild(txt1);
			td1.appendChild(txt2);
			td2.appendChild(txt3);

			tr.appendChild(td);
			tr.appendChild(td1);
			tr.appendChild(td2);

			tbody.appendChild(tr);
			outputTable.appendChild(tbody);
	}
}

function enterPressed(event) {

	var keyPressed = event.keyCode || event.which;
	var txt, data;
	//if ENTER is pressed
	if (keyPressed == 13) {

		var outputTable = document.getElementById("outputTable");
		var tbody = document.createElement("tbody");

		var header = "<thead><tr><td>Name</td><td>Age</td><td>Grade</td></tr></thead>";
		document.getElementById("outputTable").innerHTML = header;

		for (var i = 0; i < studentsArray.length; i++) {
			var tr = document.createElement("tr");
			tr.className = "even odd"

			var td = document.createElement("td");
			var td1 = document.createElement("td");
			var td2 = document.createElement("td");

			var txt1 = document.createTextNode(studentsArray[i].name);
			var txt2 = document.createTextNode(studentsArray[i].age);
			var txt3 = document.createTextNode(studentsArray[i].grade);

			td.appendChild(txt1);
			td1.appendChild(txt2);
			td2.appendChild(txt3);

			tr.appendChild(td);
			tr.appendChild(td1);
			tr.appendChild(td2);

			tbody.appendChild(tr);
			outputTable.appendChild(tbody);

		}
	}
}

