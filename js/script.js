/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate
const allItems = $('.student-list .student-item').length;
const itemsPerPage = 10;
const pageCount = Math.ceil(allItems / itemsPerPage);
// Create a function to hide all of the items in the list excpet for the ten you want to show
// Tip: Keep in mind that with a list of 54 studetns, the last page will only display four
$(document).ready(function() {
	$('.student-list .student-item:gt(' + (itemsPerPage - 1) + ')').hide();

	for (let i = 0; i <= pageCount; i += 1) {}

	// Create and append the pagination links - Creating a function that can do this is a good approach

	// Add functionality to the pagination buttons so that they show and hide the correct items
	// Tip: If you created a function above to show/hide list items, it could be helpful here

	alert(pageCount);
});
