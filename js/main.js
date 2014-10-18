$(document).ready(function() {

	$.ajax({
	    url: "blog-posts.html",
	    dataType: "html",
	    success: function(data) {
	        $(".blogs-column-content").html(data);
	    }
	});

	$.ajax({
	    url: "social-media-posts.html",
	    dataType: "html",
	    success: function(data) {
	        $(".social-media-column-content").html(data);
	    }
	});

	var demoClicked = false;

	$(document).on('click','.asset.box .demo-click',function() {

		if (!demoClicked) {

			demoClicked = true;
			$(this).parent().addClass("active");

			$.ajax({
			    url: "blog-posts-apple.html",
			    dataType: "html",
			    success: function(data) {
			        $(".blogs-column-content").html(data);
			    }
			});

			$.ajax({
			    url: "social-media-posts-apple.html",
			    dataType: "html",
			    success: function(data) {
			        $(".social-media-column-content").html(data);
			    }
			});
	
		} else {

			demoClicked = false;
			$(this).parent().removeClass("active");

			$.ajax({
			    url: "blog-posts.html",
			    dataType: "html",
			    success: function(data) {
			        $(".blogs-column-content").html(data);
			    }
			});

			$.ajax({
			    url: "social-media-posts.html",
			    dataType: "html",
			    success: function(data) {
			        $(".social-media-column-content").html(data);
			    }
			});

		}



	});



});