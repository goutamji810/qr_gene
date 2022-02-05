//////3
     function item_pixel_select(v){
     var inp=document.getElementById("pixel");
     selected=parseInt(v);
     inp.value=v+"";
     } 
      
  function text_change(ta,min,maxp,cid,eid){
    var max=(maxp<101&&-1<maxp)? getLimit(maxp):maxp;
var t=document.getElementById(cid);
updateLimit(ta,t,min,max,true,eid);
  }
   //////////////
    function getData(){
      var text="";
      switch(selected_tab){
       case 0:{
        text=document.getElementById("text_textarea").value; 
       }break;
       case 1:{
        text=document.getElementById("web_inp").value; 
       }break;
       case 2:{
        text=getVcard([
          "vcard_fn",
          "vcard_ln",
          "vc_contact_num",
          "vcard_f",
          "vcard_fx",
          "vc_email",
          "vcard_com_name",
          "vcard_job",
          "vc_sr",
          "vcard_city_name",
          "vcard_pin",
          "vcard_state_name",
          "vcard_country",
          "vc_web"]); 
       }break;
       case 3:{
         return getMessage(["sms_contact_num","sms_textarea"]);
       }break;
       case 4:{
      return getMail(["email_email","email_sub","email_msg_textarea"]);
       }break;
       case 5:{
  return getWifi(["wifi_ssid","wifi_pass"],["wifi_wpa","wifi_wps"],"wifi_hidden");
       }break;
      }
      
    return text;  
    } 
    
      
      
        
        
      