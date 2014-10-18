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


	if ($(".statistic-chart").length) {
		createDaysChart($(".statistic-chart"));
	}

	
	// create a line chart for days
	function createDaysChart(canvasObj) {
		var fillColorVar = "rgba(58, 130, 49,0.3)"; //"rgba(41,93,35,0.4)"; //"#cceac8";
		var strokeColorVar = "rgb(58, 130, 49)"; //"#295D23";
		var ctx = canvasObj.get(0).getContext("2d");
		var days = [ "01", "02", "03", "04", "05", "06", "07", "08", "09", "10",
				"11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21",
				"22", "23", "24", "25", "26", "27", "28", "29", "30", "31" ];

		var data = {
			labels : [days[0],days[1],days[2],days[3],days[4],days[5],days[6],days[7],days[8],days[9],days[10],days[11],days[12],days[13],days[14],days[15],days[16],days[17],days[18],days[19],days[20],days[21],days[22],days[23],days[24],days[25],days[26],days[27],days[28],days[29],days[30]],
			datasets : [
					{
						fillColor : fillColorVar,
						strokeColor: strokeColorVar,
						data : [ 20, 30, 24, 26, 19, 33, 24, 22, 19, 17, 23, 25,
								19, 30, 28, 26, 33, 24, 12, 16, 24, 25, 27, 24, 16,
								19, 30, 21, 20, 22, 21 ]
					}
					]
		}

		new Chart(ctx).Line(data, {
			bezierCurve: false,
			pointDot: false,
			scaleFontFamily : "'Arial',sans-serif",
			scaleShowGridLines : true,
			scaleGridLineColor : "#ddd",
			animation : true,
			animationEasing : "easeOutQuart",
			animationSteps : "100"
		});

	}




}); // document ready