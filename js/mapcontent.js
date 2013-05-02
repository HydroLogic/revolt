var icons = {
	Militia1: "images/militia.png",
	Maroons1: "images/maroons.png",
	Navy1: "images/navy.png",
	Army1: "images/regulars.png",
	Rebels1: "images/rebels.png",
	Militia0: "images/0militia.png",
	Maroons0: "images/0maroons.png",
	Navy0: "images/0navy.png",
	Army0: "images/0regulars.png",
	Rebels0: "images/0rebels.png",
	Clash: "images/clash.png"
}

var colors = {
	Militia: "#2e4d0a",
	Maroons: "#5b2a5c",
	Navy: "#2c2e5d",
	Army: "#735619",
	Rebels: "#7d312c",
}

function getPopupContent( step ){
	var outer = $("<div>");
	var div = $( "<div class='popup-name'>" );
	div.append( "<p>" + step.NAME + "</p>" );
	if ( step.VALUE ){
		var val = Math.max( 1, Math.round(step.VALUE / 100) ),
			dudes = $( "<div class='dudes'/>" );
		for ( var i = 0; i < val; i ++ ){
			dudes.append( "<div class='dude'/>" );
		}
		div.append( dudes );
	}
	outer.append(div);
	if ( step.VALUE ){
		units = "<div class='probe-units'>" + step.UNITS + ": " + step.VALUE + "</div>";
		outer.append(units);
	}
	return outer.html();
}

function expandPopup( step, popup ){
	if ( !popup._container ) return;
	$(".probe-units",popup._container).hide();
	$(popup._container).mouseenter( function(event){
		$(".probe-units",popup._container).show();
	});
	$(popup._container).mouseleave( function(event){
		map.closePopup();
		$(".probe-units",popup._container).hide();
	});
}