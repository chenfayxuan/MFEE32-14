// 1.建立各按鈕(不同id)
// 2.綁定click事件，呼叫同一個函數
// 3.在函數中，利用this.id區分
// 4.今日笑話 → new Date()，其他按鈕 → 把this.id日期拿來用


let thisButton = document.getElementsByTagName("button")[0];
let Button20221202 = document.getElementById("2022/12/2");
let Button20220222 = document.getElementById("2022/2/22");
let Button20220104 = document.getElementById("2022/1/4");
let showData = document.getElementById("showData");

thisButton.addEventListener("click",loadServerData);
Button20221202.addEventListener("click",loadServerData);
Button20220222.addEventListener("click",loadServerData);
Button20220104.addEventListener("click",loadServerData);

function loadServerData(){
    console.log("Load Server Data!");
    let xmlHttpRequest;
    if(window.XMLHttpRequest){
        xmlHttpRequest = new XMLHttpRequest();
    }else{
        alert("No XMLRequest!!");
        return;
    }



    let thisMoment;
    if (this.id == ""){
        thisMoment = new Date();
    }else{
        thisMoment = new Date(this.id);
    }



    let thisYear = thisMoment.getFullYear();

    // 1-9月，須補0(兩種方式)
    // let thisMonth = thisMoment.getMonth()+1 < 10 ? "0" + (thisMoment.getMonth()+1) : thisMoment.getMonth()+1;
    let thisMonth = thisMoment.getMonth()+1;
        if (thisMonth.toString().length == 1) {
            thisMonth = "0" + thisMonth;
        }

    //1-9日，須補0(兩種方式)
    // let thisDay = thisMoment.getDate() < 10 ? "0" + (thisMoment.getDate()) : thisMoment.getDate();
    let thisDay = thisMoment.getDate();
        if (thisDay.toString().length == 1) {
            thisDay = "0" + thisDay;
        }
    // debugger;
    let thisDate = thisYear.toString() + thisMonth.toString() + thisDay.toString();

    
    //settings for XMLHttpRequest object
    xmlHttpRequest.open("GET", thisDate+".txt", true);
    xmlHttpRequest.send();

    xmlHttpRequest.onreadystatechange = function(){
        console.log("readyState :",xmlHttpRequest.readyState)
        console.log("status :",xmlHttpRequest.status)
        if(xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200){
            showData.innerHTML = xmlHttpRequest.responseText;
            // thisButton.style.visibilicty = "hidden";
        }
    };


}

$(function(){
    $("#randomBtn").on("click", loadRandomJoke);
});

function loadRandomJoke(){
    $.getJSON("https://api.chucknorris.io/jokes/random")
    .done(function(data){
        console.log("Success");
        console.log(data.value);
        $("#showData").empty();
        // $("#showData").html(`<pre>${data.value}</pre>`);
        $("#showData").text(data.value);

    })
    .fail(function(err){
        console.log("Status Code : ",err.status);
    })
    .always(function(){
        console.log("Complete!");
    })
}