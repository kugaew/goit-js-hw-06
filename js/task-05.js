const inputValueRef = document.querySelector('#name-input');
const spanOutputResultRef = document.querySelector('#name-output');

inputValueRef.addEventListener('input', () => {
    spanOutputResultRef.textContent =
        inputValueRef.value.length != 0 ? inputValueRef.value : 'Anonymous';
});
