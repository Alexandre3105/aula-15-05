const fahrenheitInput = document.querySelector('#fahrenheit');
const converterBtn = document.querySelector('#converter');
const resultadoOutput = document.querySelector('#resultado');
const body = document.querySelector('body');

function converterTemperatura() {
	const fahrenheit = parseFloat(fahrenheitInput.value);
	const celsius = (fahrenheit - 32) * 5 / 9;
	
	if (isNaN(celsius)) {
		resultadoOutput.innerText = 'Por favor, digite uma temperatura válida.';
	} else {
		resultadoOutput.innerText = `A temperatura em Celsius é ${celsius.toFixed(1)} graus.`;
		
		if (celsius > 30) {
			body.classList.add('laranja');
			body.classList.remove('azul-claro');
		} else {
			body.classList.add('azul-claro');
			body.classList.remove('laranja');
		}
	}
}

converterBtn.addEventListener('click', converterTemperatura);
