const factorial = (n) => {
    if (n === 0) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}

const sumfact = function(n){
    let final = factorial(n);
    let message = document.createElement('li');
    let inp = document.querySelector('.ul');
    message.textContent = 'Factorial ' + n + " = " + final;
    inp.appendChild(message);
}