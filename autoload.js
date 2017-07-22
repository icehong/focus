// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var para_cart;
document.getElementById('enterprise-nav-4').click();

chrome.storage.sync.get('foucs_id',function (obj) {
  window.find(obj["foucs_id"],false,true);
  
  var all = document.getElementById("enterprise-content-9-国内内部处理机");
  var childs = all.childNodes; 
	for(i=0; i < childs.length;i++)
	{
		//console.log(childs[i]);		
		if(childs[i].nodeName != "#text"){
			if(childs[i].innerText.indexOf(obj["foucs_id"]) >= 0
				&& childs[i].innerHTML.indexOf("加入购物车") >= 0 ){
					//childs[i].childNodes[9].childNodes[1].click();
				para_cart = childs[i].childNodes[9] ;
				
				var MutationObserver = window.WebKitMutationObserver;
				var observer = new MutationObserver(function(mutations) {
					mutations.forEach(function(mutation) {
					console.log('old', mutation.oldValue);
					console.log('new', mutation.target.style.cssText);
					setTimeout("para_cart.childNodes[1].click();",1)
					});    
				});

				var config = { attributes: true, attributeOldValue: true };
				observer.observe(para_cart, config);

			}						
		}		
	};
});
