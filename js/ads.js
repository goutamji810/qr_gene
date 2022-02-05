 function loadAds(){
   rectAd();
   socialBarAds();
   
 }
 
 
 
 
 
 
 
 function showFullScreenAd(calback){
   let iframeid="full-iframe"+getRan(999,99999);
  let data="<iframe id='"+iframeid+"'> </iframe>";
  
  /////
  
   openDialog(" Ads",data,function(btn){
     //show 
     btn.disabled=true;
     let iframe=document.getElementById(iframeid);
   iframe.height="600";
   iframe.width="160";
 let oDoc = iframe.contentWindow.document;
oDoc.open();
oDoc.write("<html><body style='padding:0px; margin:0px;'><script type=\"text/javascript\">	atOptions = {		'key' : '7311df8c38dc4aa04b9e50114de41330',		'format' : 'iframe',		'height' : 600,		'width' : 160,		'params' : {}	};	document.write('<scr' + 'ipt type=\"text/javascript\" src=\"http' + (location.protocol === 'https:' ? 's' : '') + '://abandonrecommendationwars.com/7311df8c38dc4aa04b9e50114de41330/invoke.js\"></scr' + 'ipt>');<\/script><\/body><\/html>");
oDoc.close();

iframe.addEventListener( "load", function(){ 
  setTimeout(()=>{
    btn.disabled=false;
    
  },3000);
  
});///

   },function(btn){
     //hide 
     calback();
   });
   
 
  
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 




function socialBarAds(){
  let s=cSL("//abandonrecommendationwars.com/d2/37/96/d23796ae6f2ae4b9c1ac3ddf7bedf212.js");
  document.body.appendChild(s);
 }
 
 
 function rectAd(){
   let d=document.getElementsByClassName("ads-rect");
   for(let i=0; i<d.length; i++){
     let e=d[i],
     padd=(!(isInnerAd(e)) ? (getMargin()):0);
     e.style="text-align:center; padding-left:"+padd+"px;"+((isInnerAd(e))?("margin:0px; margin-bottom:50px; position: relative; left: -18px; top:-15px;"):(""));
     
     let div=document.createElement("div");
     div.setAttribute("class","uk-card uk-margin-small-left uk-margin-small-right uk-margin-medium-top anim-ads");
     
     let iframe=document.createElement("iframe");
     
    setTimeout(()=>{
      div.appendChild(iframe);
      e.appendChild(div);
      if(isMobile()||isInnerAd(e)){
        rectAds(iframe,div,isInnerAd(e)); 
        
      }else{
        rectAdsBig(iframe,div);
      
      }
    },1000);
     
   }
 }
 
 //////
 
 function rectAds(iframe,div){
   iframe.style='padding:"0px"; text-align:center; height:250px; width:300px; ';
   div.style='padding:"0px"; text-align:center; height:250px; width:300px; ';
   iframe.height="250";
   iframe.width="300";
 let oDoc = iframe.contentWindow.document;
oDoc.open();
oDoc.write("<html><body style='padding:0px; margin:0px;'><script type=\"text/javascript\">	atOptions = {		'key' : '48c9b336ccecf4af7182290440f7f62a',		'format' : 'iframe',	'height' : 250,		'width' : 300,		'params' : {}	};	document.write('<scr' + 'ipt type=\"text/javascript\" src=\"http' + (location.protocol === 'https:' ? 's' : '') + '://abandonrecommendationwars.com/48c9b336ccecf4af7182290440f7f62a/invoke.js\"></scr' + 'ipt>');<\/script><\/body><\/html>");
oDoc.close();

 }
 
 
 
 function rectAdsBig(iframe,div){
   iframe.style='padding:"0px"; text-align:center; height:90px; width:728px; ';
   div.style='padding:"0px"; text-align:center; height:90px; width:728px;';
   iframe.height="90";
   iframe.width="728";
 let oDoc = iframe.contentWindow.document;
oDoc.open();
oDoc.write("<html><body style='padding:0px; margin:0px;'><script type=\"text/javascript\">	atOptions = {		'key' : 'f44586b90cf489bf68e51feb023d286b',	'format' : 'iframe',		'height' : 90,		'width' : 728,	'params' : {}}; 	document.write('<scr' + 'ipt type=\"text/javascript\" src=\"http' + (location.protocol === 'https:' ? 's' : '') + '://abandonrecommendationwars.com/f44586b90cf489bf68e51feb023d286b/invoke.js\"></scr' + 'ipt>');<\/script><\/body><\/html>");
oDoc.close();

 }
 
 
 
 
 
 
