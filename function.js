document.getElementById("submit-button").addEventListener("click", calculate);

function calculate (){

	const totalAmount = document.getElementById("total-amount");
	const principalInput = document.getElementById("principal");
	const rateInput = document.getElementById("rate");
	const yearsInput = document.getElementById("years");

	let principal = Number(principalInput.value);
	let rate = Number(rateInput.value / 100);
	let years = Number(yearsInput.value);

	if(principal < 0){
		principal = 0
	}
	if(rate < 0 ) {
		rate = 0
	}
	if(years < 0) {
		years = 0
	}

	const result = principal * Math.pow((1 + rate / 1), 1 * years)

	totalAmount.textContent = result.toLocaleString(undefined, {style: "currency", currency: "USD"});

};