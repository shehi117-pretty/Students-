loadNotes();

function saveNote(){

let title=document.getElementById("title").value;

let note=document.getElementById("note").value;

if(title==""||note==""){

alert("Write something first!");

return;

}

let notes=JSON.parse(localStorage.getItem("notes"))||[];

notes.push({

title:title,

note:note

});

localStorage.setItem("notes",JSON.stringify(notes));

document.getElementById("title").value="";

document.getElementById("note").value="";

loadNotes();

}

function loadNotes(){

let notes=JSON.parse(localStorage.getItem("notes"))||[];

let output="";

notes.forEach(function(n){

output+=`

<div class="note">

<h3>${n.title}</h3>

<p>${n.note}</p>

</div>

`;

});

document.getElementById("savedNotes").innerHTML=output;

}
