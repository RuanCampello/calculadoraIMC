const form = document.querySelector('#form');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const iPeso = event.target.querySelector('#peso');
	const iAltura = event.target.querySelector('#altura');
	const peso = Number(iPeso.value);
	const altura = Number(iAltura.value);

	if (!peso && !altura) {
		setResultado('Peso e Altura inválidos', false);
		return;
	}
	if (!peso) {
		setResultado('Peso inválido', false);
		return;
	}
	if (!altura) {
		setResultado('Altura inválida', false);
		return;
	}

	const imc = getIMC(peso, altura);
	const typeImc = getTypeImc(imc);

	const msg = `Seu IMC é ${imc} (${typeImc}).`;
	setResultado(msg, true);
});

function getTypeImc (imc) {
	const type = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
	
	if(imc >= 39.9) return type[5];
	if(imc >= 34.9) return type[4];
	if(imc >= 29.9) return type[3];
	if(imc >= 24.9) return type[2];
	if(imc >= 18.5) return type[1];
	if(imc < 18.5) return type[0];
};

function getIMC (peso, altura) {
	const imc = peso/altura**2;
	return imc.toFixed(2);
}

function createP () {
	const p = document.createElement('p'); // creating a paragraph to fill the div with it
	return p;
};

const setResultado = (msg, isValid) => {
	const resultado = document.querySelector('#resultado'); // div result 
	resultado.innerHTML = '';
	const p = createP();
	
	if (isValid) {
		p.classList.add('p-result'); //add a class to the paragraph 
} else {
	p.classList.add('bad'); //add a class to the paragraph 
}
	p.innerHTML = msg;
	resultado.appendChild(p);
};