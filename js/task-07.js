const inputTextSizeRangeRef = document.querySelector('#font-size-control');
const spanOutputTextValueSize = document.querySelector('#text');

//exampel-1
/* inputTextSizeRangeRef.addEventListener('input', () => {
    spanOutputTextValueSize.style.fontSize = `${inputTextSizeRangeRef.value}px`;
}); */

//exampel-2
/* inputTextSizeRangeRef.addEventListener('input', event => {
    spanOutputTextValueSize.style.fontSize = `${event.currentTarget.value}px`;
}); */

//exampel-3
inputTextSizeRangeRef.addEventListener('input', onInputTextSizeChange);

function onInputTextSizeChange(event) {
    spanOutputTextValueSize.style.fontSize = `${event.currentTarget.value}px`;
}
