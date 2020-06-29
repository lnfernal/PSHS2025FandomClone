function Slider(sourceid,imgs,startingIndex=0,desc="",type="img"){
    if(document.getElementById(sourceid).className=="slider"){
    this.parentElem=document.getElementById(sourceid);
    this.imgs=imgs;
    this.desc=desc;
    this.contentType=type;
    this.imlen=this.imgs.length;
    this.index=startingIndex;
     
    if(type=="img"){
    this.imageelem=document.createElement(this.contentType); 
    this.imageelem.src=this.imgs[this.index];  
    }else if(type=="iframe"){
    this.imageelem=document.createElement("div"); 
    this.imageelem.innerHTML=this.imgs[this.index];  
    }
    
    this.buttonLeft=document.createElement("button");
    this.buttonRight=document.createElement("button");
    this.buttonLeft.style.backgroundColor="rgba(0,0,0,0.5)";
    this.buttonLeft.style.color="white";
    this.buttonRight.style.color="white";
    this.buttonRight.style.backgroundColor="rgba(0,0,0,0.5)";
    this.buttonLeft.style.border="0px solid black";
    this.buttonRight.style.border="0px solid black";
    this.buttonLeft.style.margin="1vw";
    this.buttonRight.style.margin="1vw";
    this.footerDescription=document.createElement("p");
    this.footerDescription.className+="foot-description";
    this.footerDescription.appendChild(document.createTextNode(this.desc+(type=="img" ? " Image " : " Iframe ")+(this.index+1)));
    this.citation=document.createElement("details");
    this.citation.style.fontStyle="normal";
    this.citation.className+="foot-description";
    this.citationSummary=document.createElement("summary");
    this.citationSummary.appendChild(document.createTextNode("Link"))
    this.citationLink=document.createElement("p");
    this.citationLink.appendChild(document.createTextNode(this.imgs[this.index]));
    this.citation.appendChild(this.citationSummary);
    this.citation.appendChild(this.citationLink);
    this.buttonLeft.appendChild(document.createTextNode("<"));
    this.buttonRight.appendChild(document.createTextNode(">"));
    this.parentElem.appendChild(this.buttonLeft);
    this.parentElem.appendChild(this.buttonRight);
    this.parentElem.appendChild(document.createElement("br"));
    this.parentElem.appendChild(this.imageelem);
    this.parentElem.appendChild(this.footerDescription);
    this.parentElem.appendChild(this.citation);
     
    buttonLink(this);
    }
}
function buttonLink(sliderobj){
    sliderobj.buttonLeft.addEventListener("click",function(){
        sliderobj.index=(sliderobj.index+sliderobj.imlen-1)%(sliderobj.imlen);
        if(sliderobj.contentType=="img"){
        sliderobj.imageelem.src=sliderobj.imgs[sliderobj.index];   
        sliderobj.footerDescription.innerHTML=sliderobj.desc+" Image "+(sliderobj.index+1);
        }else if(sliderobj.contentType=="iframe"){
        sliderobj.imageelem.innerHTML=sliderobj.imgs[sliderobj.index]; 
        sliderobj.footerDescription.innerHTML=sliderobj.desc+" Iframe "+(sliderobj.index+1);
        }
        sliderobj.citationLink.innerHTML=esc(sliderobj.imgs[sliderobj.index]);
        unesc(sliderobj.imgs[sliderobj.index]);
    });
    sliderobj.buttonRight.addEventListener("click",function(){
        sliderobj.index=(sliderobj.index+sliderobj.imlen+1)%(sliderobj.imlen);
        if(sliderobj.contentType=="img"){
        sliderobj.imageelem.src=sliderobj.imgs[sliderobj.index];    
        sliderobj.footerDescription.innerHTML=sliderobj.desc+" Image "+(sliderobj.index+1);
        }else if(sliderobj.contentType=="iframe"){
        sliderobj.imageelem.innerHTML=sliderobj.imgs[sliderobj.index];    
        sliderobj.footerDescription.innerHTML=sliderobj.desc+" Iframe "+(sliderobj.index+1);
        }
        sliderobj.citationLink.innerHTML=esc(sliderobj.imgs[sliderobj.index]);
        unesc(sliderobj.imgs[sliderobj.index]);
    });
}

function esc(str){
    return str.replace(/\"/g,"&quot").replace(/</g,"&lt").replace(/>/g,"&gt");
}
function unesc(str){
    return str.replace(/&quot/g,"\"").replace(/&lt/g,"<").replace(/&gt/g,">");
}