var CarLot = function (globalScopeCarLot) {
	globalScopeCarLot.editCard = function() {
		let cards = document.getElementsByClassName('card');
		for (let i = 0; i < cards.length; i++) {
			cards[i].addEventListener('click', function () {
				input.focus();
			});
		}
	};
	return globalScopeCarLot;
} (CarLot || {});

//STATUS:  editCard working when script order is changed
// figure out how to select P-description (.lastChild???)