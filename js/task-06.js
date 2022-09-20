const inputSymbolsRef = document.querySelector('#validation-input');

inputSymbolsRef.addEventListener('blur', () => {
    if (inputSymbolsRef.value.length == inputSymbolsRef.getAttribute('data-length')) {
        inputSymbolsRef.classList.add('valid');
        inputSymbolsRef.classList.remove('invalid');
    } else {
        inputSymbolsRef.classList.add('invalid');
        inputSymbolsRef.classList.remove('valid');
    }
});
