//Using JQuery to handling events:

//This funcion works like the addEventListener("DOMContentLoaded...")
$(function () {
	//This function selects an element by it's selector like JS's querySelector:
	$("#navbarToggle").blur(function (event) {
		var screenWidth = window.innerWidth;
		if (screenWidth < 768) {
			//The collapse function manipulates the buttons status:
			$("#collapsable-nav").collapse('hide');
		}
	})
})

