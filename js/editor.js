var CarLot = function (globalScopeCarLot) {
	let input = document.getElementById('input');
	globalScopeCarLot.selectCard = function(arr, event) {
		input.value = '';
		input.focus();
		for (let i = 0; i < arr.length; i++) {
			arr[i].classList.remove('selected');
		}
		if (event.target.className === 'col-sm-3 card') {
			event.target.classList.add('selected');
		}
		if (event.target.parentElement.className === 'col-sm-3 card') {
			event.target.parentElement.classList.add('selected');
		}
	};
	globalScopeCarLot.editCard = function () {
		let description = document.getElementsByClassName('selected')[0];
		description.lastElementChild.innerText = input.value;
	};
	return globalScopeCarLot;
} (CarLot || {});
