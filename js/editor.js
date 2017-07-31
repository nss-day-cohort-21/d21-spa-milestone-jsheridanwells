var CarLot = function (globalScopeCarLot) {
	let input = document.getElementById('input');
	globalScopeCarLot.editCard = function() {
		let cards = document.getElementsByClassName('card');
		for (let i = 0; i < cards.length; i++) {
			cards[i].addEventListener('click', function () {
				for (let j = 0; j < cards.length; j++) {
					cards[j].removeAttribute('id');
					cards[j].classList.remove('selected');
				}
				input.value = ''
				input.focus();
				this.id = 'target';
				this.classList.add('selected');
				let targ = document.getElementById('target');
				document.addEventListener('keyup', function () {
					targ.lastElementChild.innerText = input.value;
				});
			});
		}
	}
	return globalScopeCarLot;
} (CarLot || {});

// STATUS:  look at WYSIWYG instructions again to attach listeners better.  
// Strange behavior, multiple cards edit text at same time 
// but only two or three, then it stops
