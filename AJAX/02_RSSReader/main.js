$(function(){
    $("button").on("click", loadServerData);
});

function loadServerData(){
    // alert("Hi");
    let rss2json="https://api.rss2json.com/v1/api.json?rss_url=";
    // $.getJSON(rss2json+"https://www.mohw.gov.tw/rss-16-1.html") // 衛福部
    $.getJSON(rss2json+"https://news.ltn.com.tw/rss/all.xml")      // 自由時報
    .done(function(data){
        // debugger;
        for(let x = 0; x < data.items.length; x++){
            // let thisRow = `<tr><td><a target='_blank' href='${data.items[x].link}'>${data.items[x].title}</a></td><td>${data.items[x].pubDate.split(" ")[0]}</td></tr>`
            let thisRow = '<tr>';
            thisRow += `<td><a target='_blank' href='${data.items[x].link}'>${data.items[x].title}</a></td>`;
            thisRow += `<td>${data.items[x].pubDate.split(" ")[0]}</td>`; 
            thisRow += '</tr>';

            $("#dataTable").append(thisRow);
        }
    })
    .fail(function(){console.log("Error")})
    .always(function(){console.log("Always")});
}