//initial
// $(function(){
//     $("[type='checkbox']").on("change",updateProgress);
// });

// function updateProgress(){
//     // debugger;
//     let hasChecked = 0;
//     for(let x=0; x < $("[type='checkbox']").length; x++) {
//         if($("[type='checkbox']")[x].checked){
//             hasChecked += 1;
//         }
//     }

//     //$("meter").attr("min", 0); //def=>0
//     $("meter").attr("max", $("[type='checkbox']").length);
//     $("meter").attr("value", hasChecked);
// }

// meter
$(function(){
    $(".meter").on("change",updateProgress);
});

function updateProgress(){
    // debugger;
    let hasChecked = 0;
    for(let x=0; x < $(".meter").length; x++) {
        if($(".meter")[x].checked){
            hasChecked += 1;
        }
    }

    //$("meter").attr("min", 0); //def=>0
    $("meter").attr("max", $(".meter").length);
    $("meter").attr("value", hasChecked);
}

// progress
$(function(){
    $(".progress").on("change",updateProgress1);
});

function updateProgress1(){
    // debugger;
    let hasChecked = 0;
    for(let x=0; x < $(".progress").length; x++) {
        if($(".progress")[x].checked){
            hasChecked += 1;
        }
    }
    $("progress").attr("value", hasChecked / $(".progress").length);
}

// range
$(function(){
    $(".range").on("change",updateProgress2);
});

function updateProgress2(){
    // debugger;
    let hasChecked = 0;
    for(let x=0; x < $(".range").length; x++) {
        if($(".range")[x].checked){
            hasChecked += 1;
        }
    }

    //$("meter").attr("min", 0); //def=>0
    $("#myRange").attr("max", $(".range").length);
    $("#myRange").attr("value", hasChecked);
}
