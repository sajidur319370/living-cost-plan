// innerText========================================================
const totalExpenses = document.getElementById('total-expenses');
const balance = document.getElementById('balance');
const savingAmount = document.getElementById('saving-amount');
const remainingBalance = document.getElementById('remaining-balance');

// field=======================================================================
const incomeField = document.getElementById('income-field');
const foodField = document.getElementById('food-field');
const rentField = document.getElementById('rent-field');
const clothField = document.getElementById('cloth-field');
const saveField = document.getElementById('save-field');

function checkInputField() {
    // field=======================================================================
    const incomeFieldValue = incomeField.value;
    const foodFieldValue = foodField.value;
    const rentFieldValue = rentField.value;
    const clothFieldvalue = clothField.value;
    const expensesAlert = document.getElementById('expenses-message');
    // ========================================================================
    if ((isNaN(incomeFieldValue) == false && isNaN(foodFieldValue) == false && isNaN(rentFieldValue) == false && isNaN(clothFieldvalue) == false)) {
        if (incomeFieldValue >= 0 && foodFieldValue >= 0 && rentFieldValue >= 0 && clothFieldvalue >= 0) {
            expensesAlert.classList.add('hidden');
            expensesAlert.classList.remove('block');
            totalExpenses.innerText = parseInt(foodFieldValue) + parseInt(rentField.value) + parseInt(clothField.value);
            balance.innerText = parseInt(incomeField.value) - parseInt(totalExpenses.innerText);
        } else {
            expensesAlert.classList.add('block');
            expensesAlert.classList.remove('hidden');
            incomeField.value = ' ';
            foodField.value = ' ';
            rentField.value = ' ';
            clothField.value = ' ';
            saveField.value = ' ';
            totalExpenses.innerText = '0';
            balance.innerText = '0';
            savingAmount.innerText = '0';
            remainingBalance.innerText = '0'
        }
    } else {
        expensesAlert.classList.add('block');
        expensesAlert.classList.remove('hidden');
        incomeField.value = ' ';
        foodField.value = ' ';
        rentField.value = ' ';
        clothField.value = ' ';
        saveField.value = ' ';
        totalExpenses.innerText = '0';
        balance.innerText = '0';
        savingAmount.innerText = '0';
        remainingBalance.innerText = '0'
    }
}
// calculate savings and remaining balance
function calculateSavings() {
    const saveFieldValue = saveField.value;
    const saving = parseInt(incomeField.value) * parseInt(saveField.value) * 0.01;
    const initialBalance = parseInt(balance.innerText);
    const savingAlert = document.getElementById('saving-message');
    if (saving > initialBalance || saveFieldValue < 0 || isNaN(saveFieldValue)) {
        savingAlert.classList.remove('hidden');
        savingAlert.classList.add('block');
        savingAmount.innerText = '0';
        remainingBalance.innerText = '0'
        saveField.value = ' ';
    } else {
        savingAlert.classList.remove('block');
        savingAlert.classList.add('hidden');
        savingAmount.innerText = saving;
        remainingBalance.innerText = initialBalance - saving;
    }

}
// button==========================================================
const calculateButton = document.getElementById('calculate-button');
const saveButton = document.getElementById('save-button');
// ================================================================
calculateButton.addEventListener('click', function() {
    checkInputField();
});
// =================================================================
saveButton.addEventListener('click', function() {
    calculateSavings();
});