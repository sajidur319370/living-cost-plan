// button==========================================================
const calculateButton = document.getElementById('calculate-button');
const saveButton = document.getElementById('save-button');
// field============================================================
const incomeField = document.getElementById('income-field');
const foodField = document.getElementById('food-field');
const rentField = document.getElementById('rent-field');
const clothField = document.getElementById('cloth-field');
const saveField = document.getElementById('save-field');
// innerText========================================================
const totalExpenses = document.getElementById('total-expenses');
const balance = document.getElementById('balance');
const savingAmount = document.getElementById('saving-amount');
const remainingBalance = document.getElementById('remaining-balance');
// ================================================================
calculateButton.addEventListener('click', function() {
        calculateExpenses();
    })
    // =================================================================
saveButton.addEventListener('click', function() {
    calculateSavings();
})

// calculate total expenses and balance
function calculateExpenses() {
    totalExpenses.innerText = parseInt(foodField.value) + parseInt(clothField.value) + parseInt(rentField.value);
    balance.innerText = parseInt(incomeField.value) - parseInt(totalExpenses.innerText);
}

// calculate savings and remaining balance
function calculateSavings() {
    const saving = parseInt(incomeField.value) * parseInt(saveField.value) * 0.01;
    const initialBalance = parseInt(balance.innerText);
    const savingAlert = document.getElementById('saving-message');
    if (saving > initialBalance) {
        savingAlert.classList.remove('hidden');
        savingAlert.classList.add('block');
        savingAmount.innerText = '0';
        remainingBalance.innerText = '0'
    } else {
        savingAlert.classList.remove('block');
        savingAlert.classList.add('hidden');
        savingAmount.innerText = saving;
        remainingBalance.innerText = initialBalance - saving;
    }

}