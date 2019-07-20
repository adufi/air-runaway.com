$(document).ready(function() {

	// Variables Statement

	var menu_name = "#menu";
	var core_name = "#core_contener";

	// Fonctions Statement

	function InitMap() {
		var mapProp = 
				{
					center: new google.maps.LatLng(14.595259, -61.014547),
					zoom: 14,
					mapTypeId: google.maps.MapTypeId.ROADMAP
				};
		var map = new google.maps.Map(document.getElementById("googlemap"), mapProp);

		var marker = new google.maps.Marker(
				{
					position : new google.maps.LatLng(14.591604, -61.004806),
					map: map,
					title: "Air Colibri"
				});
	}
	function FixMapHeight() {
		var carre1 = "#googlemap";

		var size = $(carre1).width();

		$(carre1).css("height", size);

		// console.log("Fixed");
	}
	function FixWidthGlitch() {

	}

	function HideCore(name) {
		//$(core_name + " li").css("width", "0%");

		// Diminue la taille de la 'page' si une est ouverte
		$(core_name + " > li").animate({ height: "0px"});

		// Et chache les autres
		//$(core_name + " > li").css("display", "none");
	}

	function DisplayCore(name) {
		HideCore();

		//$(name).css("display", "block");

		var size = $(window).height() - 100;

		/*
		if( $(name).height() == 0) {

		}
		*/

		$(name).animate({ height: size + "px"});

		// console.log(name);
	}// calc(100vh - 100px)

	// Main
	//HideCore();

	google.maps.event.addDomListener(window, "load", InitMap);
	$(window).resize(function() {

	});

	$(menu_name + " li[class] a").click(function() {
		var r = $(this).parent().attr("class");

		DisplayCore(core_name + " > ." + r);

		/*
		if(r == 1) {
			HideCore();
		}
		else {
			DisplayCore(core_name + " > ." + r);
		}
		*/

		// console.log("Clicked : " + r);
	});
});