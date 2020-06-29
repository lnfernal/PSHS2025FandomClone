fetch(jsonfile).then(res=>res.json()).then(data=>{
    document.getElementById("content").innerHTML="";
    for(article in data){
        if(data[article].searchable){
            empty=false;
    document.getElementById("content").innerHTML+='<div><h1><a target="_blank" href="'+data[article].url+'">'+article+'</a></h1><p>'+data[article].desc+'</p><br/></div>';
        }
}});

function searchArticles(){
    fetch(jsonfile).then(res=>res.json()).then(data=>{
    document.getElementById("content").innerHTML="";
    let empty=true;
    let wordpattern=new RegExp("("+document.getElementById("searchbox").value.toLowerCase().split(",").join("|")+")","g");
    for(article in data){
        if((article.toLowerCase().match(wordpattern)||data[article].desc.toLowerCase().match(wordpattern)||data[article].keywords.toLowerCase().match(wordpattern)) && data[article].searchable){
            empty=false;
    document.getElementById("content").innerHTML+='<div><h1><a target="_blank" href="'+data[article].url+'">'+article+'</a></h1><p>'+data[article].desc+'</p><br/></div>';
        }
}
if(empty){
    document.getElementById("content").innerHTML='<p>No Results</p>';
}
});
}
