window.onload = onPageLoad('state');

function onPageLoad(sParam) {
  	var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split("&");

    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split("=");
        if (sParameterName[0] == sParam) {
        	if (sParameterName[1] == "did_navi") {
        		document.getElementById("txt_description_").innerHTML = "案内終了";
        	} else {
        		document.getElementById("txt_description_").innerHTML = "終了";
        	}
        	document.getElementById("start_package_id_").style.display = 'none';
        	document.getElementById("start_route_").style.display = 'none';
        	document.getElementById("start_point_").style.display = 'none';
        }
    }

    var Opera = (navigator.userAgent.match(/Opera|OPR\//) ? true : false);
    var intent= document.getElementById("start_navi_").href;
    intent = intent.replace("BROWSER","Opera");
    document.getElementById("start_navi_").href = intent;
    document.getElementById("status").innerHTML = "Opera";
	
    // if(Opera)  {
    	// var intent= document.getElementById("start_navi_").href;
    	// intent = intent.replace("BROWSER","Opera");
    	// document.getElementById("start_navi_").href = intent;
    	// document.getElementById("status").innerHTML = "Opera";
    // } else if(navigator.userAgent.indexOf("Chrome") != -1 ) {
    //     var intent= document.getElementById("start_navi_").href;
    // 	intent = intent.replace("BROWSER","Chrome");
    // 	document.getElementById("start_navi_").href = intent;
    // 	document.getElementById("status").innerHTML = "Chrome";
    // } else if(navigator.userAgent.indexOf("Safari") != -1) {
    // 	var intent= document.getElementById("start_navi_").href;
    // 	intent = intent.replace("BROWSER","Safari");
    // 	document.getElementById("start_navi_").href = intent;
    // 	document.getElementById("status").innerHTML = "Safari";
    // } else if(navigator.userAgent.indexOf("Firefox") != -1 ) {
    //      var intent= document.getElementById("start_navi_").href;
    // 	intent = intent.replace("BROWSER","Firefox");
    // 	document.getElementById("start_navi_").href = intent;
    // 	document.getElementById("status").innerHTML = "Firefox";
    // }
    // else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
    // {
    //  	var intent= document.getElementById("start_navi_").href;
    // 	intent = intent.replace("BROWSER","IE");
    // 	document.getElementById("start_navi_").href = intent;
    // 	document.getElementById("status").innerHTML = "IE";
    // }  
    // else 
    // {
    // 	var intent= document.getElementById("start_navi_").href;
    // 	intent = intent.replace("BROWSER","unknown");
    // 	document.getElementById("start_navi_").href = intent;
    // 	document.getElementById("status").innerHTML = "unknown";
    // }
}