//aqui c cria a função de pegar as coisa do html
function sortear() {
    const quantityInput = document.getElementById('quantity');
    const minInput = document.getElementById('min');
    const maxInput = document.getElementById('max');
    const resultDiv = document.getElementById('result');
    
    //aqui c faz a conversao dos valores das variaveis para inteiro
    const quantity = parseInt(quantityInput.value);
    const min = parseInt(minInput.value);
    const max = parseInt(maxInput.value);

    // Validação dos inputs
    if (isNaN(quantity) || quantity < 1 || quantity > 100) {
        resultDiv.textContent = 'Por favor, insira uma quantidade entre 1 e 100.';
        return;
    }
    if (isNaN(min) || isNaN(max)) {
        resultDiv.textContent = 'Por favor, insira valores válidos para o intervalo.';
        return;
    }
    if (min >= max) {
        resultDiv.textContent = 'O valor mínimo deve ser menor que o máximo.';
        return;
    }

    // Limpa o resultado anterior
    resultDiv.innerHTML = '';

    // Gera números aleatórios únicos
    const numbers = new Set();
    while (numbers.size < quantity) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        numbers.add(randomNumber);
    }

    // Exibe os números com animação
    const numberArray = Array.from(numbers);
    numberArray.forEach((number, index) => {
        setTimeout(() => {
            const numberDiv = document.createElement('div');
            numberDiv.className = 'number';
            numberDiv.textContent = number;
            resultDiv.appendChild(numberDiv);
        }, index * 600); // Atraso de 600ms entre cada número
    });
}