var arr = [];

var counter = 0;

var name = "verwijder";

$("#klik").on('click', getData)


$("#leeg").on('click', leegLijst)

$(".verwijder").on('click', removeEntry)

function getData(){
    var input = $("#textfield").val();
    $("#resultList").append("<p id="+ counter +">"+ input,"</p>", "<button name="+ counter +" class="+ name +">Verwijder</button>");
    arr.push(input);
    console.log(arr);
    counter++;
}

function leegLijst(){
    $("#resultList").empty();

    alert(arr + " zijn verwijderd.");
}

function removeEntry(){
    thisId = this.attr("Name");
    console.log("hoi");
    console.log(thisId);
}

