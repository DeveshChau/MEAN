$(document).ready(function(){
    $("#showTable").click(function(e){
        let number = document.getElementById("numberInput").value;
        let showTable = document.getElementById("numberTable");

        for(counter = 1; counter < 11; counter++ )
        {
            let node = document.createElement("p");
            let textNode = document.createTextNode(number +" * "+ counter
             + " = " + number*counter);
            node.appendChild(textNode);
            showTable.appendChild(node);

        }
        $(".showNumnerTable").removeClass("invisible");
        $(".showNumnerTable").addClass("visible");
    })
});