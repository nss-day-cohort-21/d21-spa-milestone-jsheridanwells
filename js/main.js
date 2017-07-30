var CarLot = (function(){
	let outputFrame = document.getElementById('output-frame');
	return {
		getData: function(data) {
			console.log("data", data);
			return data
		},
		printData: function(data) {
			console.log("working", data);
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
	    				<p class="Description">
	    					${data.cars[i].description}
	    				</p>
	    			</div>
				`;
			}
		}
	}
}());

window.addEventListener('load', function() {
	CarLot.loadInventory(CarLot.printData);
});