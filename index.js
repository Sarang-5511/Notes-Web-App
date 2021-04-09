displaynotes();
var addbut = document.getElementById("addbut");
addbut.addEventListener("click", function (e) {
    var addtxt = document.getElementById("addnote");
    var notes = localStorage.getItem("notes");

    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addnote.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addnote.value = " ";
    displaynotes();

});

function displaynotes() {
    var notes = localStorage.getItem("notes");

    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    var html = " ";
    notesobj.forEach(function (element, index) {
        html += `
        <div class="card my-2 mx-3 notescard" style="width: 15rem;">
            <div class="card-body">
                <h5 class="card-title">Note ${index + 1}</h5>
                <p class="card-text">${element}</p>
                <button href="#" id="${index}" onclick="deletenote(this.id)" class="btn btn-primary">Delete note</button>
            </div>
        </div>
        `;

    });

    var noteselem = document.getElementById("notes");
    if (notesobj.length != 0) {
        noteselem.innerHTML = html;
    }
    else {
        noteselem.innerHTML = "Nothing to show.To create a note,go in the ADD NOTE section and click on add note";
    }

}


function deletenote(index) {
    console.log(index);
    var notes = localStorage.getItem("notes");

    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    console.log(notesobj);
    displaynotes();
}




var searchtxt=document.getElementById("searchtxt");
console.log(searchtxt);
searchtxt.addEventListener("input",function(){
    search=searchtxt.value;
var notescard=document.getElementsByClassName("notescard");
console.log(notescard,search);
Array.from(notescard).forEach(function(element){
    var cardtxt=element.getElementsByTagName("p")[0].innerText;
    if(cardtxt.includes(search)){
        element.style.display="blocks";
    }
    else{
        element.style.display="none";
     
    }
   
});
});