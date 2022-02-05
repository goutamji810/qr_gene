///////// 1









function go(url){
  var link = document.createElement("a");
    link.href = url;
    document.body.appendChild(link);
    link.click();
    link.remove();
}


////////////



////////
function openDialog(title,data,onShow,onClose){
  let div=document.createElement("div"),
  body=document.body,
  nav=document.getElementById("nav_bar_main");
   let btn_id="full_dialog"+getRan(999,99999);
   let maindata='     <div  style="position: fixed; padding:0px;  display: block;  width: 100%;  height: 100%;  top: 0; overflow-y:scroll;  left: 0;  right: 0; bottom: 0; background-color: rgb(255,255,255); z-index: 2; cursor: pointer; boder-radius:0px;">        <h3 class="uk-card-title" style="  padding: 12px; box-shadow: 0 0px 4px rgba(156,153,154,0.886);">'+title+' <button class="uk-alert-close" type="button" uk-close id="'+btn_id+'" ></button>  </h3> <div style="text-align:center;  padding-bottom:20px;">       '+data+'    </div>     <br>  </div>';
   nav.style.display="none";
   div.innerHTML=maindata;
   body.appendChild(div);
   let btn_close=document.getElementById(btn_id);
   if(onShow!=undefined&&onShow!=null)onShow(btn_close);
   btn_close.addEventListener("click",function(){
     nav.style.display="block";
     div.remove();
    if(onClose!=undefined&&onClose!=null)onClose(btn_close);
   });
   
 }

 //////
 function isMobile(){
   return(window.innerWidth<500);
 }
 
 //////
 function cSL(src){
  let s=document.createElement("script");
  s.type="text/javascript";
  s.src=src;
  return s;
}
//////////
function cSC(code){
  let s=document.createElement("script");
  s.type="text/javascript";
  s.innerHTML=code;
  return s;
}
/////////

function getMargin(){
  return (isMobile()? 19:130);
}
function isInnerAd(e) {
if(e.hasAttribute("innerAd")){
  return (e.getAttribute("innerAd")=="true");
}
return false;
}
/////////

function getSvgData(size,data){
	return '<?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="{{size}}px" height="{{size}}px" viewBox="0 0 {{size}} {{size}}" enable-background="new 0 0 {{size}} {{size}}" xml:space="preserve">  <image id="image0" width="{{size}}" height="{{size}}" x="0" y="0"    href="{{data}}" /></svg>'.replaceAll("{{size}}",size).replaceAll("{{data}}",data);
}

