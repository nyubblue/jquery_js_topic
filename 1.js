function myFuncAddClass(){
	$('#add_class').addClass("redClass");
}
function setCSS(){
$('p:nth-child(2)').css("font-style", "italic");
$('p:nth-child(3)').css("color", "yellow");
}

function addToggleClass(){
	$('#add_toggle_class').toggleClass("redClass");
}

function slideUp() {
$("#divMsg").slideUp();
}

function slideDown() {
$("#divMsgDown").slideDown();
}