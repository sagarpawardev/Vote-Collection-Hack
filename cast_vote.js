// ==UserScript==
// @name        GoogleNikon
// @namespace   sgrpwr
// @description SOme Description
// @include     https://www.iamnikon.in/faq/
// @version     1
// @grant       none
// @require http://code.jquery.com/jquery-1.12.4.min.js
// ==/UserScript==

var userid = "59e4c9251ba36";
var request_count = 0;

function send_request(){
     console.log("Total Requests Made: "+request_count);
     request_count++;
		 console.log("Sending Request...");
     $.post( "https://www.iamnikon.in/festive/share_count.php", { userid: userid })
      .done(function( data ) {
            if(data == "success") {								
              console.log("Voted Successfully!!");
            }
            else if(data == "Already Liked"){								
                     console.log("Already Voted!!");
                 }
            else if(data == "Failed"){								
                   console.log("Failed!!");
                 }
            
       
            console.log("Sleep Time");
            var millisecondsToWait = 15*1000;
            setTimeout(function() {
                 console.log("Wakeup Time !!!");
                 console.log("Reloading Page...")
                 send_request();
            }, millisecondsToWait);
      });
  console.log("Running Scripts...");
}

send_request();
