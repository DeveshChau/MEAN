$(document).ready(function(){
    $("#add").click(function () {
        alert("Record Added Successfully !");        
        var table = document.getElementById("myTable");
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = document.getElementById("rollNumber").value;
        cell2.innerHTML = document.getElementById("name").value;
        cell3.innerHTML = document.getElementById("marks").value;
        console.log("added");
       });
    $("#show").click(function () {
        $(".tableRow").removeClass("invisible");
        $(".tableRow").addClass("visible");
        console.log("test");
       });
    $("#hide").click(function () {
        $(".tableRow").removeClass("visible");
        $(".tableRow").addClass("invisible");
        console.log("test");
    });

});