// ==UserScript==
// @name         Hide trending
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.facebook.com/*
// @grant        none
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function()  {
    'use strict';

    // Your code here...
    $(document).ready(function() {
        hideTrend();
  });
})();


function hideTrend(){
		var egoPane = document.getElementById("pagelet_ego_pane");
		var trendsPane = document.getElementById("pagelet_trending_tags_and_topics");
		trendsPane.style.display = 'none';
		egoPane.style.display = 'none'; 
	
}
