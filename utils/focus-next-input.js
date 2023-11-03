const focusNextInput = el => {
  const currentInput = el.id;
  if (!currentInput) return;

  const inputs = document.querySelectorAll('input, textarea');
  const inputsArray = Array.from(inputs);
  const inputIndex = inputsArray.findIndex(input => input.id === currentInput);
  const nextInput = inputsArray[inputIndex + 1];

  nextInput.focus();
}

export default focusNextInput;

