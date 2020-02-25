//counter for big json object
var jsoncounter = 0
//big json object
var data = 0;
$(document).ready(function () {

    var x = window.matchMedia("(max-width: 768px)")
    JSbysize(x) // Call listener function at run time
    x.addListener(JSbysize) // Attach listener function on state changes

    $("#navTrigger").click(function () {
        var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
    })
    $("#sendBtn").click(pullFromTB);

    //go to top btn

    //Get the button:
    mybutton = document.getElementById("goToTop");
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () { scrollFunction() };

  
})
//הפעלת פונקציה בעזרת גודל מדיה
function JSbysize(x) {
    if (x.matches) { // If media query matches
        $("#h2Text").css("display", "inline");
    } else {
        $("#h2Text").css("display", "none");
    }
}
//pull data from textboxes to js variebles
function pullFromTB() {

    var tKey1 = $("#inputGroupSelect01 option:selected").text();
    var tKey2 = $("#inputGroupSelect02 option:selected").text();
    var tKey3 = $("#inputGroupSelect03 option:selected").text();
    var tKey4 = $("#inputGroupSelect04 option:selected").text();
    var tKey5 = $("#inputGroupSelect05 option:selected").text();
    pushToJSON(tKey1, tKey2, tKey3, tKey4, tKey5);
}


////pushing data to jsonfile
//function pushToJSON(key01, key02, key3, key04, key05){
//    var data = JSON.parse(txt);  //parse the JSON
//    data.methodAI.push({        //add the methodAI
//        key1: key01,
//        key2: key02,
//        key3: key03,
//        key4: key04,
//        key5: key05   
//    });
//    txt = JSON.stringify(data);  //reserialize to JSON
//    print(txt)
//}

//convert JSON to STRING 
function pushToJSON(key01, key02, key03, key04, key05) {
    var obj = { key1: key01, key2: key02, key3: key03, key4: key04, key5: key05 };
    var myJSON = JSON.stringify(obj);
    console.log(myJSON)
}


function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}