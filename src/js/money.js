function getMoney() {
	const encodedMoney = localStorage.getItem('money');
	const decodedMoney = atob(encodedMoney);
	const parsedMoney = parseInt(decodedMoney);

	if (isNaN(parsedMoney)) {
		return 100;
	}

	return parsedMoney;
}

function setMoney(amount) {
	return localStorage.setItem('money', amount.toString());
}

function updateMoneyDisplay() {
	document.getElementById('money').innerText = `money $${getMoney()}`
}

module.exports = {
	getMoney,
	setMoney,
	updateMoneyDisplay
}
