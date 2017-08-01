var CarLot = function (globalScopeCarLot) {
	let input = document.getElementById('input');
	globalScopeCarLot.selectCard = function(arr, event) {
		input.focus();
		for (let i = 0; i < arr.length; i++) {
			arr[i].classList.remove('selected');
		}
		event.target.classList.add('selected');
	};
	return globalScopeCarLot;
} (CarLot || {});
