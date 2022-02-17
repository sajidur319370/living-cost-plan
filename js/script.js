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
    savingAmount.innerText = parseInt(incomeField.value) * parseInt(saveField.value) * 0.01;
    remainingBalance.innerText = parseInt(balance.innerText) - parseInt(savingAmount.innerText);
}