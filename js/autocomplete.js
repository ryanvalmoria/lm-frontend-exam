document.addEventListener("DOMContentLoaded", function() {

	const input = document.querySelector('#zipcode');
	const suggestions = document.querySelector('.suggestions ul');

	const address = [ 
		'Noweheresville, XX 00000',
		'California, CA 11111',
		'Indiana, IN 22222',
		'Florida, FL 33333',
		'New York, NY 44444',
		'Ohio, OH 55555',
		'Rhode Island, RI 66666',
		'South Dakota, SD 77777',
		'Tennessee, TN 88888',
		'Texas, TX 99999'
	];

	function searchAddress(str) {
		let results = [];
		const val = str.toLowerCase();

		for (i = 0; i < address.length; i++) {
			if (address[i].toLowerCase().indexOf(val) > -1) {
				results.push(address[i]);
			}
		}

		return results;
	}

	function searchHandler(e) {
		const inputVal = e.currentTarget.value;
		let results = [];
		if (inputVal.length > 0) {
			results = searchAddress(inputVal);
		}
		showAddresses(results, inputVal);
	}

	function showAddresses(results, inputVal) {
		
		suggestions.innerHTML = '';

		if (results.length > 0) {
			for (i = 0; i < results.length; i++) {
				let item = results[i];
				const match = item.match(new RegExp(inputVal, 'i'));
				item = item.replace(match[0], `<strong>${match[0]}</strong>`);
				suggestions.innerHTML += `<li><a class="dropdown-item" href="#">${item}</a></li>`;
				
			}
			suggestions.classList.add('has-suggestions');
		} else {
			results = [];
			suggestions.innerHTML = '';
			suggestions.classList.remove('has-suggestions');
		}
	}

	function useSuggestion(e) {
		input.value = e.target.innerText;
		input.focus();
		suggestions.innerHTML = '';
		suggestions.classList.remove('has-suggestions');
	}

	input.addEventListener('keyup', searchHandler);
	suggestions.addEventListener('click', useSuggestion);

});