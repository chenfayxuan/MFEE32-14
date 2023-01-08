$(function(){
    $("button").on("click", go);
});

const maleKeywords = ["雄","強","賢","志"];
const femaleKeywords = ["芸","芬","佩"];

let go = () => {
    // alert("hi");
    var inputText = $("#userInput").val();
    // debugger;

    // Array method : some 陣列尋訪(對陣列做一些判斷、檢查,結果為 True or False)
    // String method : includes 
    const isMale = maleKeywords.some(thisElement => inputText.includes(thisElement));
    const isFemale = femaleKeywords.some(thisElement => inputText.includes(thisElement));
    // debugger;

    if(isMale && isFemale){
        $("h1").text("😂");
    }else if(isMale){
        $("h1").text("🧑");
    }else if(isFemale){
        $("h1").text("👧");
    }else{
        $("h1").text("⁇");
    }
};