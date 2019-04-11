function getNumbers() {
	var num1 = document.exForm.value1.value
	var num2 = document.exForm.value2.value

	var result = document.getElementById('result')

	if (num1 < num2) {
		//console.log(num2, " is larger than ", num1)
		result.innerHTML = num2 + " is larger than " + num1
	}
	else if (num1 == num2) {
		result.innerHTML = "The numbers are equal"
	}
	else {
		result.innerHTML = num1 + " is larger than " + num2
	}
}