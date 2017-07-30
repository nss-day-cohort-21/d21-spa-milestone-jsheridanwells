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
				content += `
					<div class="col-sm-3 card selected">
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
			outputFrame.innerHTML = content;
		}
	}
}());
