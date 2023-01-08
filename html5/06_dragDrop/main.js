$(function(){
    $("#dropbox").on("dragenter", dragenter);
    $("#dropbox").on("dragleave", dragleave);
    $("#dropbox").on("dragover", dragover);
    $("#dropbox").on("drop", drop);
});

function dragenter(){
    $("#dropbox").css("background-color","red");
    $("#dropbox").text("Drop it!");
}

function dragleave(){
    $("#dropbox").css("background-color","blue");
    $("#dropbox").text("Come here.");
}

function dragover(e){
    e.preventDefault();
}

function drop(e){
    e.preventDefault();
    let files = e.originalEvent.dataTransfer.files;
    if(files.length == 0){
        return false;
    }
    convert(files[0]);
}

function convert(file){
    // debugger;
    if(!file.type.match(/text/)){
        alert("請拖放文字檔");
        dragleave();
        return false;
    }

    let reader = new FileReader();

    reader.onloadend = function(){
        let s = reader.result;
        // $("#preview").text(s);      //檔案內容取代
        $("#preview").append(s+"\n");  //檔案內容皆會呈現
        dragleave();
    };

    reader.readAsText(file);
}