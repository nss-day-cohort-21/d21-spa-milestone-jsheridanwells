var CarLot = (function(){
	let outputFrame = document.getElementById('output-frame');
	return {
		printData: function(data) {
			let content = '';
			for(let i = 0; i < data.cars.length; i++) {
				if (i % 4 === 0) {
					let row = document.createElement('div');
					row.classList.add('row');
					row.innerHTML = content;
					outputFrame.appendChild(row);
					content = '';
				}
				content += `
					<div class="col-sm-3 card">
	    				<h2>${data.cars[i].year}</h2>
	    				<p>${data.cars[i].make}</p>
	    				<p>${data.cars[i].model}</p>
	    				<p>${data.cars[i].price}</p>
	    				<p class="description">
	    					${data.cars[i].description}
	    				</p>
	    			</div>
				`;
			}
			let cards = document.getElementsByClassName('card');
			for (let i = 0; i < cards.length; i++) {
				cards[i].addEventListener('click', function(e) {
					CarLot.selectCard(cards, e);
				});
			}
			window.addEventListener('keyup', function(){
					document.getElementsByClassName('selected')[0].lastElementChild.innerText = input.value;
				});
		}
	}
}());

window.addEventListener('load', function() {
	CarLot.loadInventory(CarLot.printData);
});