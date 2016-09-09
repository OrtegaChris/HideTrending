(function() {
    'use strict';
	// For Use with Tampermonkey userscriptmanager for Chrome or similar browser script manager
    var egoPane = document.getElementById("pagelet_ego_pane");
	var trendsPane = document.getElementById("pagelet_trending_tags_and_topics");
	trendsPane.style.display = 'none';
	egoPane.style.display = 'none';
})();