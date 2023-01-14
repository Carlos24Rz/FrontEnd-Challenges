const billInputField = document.querySelector("#bill");

const peopleInputField = document.querySelector("#people");

const tipAmountRadioButtons = document.querySelectorAll('input[name="tip-percentage-value"]');

const tipAmountCustomInputField = document.querySelector(".tip-percentage-custom-field");

const tipAmountLabels = document.querySelectorAll(".calculation-amount");

const resetButton = document.querySelector(".btn-reset");

const validateInputField = (inputField) => {

  let errorMessageEl;


  if (inputField.id === 'bill') errorMessageEl = "bill-error-message";
  else if (inputField.id === 'people') errorMessageEl = "people-error-message";
  else if (inputField.id === 'custom-per') errorMessageEl = "custom-per-error-message";

  if (document.querySelector("." + errorMessageEl)) {
    inputField.parentNode.removeChild(document.querySelector("." + errorMessageEl));
    inputField.classList.remove("invalid");
  }

  if (!inputField.value.length) return false;

  if (isNaN(Number(inputField.value))
    || Number(inputField.value) === 0
    || Math.abs(Number(inputField.value)) !== Number(inputField.value)
    || (inputField.id === "people" && Math.floor(Number(inputField.value)) !== Number(inputField.value))
  ) {
    const errorMessage = document.createElement("span");


    if (Number(inputField.value) === 0) errorMessage.innerHTML = "Can't be zero";
    else errorMessage.innerHTML = "Please enter a valid number";

    errorMessage.classList.add(errorMessageEl);

    inputField.classList.add("invalid");
    inputField.parentNode.appendChild(errorMessage);

    return false;
  }

  if (inputField.id === 'custom-per') selectedTipVal = Number(inputField.value);

  return true;

}

let selectedTipVal;

tipAmountRadioButtons.forEach((button) => {
  button.addEventListener('click', () => {
    selectedTipVal = undefined;
    if (button.id === "custom-per") {
      document.querySelectorAll(".tip-percentage-container input").forEach((radio) => radio.checked = false);

    } else {
      tipAmountCustomInputField.value = "";
      selectedTipVal = Number(button.value);
    }
    calculate();
  });
});

let tipAmountPerson = 0;
let totalAmountPerson = 0;

const calculate = () => {
  console.log(validateBillField());
  console.log(validatePeopleField());
  console.log(validateTipCustomField());
  console.log(selectedTipVal);

  if (!validateBillField() || !validatePeopleField() || (!validateTipCustomField() && !selectedTipVal)) {
    tipAmountPerson = 0;
    totalAmountPerson = 0;

    tipAmountLabels[0].innerHTML = "$0.00";
    tipAmountLabels[1].innerHTML = "$0.00";

  } else {
    console.log("holi");
    let totalTip = Number(billInputField.value) * selectedTipVal / 100;
    tipAmountPerson = totalTip / Number(peopleInputField.value);
    totalAmountPerson = (Number(billInputField.value) + totalTip) / Number(peopleInputField.value);

    tipAmountLabels[0].innerHTML = "$" + tipAmountPerson.toFixed(2);
    tipAmountLabels[1].innerHTML = "$" + totalAmountPerson.toFixed(2);

  }

};

const validateBillField = () => validateInputField(billInputField);
const validatePeopleField = () => validateInputField(peopleInputField);
const validateTipCustomField = () => validateInputField(tipAmountCustomInputField);

billInputField.addEventListener('input', calculate);
peopleInputField.addEventListener('input', calculate);
tipAmountCustomInputField.addEventListener('input', () => {
  selectedTipVal = undefined;
  calculate();
});

resetButton.addEventListener('click', (event) => {
  event.preventDefault();

  billInputField.value = "";

  document.querySelectorAll(".tip-percentage-container input").forEach((radio) => radio.checked = false);
  tipAmountCustomInputField.value = "";
  selectedTipVal = undefined;

  peopleInputField.value = "";

  calculate();
});
