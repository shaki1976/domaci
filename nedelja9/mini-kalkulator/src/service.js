export const calculate = (firstOperand, secondOperand = 0, operation) => {
  if (secondOperand === 0 && operation === "/") return;

  switch (operation) {
    case "+":
      return firstOperand + secondOperand;

    case "-":
      return firstOperand - secondOperand;

    case "*":
      return firstOperand * secondOperand;

    case "/":
      return firstOperand / secondOperand;

    default:
      return "neispravan unos";
  }
};
