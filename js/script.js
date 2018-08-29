/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate
const page = document.getElementsByClassName('.page');
const itemList = document.getElementsByClassName('.student-list');
const item = document.querySelectorAll('.student-item');
const itemsArray = Array.from(itemList);
const itemsPerPage = 10;
const pages = Math.ceil(item / itemsPerPage);
// Create a function to hide all of the items in the list except for the ten you want to show
// Tip: Keep in mind that with a list of 54 studetns, the last page will only display four
const showPage = () => {
	for (let i = 0; i < item.length; i++) {
		item[i].style.display = 'none';
	}
};
showPage();

// Add variables that store DOM elements you will need to reference and/or manipulate

// Create a function to hide all of the items in the list excpet for the ten you want to show
// Tip: Keep in mind that with a list of 54 studetns, the last page will only display four

// Create and append the pagination links - Creating a function that can do this is a good approach

// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here
