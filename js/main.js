////////2
window.onload =function(){
 loadQrInput();
 clipBord();
 loadAds();
 
};





function clipBord(){
navigator.clipboard.readText()
  .then(text => {
    try{
    if(text.length < getLimit(100)){
     if(isNum(text)){
        var f=function(i){
      if(i.value==""){
      selectNavItem(2);
      i.value=text;
      }
    };
    f(document.getElementById("vc_contact_num"));
    
    
     }else if(isMail(text)){
       
       
       var f1=function(i){
      if(i.value==""){
      selectNavItem(4);
      i.value=text;
      } 
    };
    f1(document.getElementById("email_email"));
       
     }else if(isUrl(text)){
       
       var f2=function(i){
      if(i.value==""){
      selectNavItem(1); 
      i.value=text;
      }
    };
    f2(document.getElementById("web_inp"));
       
     }else{
       
       var f3=function(i){
      if(i.value==""){
      selectNavItem(0);
      i.value=text;
      }
    };
    f3(document.getElementById("text_textarea"));
       
       
     }
    }
    
    }catch(e){alert(e);}
    
  }).catch(err => {
    
     });
}
function generate(){
  var img=document.getElementById("result_img"), re_div=document.getElementById("result_main"),
  pbar=document.getElementById("progress_bar"),
  dbtn=document.getElementById("download-btn"),
  r_d_size=document.getElementById("result_d_size"),dwnpdf=document.getElementById("dwnPdf"),dwnsvg=document.getElementById("dwnSvg");
  
var data=encodeURIComponent(getData());
var rdat=verify(data);
if(rdat.is){
  go("#scroll-result");
  
  pbar.style.display="block";
  pbar.setAttribute("value",getRan(0,50)+"");
  pbar.setAttribute("value",getRan(51,99)+"");

  img.src="https://chart.googleapis.com/chart?cht=qr&chl="+data+"&chs="+selected+"x"+selected+"&choe=UTF-8&chld=L|2";
img.width=""+selected;
img.height=""+selected;
selected_c=selected;
img.addEventListener("load", function(){
pbar.style.width="100%";
re_div.style.display="block";
pbar.style.display="none";
//r_d_size.innerHTML="Results. <small>("+selected+"x"+selected+")</small>";
dbtn.onclick=function(){
  showFullScreenAd(function(){
    
  saveImg(img,function(dataURL){
	var d=new Date();
  dwn(dataURL,("Qr_Gene_"+d.getDay()+"_"+(d.getMonth()+1)+"_"+d.getFullYear()+"_"+d.getHours()+"_"+d.getMinutes()+""+d.getSeconds()+".jpg"));
});
  
  });//ad
   

};

///pdf
dwnpdf.onclick=function(){
  showFullScreenAd(function(){
    var d=new Date();
dwnPdf(img,("Qr_Gene_"+d.getDay()+"_"+(d.getMonth()+1)+"_"+d.getFullYear()+"_"+d.getHours()+"_"+d.getMinutes()+""+d.getSeconds()+".pdf"));
  });

};
/////////
dwnsvg.onclick=function(){
  showFullScreenAd(function(){
    var d=new Date();
dwnSvg(img,("Qr_Gene_"+d.getDay()+"_"+(d.getMonth()+1)+"_"+d.getFullYear()+"_"+d.getHours()+"_"+d.getMinutes()+""+d.getSeconds()+".svg"));
  });
   

};



});
/////onload
}else{
UIkit.notification({
    message: "<div class='uk-card notify-style'><span uk-icon='warning'>  </span> <small class='uk-text-muted uk-margin ' ><strong class='uk-margin-small-left'> "+rdat.error+" </strong></small> </div>",
    status: 'danger',
    pos: 'top-center',
    timeout: 5000
});
}
  
}

function dwnSvg(img,svgname){
	
		var nti=UIkit.notification({
    message: "<div class='uk-card notify-style'><span uk-icon='clock'>  </span> <small class='uk-text-muted uk-margin ' ><strong class='uk-margin-small-left'> Loading... </strong></small> </div>",
    status: 'success',
    pos: 'top-center',
    timeout: 8000
});
var s= function(){
	saveImg(img,function(imgData){
		var d=getSvgData(selected_c,imgData);
    var image = 'data:image/svg+xml;base64,'+btoa(d);
    dwn(image,svgname);
    
    nti.close();
UIkit.notification({
    message: "<div class='uk-card notify-style'><span uk-icon='check'>  </span> <small class='uk-text-muted uk-margin ' ><strong class='uk-margin-small-left'> Created</strong></small> </div>",
    status: 'success',
    pos: 'top-center',
    timeout: 800
});	
    
    
    
	});
	
};
setTimeout(s, 300);


} 
 
     
function dwnPdf(img,pdfname){
var nti=UIkit.notification({
    message: "<div class='uk-card notify-style'><span uk-icon='clock'>  </span> <small class='uk-text-muted uk-margin ' ><strong class='uk-margin-small-left'> Loading... </strong></small> </div>",
    status: 'success',
    pos: 'top-center',
    timeout: 8000
});
var s= function(){
saveImg(img,function(imgData){
var pdf= new jsPDF();
const imgProps= pdf.getImageProperties(imgData);
  const pdfWidth = pdf.internal.pageSize.getWidth();
 const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
pdf.save(pdfname);
nti.close();
UIkit.notification({
    message: "<div class='uk-card notify-style'><span uk-icon='check'>  </span> <small class='uk-text-muted uk-margin ' ><strong class='uk-margin-small-left'> Created</strong></small> </div>",
    status: 'success',
    pos: 'top-center',
    timeout: 800
});	
});
};
setTimeout(s, 300);
 

}
   
     