'use strict';


async function navLoad(){
    document.getElementById('navLoad').innerHTML = '<header><div class = "navBar" id = "navBarA"><a href = "javascript:void(0);" class = "icon" onclick="navFunction()">&#9776;</a><a href = "index.html">Home</a><a href = "TheWorld.html">The World</a><a href = "Religion.html">Religion</a><a href = "History.html">History</a><a href = "PC.html">PCs</a><a href = "NPCs.html">NPCs</a><a href = "Artefacts.html">Artefacts</a><a href = "Story.html">The Story so Far</a></div></header>';
}
/**
 * Toggles a responsive layout in the HTML/CSS.
 */
function navFunction(){
    var x = document.getElementById("navBarA");
    if(x.className =="navBar"){
        x.className +=" responsive";
    }
    else{
        x.className = "navBar";
    }
}
navLoad();