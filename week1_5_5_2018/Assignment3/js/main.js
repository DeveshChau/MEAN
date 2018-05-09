$(document).ready(function(){
    var studentRecord = [];
    $("#add").click(function(){
        // accept values in variables
        let rollNumber = document.getElementById("rollNumber").value;
        let name = document.getElementById("name").value;
        let marks = document.getElementById("marks").value;
        //add objec to array
        studentRecord.push({
            "rollNumber": rollNumber,
            "name": name,
            "marks": marks
        });
        alert("Record Added Successfully");

        let recordAdded = studentRecord.length;
        document.getElementById("recordAdded").innerHTML = recordAdded;

        if(recordAdded == 5){
            document.getElementById("add").disabled = true;
            document.getElementById("show").disabled = false;
        }
    });


    $("#show").click(function(){
        //select table rows
        let passStudent = document.getElementById("passStudent");
        let failStudent = document.getElementById("failStudent");

        for(let counter=0; counter<studentRecord.length; counter++)
        {
            // create a row 
            let tr = document.createElement("tr");
            
            let td = document.createElement("td");
            let txt = document.createTextNode(studentRecord[counter].rollNumber);
            td.appendChild(txt);

            let td1 = document.createElement("td");
            let txt1 = document.createTextNode(studentRecord[counter].name);
            td1.appendChild(txt1);

            let td2 = document.createElement("td");
            let txt2 = document.createTextNode(studentRecord[counter].marks);
            td2.appendChild(txt2);

            tr.appendChild(td);
            tr.appendChild(td1);
            tr.appendChild(td2);

            //check marks and add row accordingly
            if (studentRecord[counter].marks < 40){
                failStudent.appendChild(tr)
            }
            else{
                passStudent.appendChild(tr);
            }
        }

        //disable show button
        document.getElementById("show").disabled = true;
    });
});