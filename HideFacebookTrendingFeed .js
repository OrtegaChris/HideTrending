(function()  {
    'use strict';

    // Your code here...
    $(document).ready(function() {
        hideTrend();
  });
})();


function hideTrend(){
		// Hides Trending topics and Suggested Pages
		var egoPane = document.getElementById("pagelet_ego_pane");
		var trendsPane = document.getElementById("pagelet_trending_tags_and_topics");
		trendsPane.style.display = 'none';
		egoPane.style.display = 'none';
	}
