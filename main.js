if (window.location.host.indexOf("slate.com") > -1) {
	// Remove the modal and the backdrop
	$(".tp-modal").remove();
	$(".tp-backdrop").remove();
	$("body").removeClass("tp-modal-open");
} else {
	console.log("Can't find that wall sir...");
}