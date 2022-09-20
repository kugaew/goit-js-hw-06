const inputTextSizeRangeRef = document.querySelector('#font-size-control');
const spanOutputTextValueSize = document.querySelector('#text');

inputTextSizeRangeRef.addEventListener('input', () => {
    spanOutputTextValueSize.style.fontSize = `${inputTextSizeRangeRef.value}px`;
});