////////
    function isUrl(userInput) {
    var res = userInput.match(/((?:(?:http?|ftp)[s]*:\/\/)?[a-z0-9-%\/\&=?\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?)/gi);
    if(res != null&&userInput.trim().indexOf(" ")==-1)
        return true;
    else
        return false;
}
//////////

function getMessage(id){
     var ele=[];      
     for(var i=0; i<id.length; i++){          ele[i]=document.getElementById(id[i]).value;        
     }
     return "SMSTO:"+ele[0]+":"+ele[1];
}
////


function getMail(id){
     var ele=[];      
     for(var i=0; i<id.length; i++){          ele[i]=document.getElementById(id[i]).value;        
     }
return "MATMSG:TO:"+ele[0]+";SUB:"+ele[1]+";BODY:"+ele[1]+";;";
}

/////////
function getWifi(id,rad,h){
     var ele=[],ele2=[],hi=document.getElementById(h);      
     for(var i=0; i<id.length; i++){          ele[i]=document.getElementById(id[i]).value;        
     }
   for(var i2=0; i2<rad.length; i2++){          ele2[i2]=document.getElementById(rad[i2]);        
     }
    
return "WIFI:T:{{passtype}};S:{{name}};P:{{pass}};H:{{hidden}};".replaceAll("{{name}}",ele[0]).replaceAll("{{pass}}",ele[1]).replaceAll("{{hidden}}",hi.checked).replaceAll("{{passtype}}",(((ele2[0].checked)?"WPA":((ele2[1].checked)?"WEP":"NONE"))));

}







/////////

function selectNavItem(index){
  document.getElementById("nav_tabs_select").getElementsByTagName('a')[index].click();
}



////////

function isNum(v){
  var phoneNum = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im; 
return (v.match(phoneNum)!=null);
}

function isMail(v){
  return v.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}
      ///////////
     function getVcard(id){
       var ele=[];
       for(var i=0; i<id.length; i++){
         ele[i]=document.getElementById(id[i]).value;
       }
       var data= "BEGIN:VCARD VERSION:3.0 N:{lastname};{name} FN:{name} {lastname} ORG:{company} TITLE:{job} ADR:;;{add_gully};{add_city};{state};{pin};{country} TEL;WORK;VOICE:{phone} TEL;CELL:{no} TEL;FAX:{fax} EMAIL;WORK;INTERNET:{email} URL:{website} END:VCARD"; 
       var fdata=data.replaceAll("{name}",ele[0]).replaceAll("{lastname}",ele[1]).replaceAll("{no}",ele[2]).replaceAll("{phone}",ele[3]).replaceAll("{fax}",ele[4]).replaceAll("{email}",ele[5]);
       
     var f2data=fdata.replaceAll("{company}",ele[6]).replaceAll("{job}",ele[7]).replaceAll("{add_gully}",ele[8]).replaceAll("{add_city}",ele[9]).replaceAll("{pin}",ele[10]).replaceAll("{state}",ele[11]).replaceAll("{country}",ele[12]).replaceAll("{website}",ele[13]);
       
       return f2data;
       
     }
      ////////////
      function selectTab(i){
      selected_tab=i; 
      updateGen();
      
      }
      //////////
     function reClass(e,reVal,newVal){
      var c=e.getAttribute("class");
      for(var i=0; i<reVal.length;i++){
       c=c.replace(" "+reVal[i],""); 
      }
      for(var i=0; i<newVal.length; i++){
       c+=" "+newVal[i];
      }
      e.setAttribute("class",c);
     }
      
    ///////////// 
  function updateLimit(inp,stext,min,max,dgen,id){
    var text= inp.value.length+"/"+max;
  if(inp.value.length<min){
     
     reClass(inp,["uk-form-danger","uk-form-success"],["uk-form-danger"]);
     
     disableGen(id,"input value is too short (min:"+min+")");
     
text+=" ( text is too short. min required:"+min+" )";
}else if(inp.value.length>max){
    disableGen(id,"input value is too long (limit:"+max+")");
    reClass(inp,["uk-form-danger","uk-form-success"],["uk-form-danger"]);

text+=" ( text is too long. limit:"+max+" )";
  }else{
     enableGen(id);
     reClass(inp,["uk-form-danger","uk-form-success"],["uk-form-success"]);
  }
   stext.innerHTML=text;
   
  }
  ////////// /GeneComtrol
  var gene_errors=[[],[],[],[],[],[]];
  function disableGen(id,e){
   var val={id:id,error:e};
   if(!checkInd(gene_errors[selected_tab],val.id)){
     gene_errors[selected_tab][gene_errors[selected_tab].length]=val;
   }
   updateGen();
  }
  function enableGen(id){
 if(checkInd(gene_errors[selected_tab],id)){
     var io=checkIndOf(gene_errors[selected_tab],id);
     gene_errors[selected_tab].splice(io,1);
   }
   updateGen();
  }
  
  /////////
  function updateGen(){
    var btn=document.getElementById("gen");
    btn.disabled=false;
    if(gene_errors[selected_tab].length>0){
     btn.disabled=true;
   }
  }
     ////////
function onChangePixel(a){
  if(a.value==""||a.value=="0"){
   a.value="100";
  }
  if(a.value.indexOf(".")!=-1){
reClass(a,["uk-form-danger","uk-form-success"],["uk-form-danger"]);
   value_vailid=false;
   disableGen("pixel_change","Size is not supported.");
  }else if(parseInt(a.value)>540){
    reClass(a,["uk-form-danger","uk-form-success"],["uk-form-danger"]);
    
    value_vailid=false;
    disableGen("pixel_change","Size is not supported.");
  }else{
    reClass(a,["uk-form-danger","uk-form-success"],["uk-form-success"]);
    value_vailid=true;
    selected=parseInt(a.value);
    enableGen("pixel_change");
}
}

////////
  
  
function checkInd(list,val){
  var r=false;
  for(var i=0;i<list.length; i++){
   if(list[i].id==val){r=true;}
  }
  return r;
}
/////////
   function checkIndOf(list,val){
  var r=-1;
  for(var i=0;i<list.length; i++){
   if(list[i].id==val){r=i;}
  }
  return r;
}
    /////////
    function getRan(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
  }
  ////////
   
  function	dwn(uri, name){
    var link = document.createElement("a");
    link.setAttribute('download', name);
    link.setAttribute('target', '_blank');
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    link.remove();
    
} 
   //////
  var canvas;
  function saveImg(img,caback) {
     var imgI = new Image();
     imgI.src = img.src;
     canvas = document.createElement("canvas");
     imgI.crossOrigin="anonymous";
     canvas.width=selected_c;
     canvas.height=selected_c;
     var body = document.getElementsByTagName("body")[0];
     body.appendChild(canvas);
     imgI.onload=function (){
     var ctx = canvas.getContext("2d");
     ctx.drawImage(imgI, 0, 0);
     var dataURL = canvas.toDataURL("image/jpg");
     /////
     caback(dataURL);
       /////
     canvas.remove();
     };
   }
   
     /////////// 
   function verify(data){
     var r={is:true,error:""};
     if(data==""||data==null|| data==undefined){r.is=false;r.error=" Please enter some text.";}else if(data.length>getLimit(100)){r.is=false;r.error="text is too long text limit is "+getLimit(100)+" words.";}
     return r;
   }
///////


function getLimit(p){
  var total=1940;
  return parseInt((total/100)*p);
}

/////////

function loadQrInput() {
 var inps=document.getElementsByClassName("input-qr");
 for(var i=0; i<inps.length; i++){
  var div=inps[i],dat="";
  if(div.hasAttribute("label")){
   dat+='<small class="uk-text-muted uk-margin" ><strong> '+(div.getAttribute("label"))+'</strong></small> ';
   
  }
  if(div.hasAttribute("inp-json")){
    var tj=div.getAttribute("inp-json");
  var json = JSON.parse(tj);
 if(json.inpC==2){
   
   dat+='<div class="uk-margin uk-flex uk-inline"><div class="uk-margin-medium-right"><div><div class="uk-inline">  '+((json.icon1!="")?'<span class="uk-form-icon" uk-icon="icon: '+json.icon1+'; ratio:0.9;"></span>':"")+' <input  placeholder="'+json.phold1+'" onchange="text_change(this,'+json.cMin1+','+json.cMax1+',\''+json.cId1+'\',\''+json.iId1+'\');" class="uk-input inp-large" type="'+json.type1+'" id="'+json.iId1+'" > </div> <div style="text-align: right;">  <small  id="'+json.cId1+'" class="uk-text-muted">'+json.cMin1+'/'+getLimit(json.cMax1)+'</small> </div>   </div>  </div>  <div>        <div class="uk-inline">            '+((json.icon2!="")?' <span  class="uk-form-icon" uk-icon="icon: '+json.icon2+'; ratio:0.9;"></span> ':"")+'        <input placeholder="'+json.phold2+'" onchange="text_change(this,'+json.cMin2+','+json.cMax2+',\''+json.cId2+'\',\''+json.iId2+'\');" class="uk-input inp-large" type="'+json.type2+'" id="'+json.iId2+'">    </div> <div style="text-align: right;">  <small style="margin:5px;" id="'+json.cId2+'" class="uk-text-muted">'+json.cMin2+'/'+getLimit(json.cMax2)+'</small> </div></div></div>';
   
     }
  else{
    
    dat+='<br><div class="uk-margin uk-flex uk-inline">    '+((json.icon1!="")?'  <span class="uk-form-icon uk-form-icon-flip" uk-icon="icon: '+json.icon1+'; ratio:0.9;"></span>' :"")+'       <input onchange="text_change(this,'+json.cMin1+','+json.cMax1+',\''+json.cId1+'\',\''+json.iId1+'\');" placeholder="'+json.phold1+'" class="uk-input inp-large" type="'+json.type1+'" id="'+json.iId1+'" >     </div>   <div style="text-align: right;" class="uk-form-width-large@s">  <small style="margin:5px;" id="'+json.cId1+'" class="uk-text-muted">'+json.cMin1+'/'+getLimit(json.cMax1)+'</small>  </div>';
  }
  }//inp-json end

   
  div.innerHTML+=dat;
  
  
 }
}



function openPP(){
let data='	<h1>Privacy Policy for Qr Gane</h1><p>At Qr Gene, accessible from https://qr-gene.blogspot.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Qr Gene and how we use it.</p><p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p><p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Qr Gene. This policy is not applicable to any information collected offline or via channels other than this website.</p><h2>Consent</h2><p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p><h2>Information we collect</h2><p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p><p>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p><p>When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</p><h2>How we use your information</h2><p>We use the information we collect in various ways, including to:</p><ul><li>Provide, operate, and maintain our website</li><li>Improve, personalize, and expand our website</li><li>Understand and analyze how you use our website</li><li>Develop new products, services, features, and functionality</li><li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li><li>Send you emails</li><li>Find and prevent fraud</li></ul><h2>Log Files</h2><p>Qr Gene follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services\' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users\' movement on the website, and gathering demographic information.</p><h2>Google DoubleClick DART Cookie</h2><p>Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads">https://policies.google.com/technologies/ads</a></p><h2>Our Advertising Partners</h2><p>Some of advertisers on our site may use cookies and web beacons. Our advertising partners are listed below. Each of our advertising partners has their own Privacy Policy for their policies on user data. For easier access, we hyperlinked to their Privacy Policies below.</p><ul>    <li>      <p>Google</p>       <p><a href="https://policies.google.com/technologies/ads">https://policies.google.com/technologies/ads</a></p>   </li></ul><h2>Advertising Partners Privacy Policies</h2><P>You may consult this list to find the Privacy Policy for each of the advertising partners of Qr Gene.</p><p>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Qr Gene, which are sent directly to users\' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p><p>Note that Qr Gene has no access to or control over these cookies that are used by third-party advertisers.</p><h2>Third Party Privacy Policies</h2><p>Qr Gene\'s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. </p><p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers\' respective websites.</p><h2>CCPA Privacy Rights (Do Not Sell My Personal Information)</h2><p>Under the CCPA, among other rights, California consumers have the right to:</p><p>Request that a business that collects a consumer\'s personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</p><p>Request that a business delete any personal data about the consumer that a business has collected.</p><p>Request that a business that sells a consumer\'s personal data, not sell the consumer\'s personal data.</p><p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p><h2>GDPR Data Protection Rights</h2><p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p><p>The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.</p><p>The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</p><p>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</p><p>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</p><p>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</p><p>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</p><p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p><h2>Children\'s Information</h2><p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p><p>Qr Gene does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>	';
document.getElementById("nav-drawer-close").click();
openDialog(" Privacy Policy",data,function(btn){
 },function(){
   
 });
  
}

////////////
function openContact(){
let data='<div><h3 style="height: 0px; text-align: center;"><span style="font-family: trebuchet;"><u>C</u><u>ontact US !</u></span></h3><div><br /></div><div><br /></div><h5 style="text-align: center;"><i>If you have any query regrading to Site, Advertisement and any other issue, please feel free to contact at&nbsp;</i><i>:-</i></h5><div><br /></div><div class="separator" style="clear: both; text-align: center;"><img border="0" data-original-height="500" data-original-width="500" height="100" src="https://1.bp.blogspot.com/-66ru4RgboG0/X0U9eSwb-WI/AAAAAAAAAoc/uKZTI_rTHSEVhc_jnjvG8Zrk93BlwsJhACLcBGAsYHQ/w128-h128/clipart2503239.png" width="100" /></div><div class="separator" style="clear: both; text-align: center;">Email:-</div><div class="separator" style="clear: both; text-align: center;"><br /></div><div style="text-align: center;"><a href="mailto:smart.offical810@gmail.com;">smart.offical810@gmail.com</a></div><div class="separator" style="clear: both; text-align: center;"><br /></div><div class="separator" style="clear: both; text-align: center;"><br /></div><h5 style="text-align: center;"><i><u>We will Definitely reply to your Message As Soon as Possible</u></i></h5><div><i><u><br /></u></i></div><div><br /></div>		';
document.getElementById("nav-drawer-close").click();
openDialog(" Contact",data,function(btn){
 },function(){
   
 });
  
}

////////////

function openAbout(){
let data='<div><h1 style="text-align: center;"><span style="font-size: x-large; font-family: \'Josefin Sans\', sans-serif; "><u>A</u><u>bout Us !</u></span></h1><h3 style="text-align: center;"><span style="font-weight: normal;"><span style="font-size: large; font-family: \'Josefin Sans\', sans-serif;">Hello Friends Welcome To Qr Gene</span></span></h3><p style="text-align: center;"><br /><p style="font-size: 18px;">Qr Gene is a Professional Qr Generator Platform. Here we will provide you only interesting content, which you will like very much.<br /><p style="text-align: center;"><br /><p style="font-size: 18px;">We\'re dedicated to providing you the best of Qr Generator, with a focus on dependability and Generator free Qr code , download types png , jpeg , jpg , svg , pdf.<br /><br /><p style="font-size: 18px; ">We\'re working to turn our passion for Qr Generator into a booming online website. We hope you enjoy our Qr Generator as much as we enjoy offering them to you.</p><div style="text-align: center;"><br /></div><div style="text-align: center; "><h3>I will keep posting more important posts on my Website for all of you. Please give your support and love.</h3></div><div style="text-align: center;"><h3>Thanks For Visiting Our Site</h3></div><div style="text-align: center;"><a href="" ><span style="font-size: medium; font-family: \'Josefin Sans\';"><h4>Contact Us !</h4></span></a></div></div><br><br>	';
document.getElementById("nav-drawer-close").click();
openDialog(" About",data,function(btn){
 },function(){
   
 });
  
}
/////////////





  