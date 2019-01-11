function openTabFromURL() {

	var activeTab = $('.nav a[href="' + location.hash + '"]').tab('show');

	if (activeTab.length) {
		activeTab.tab('show');
	} else {
		$('.nav a:first').tab('show');
	}
}

////////////////////////////////////////////////////////////////////////////////

openTabFromURL();

////////////////////////////////////////////////////////////////////////////////

// push clicked tab to browser history

$('a[data-toggle="tab"]').click(function(e) {
	history.pushState(null, null, e.target.hash); 
	$('html, body').animate( { scrollTop: 0 }, 'slow');
});

// open poped tab from browser history

window.addEventListener("popstate", function() {
	openTabFromURL();
});

////////////////////////////////////////////////////////////////////////////////

// direct navigation links

$('.direct').click(function (e) {
	e.preventDefault(); 
	$('.nav a[href="' + $(this).attr('href') + '"]').click(); 
})