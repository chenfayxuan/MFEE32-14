$(function(){
    // debugger;
    //Load video : set video element's src
    // find video element
    // document.getElementById("myVideo") =>JavaScript寫法，對應jQuery寫法 $("#myVideo")
    $("#myVideo").attr("src","sample-mp4-file.mp4");
    
    //Set Play Button <- click event .....
    // JavaScript作法: onclick, addEventListener
    $("#playBtn").on("click",function(){
        $("#volumeDisplay").text($("#myVideo")[0].volume.toFixed(2));
        $("#progressBar")[0].max = $("#myVideo")[0].duration;
        // debugger;
        // console.log("Yo");
        // 1.Play Video or Pause Viedo <--Check Video Current Status
        // 2.Set Button Text ->innerHTML
        if($("#myVideo")[0].paused){
            $("#myVideo")[0].play();
            $("#playBtn").text("Pause");
        } else{
            $("#myVideo")[0].pause();
            $("#playBtn").text("Play");
        }
    });
    //Set FullScreen Button
    $("#fullBtn").on("click",function() {
        $("#myVideo")[0].webkitEnterFullscreen();
    });
    $("#lowerVolumeBtn").on('click', downVolume);
    $("#higherVolumeBtn").on('click', upVolume);
    $("#myVideo").on('timeupdate', updateProgress);
    $("#progressBar").on('change', changeProgress);


    function downVolume() {
        var myVideo = $("#myVideo")[0];
        if(myVideo.volume == 0) {            
        } 
        else if(myVideo.volume < 0.1) {
            myVideo.volume = 0;
        } 
        else {
            myVideo.volume = myVideo.volume - 0.1;
        }
        $("#volumeDisplay").text(myVideo.volume.toFixed(2));
    }

    function upVolume() {
        var myVideo = $("#myVideo")[0];
        if(myVideo.volume == 1) {            
        } 
        else if(myVideo.volume > 0.9) {
            myVideo.volume = 1;
        } 
        else {
            myVideo.volume = myVideo.volume + 0.1;
        }
        $("#volumeDisplay").text(myVideo.volume.toFixed(2));
    }

    function updateProgress() {
        $("#timeDisplay").text(Math.floor($("#myVideo")[0].currentTime));
        // $("#timeDisplay").append("/" + Math.floor($("#myVideo")[0].duration) + "秒");
        $("#timeDisplay").append(`/${Math.floor($("#myVideo")[0].duration)}秒`);
        $("#progressBar")[0].value = $("#myVideo")[0].currentTime;
    }

    function changeProgress() {
        $("#myVideo")[0].pause();
        $("#myVideo")[0].currentTime = $("#progressBar")[0].value;
        $("#myVideo")[0].play();
    }
});