var operand_A = 0, operand_B = 0;

var operation = '';

var lastButtonType = -1;

function numBtn(a) {
	operand_A = operand_A + '';
	operand_A = operand_A + a;
	operand_A = operand_A * 1;
	setValue(operand_A);
	lastButtonType = 0;
}

function opBtn(a) {
	if(lastButtonType == 1){
		operation = a;
		return;
	}
	if(operation == '+') operand_A = operand_B + operand_A;
	if(operation == '-') operand_A = operand_B - operand_A;
	if(operation == '*') operand_A = operand_B * operand_A;
	if(operation == '/') operand_A = operand_B / operand_A;
	setValue(operand_A);
	if(a != '=') {
		operand_B = operand_A;
		operand_A = 0;
		operation = a;
		lastButtonType = 1;
	} else {
		operation = '';
    }
}

function getDisplay() {
	return document.getElementById('disp');
}

function setValue(a) {
	var d = getDisplay();
	d.value = a;
}

function clearAll() {
	operand_A = 0, operand_B = 0;
	operation = '';
	lastButtonType = -1;
	setValue('0');
}