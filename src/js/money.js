function getMoney() {
	const encodedMoney = localStorage.getItem('money');
	const decodedMoney = btoa(encodedMoney);
	const parsedMoney = parseInt(decodedMoney);

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
