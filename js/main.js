$(document).ready(function() {

	// MODALS
	$.modal.defaults = {
	  overlay: "#000",        // Overlay color
	  opacity: 0.75,          // Overlay opacity
	  zIndex: 100000,              // Overlay z-index.
	  escapeClose: true,      // Allows the user to close the modal by pressing `ESC`
	  clickClose: true,       // Allows the user to close the modal by clicking the overlay
	  closeText: 'Close',     // Text content for the close <a> tag.
	  closeClass: '',         // Add additional class(es) to the close <a> tag.
	  showClose: false,        // Shows a (X) icon/link in the top-right corner
	  modalClass: "modal",    // CSS class added to the element being displayed in the modal.
	  spinnerHtml: null,      // HTML appended to the default spinner during AJAX requests.
	  showSpinner: true,      // Enable/disable the default spinner during AJAX requests.
	  fadeDuration: 200,     // Number of milliseconds the fade transition takes (null means no transition)
	  fadeDelay: 0          // Point during the overlay's fade-in that the modal begins to fade in (.5 = 50%, 1.5 = 150%, etc.)
	};

	// open add-asset modal button
	$(document).on('click',".asset-column .add-resource-btn", function() {
		$("#add-asset-modal").modal();
		setTimeout(function() {
			$("#add-asset-modal").find("input").focus();
		},0);
	});

	// open add-blogs modal button
	$(document).on('click',".blogs-column .add-resource-btn", function() {
		$("#add-blogs-modal").modal();
		setTimeout(function() {
			$("#add-blogs-modal").find("input").focus();
		},0);
	});

	$(document).on('click','.modal-close-btn',function(e) {
		e.preventDefault();
		e.stopImmediatePropagation();
		$.modal.close();
	});


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

			$(".blogs-column .add-resource").fadeOut(100);
			$(".blog-post").fadeOut(100, function() {
				$.ajax({
				    url: "blog-posts-apple.html",
				    dataType: "html",
				    success: function(data) {
				        $(".blogs-column-content").html(data);
				        $(".blog-post").css("display","none");
				        $(".blog-post").fadeIn(100);
				        $(".blogs-column .add-resource").fadeIn(100);
				    }
				});
			});


			$(".social-media-column .add-resource").fadeOut(100);
			$(".social-media-post").fadeOut(100, function() {
				$.ajax({
				    url: "social-media-posts-apple.html",
				    dataType: "html",
				    success: function(data) {
				        $(".social-media-column-content").html(data);
				        $(".social-media-post").css("display","none");
				        $(".social-media-post").fadeIn(100);
				        $(".social-media-column .add-resource").fadeIn(100);
				    }
				});
			});
	
		} else {

			demoClicked = false;
			$(this).parent().removeClass("active");

			$(".blogs-column .add-resource").fadeOut(100);
			$(".blog-post").fadeOut(100, function() {
				$.ajax({
				    url: "blog-posts.html",
				    dataType: "html",
				    success: function(data) {
				        $(".blogs-column-content").html(data);
				        $(".blog-post").css("display","none");
				        $(".blog-post").fadeIn(100);
				        $(".blogs-column .add-resource").fadeIn(100);
				    }
				});
			});

			$(".social-media-column .add-resource").fadeOut(100);
			$(".social-media-post").fadeOut(100, function() {
				$.ajax({
				    url: "social-media-posts.html",
				    dataType: "html",
				    success: function(data) {
				        $(".social-media-column-content").html(data);
				        $(".social-media-post").css("display","none");
				        $(".social-media-post").fadeIn(100);
				        $(".social-media-column .add-resource").fadeIn(100);
				    }
				});
			});

		}



	});



});