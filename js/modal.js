function openModal(id, element) {
	
	if (element) {
		if (element.selectedIndex <= 0) {
			return;
		}
		let selectedText = element.options[element.selectedIndex].text;
		document.getElementById("categoryName").innerHTML = selectedText;
	}
	document.getElementById(id).classList.add('open');
	document.body.classList.add('local-modal-open');
}

function closeModal() {
	document.querySelector('.local-modal.open').classList.remove('open');
	document.body.classList.remove('local-modal-open');
}

window.addEventListener('load', function() {
	// close modals on background click
	document.addEventListener('click', event => {
		if (event.target.classList.contains('local-modal')) {
			closeModal();
		}
	});
});