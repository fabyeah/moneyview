$(document).ready(function() {

	$(document).on('click',".logo-container",function() {
		window.location.href="index.html";
	});


  	$(document).on("keypress", function(e) {
   		if(e.keyCode==13){
			$(".blog-post.slidein").slideDown(400,function() {
				// do nothing
			});
  		}
  	});

	// setTimeout(function() {
	// 	$(".blog-post.slidein").slideDown(400,function() {
	// 		// do nothing
	// 	});
	// },3000);

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
		var days = [ "18.09", "19.09", "", "", "22.09", "23.09", "24.09", "25.09", "", "27.09",
				"28.09", "29.09", "30.09", "", "02.10", "03.10", "04.10", "05.10", "06.10", "", "08.10",
				"09.10", "10.10", "11.10", "12.10", "", "14.10", "15.10", "16.10", "17.10", "" ];

		var data = {
			labels : [days[0],days[1],days[2],days[3],days[4],days[5],days[6],days[7],days[8],days[9],days[10],days[11],days[12],days[13],days[14],days[15],days[16],days[17],days[18],days[19],days[20],days[21],days[22],days[23],days[24],days[25],days[26],days[27],days[28],days[29],days[30]],
			datasets : [
					{
						fillColor : fillColorVar,
						strokeColor: strokeColorVar,
						data : [ 139.4,140.99,,,142.08,141.57,138.70,138.27,139.64,,,136.87,135.60,135.93,136.14,,,,134.90,133.52,131.08,129.44,,,129.58,125.90,126.24,124.75,124.88,,120.05,125.08 ]
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