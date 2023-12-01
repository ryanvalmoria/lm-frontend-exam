
document.addEventListener("DOMContentLoaded", function() {

	const mainCategories = {
		1: "Family",
		2: "Employment",
		3: "Criminal Defense",
		4: "Real Estate",
		5: "Business",
		6: "Immigration",
		7: "Personal Injury",
		8: "Wills, Trusts & Estates",
		9: "Bankruptcy & Finances",
		10: "Government",
		11: "Products & Services",
		12: "Intellectual Property"
	};

	function loadMainCategories() {
		mainCategory = document.getElementById('mainCategory');

		for (const [key, value] of Object.entries(mainCategories)) {
			mainCategory.options.add( new Option(value,key));	
		}	
	}

	loadMainCategories();

});