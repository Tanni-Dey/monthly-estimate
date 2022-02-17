//All variable
const incomeInput = document.getElementById('income-input')
const foodInput = document.getElementById('food-input')
const rentInput = document.getElementById('rent-input')
const clothInput = document.getElementById('cloth-input')
const totalExpense = document.getElementById('total-expense')
const balance = document.getElementById('balance')
const saveInput = document.getElementById('save-input')
const saveAmount = document.getElementById('save-amount')
const remainBalance = document.getElementById('remain-balance')
//error function
function errorMeassage(error1, error2, error3, error4) {
    document.getElementById('error-message1').style.display = error1;
    document.getElementById('error-message2').style.display = error2;
    document.getElementById('error-message3').style.display = error3;
    document.getElementById('error-message4').style.display = error4;
}

//calculate button click
document.getElementById('calculate').addEventListener('click', function () {
    // after another click all error meassage display none
    errorMeassage('none', 'none', 'none', 'none');
    //none of number error message
    if (isNaN(foodInput.value) || isNaN(rentInput.value) || isNaN(clothInput.value) || isNaN(incomeInput.value)) {
        errorMeassage('block', 'none', 'none', 'none');

    }
    //negative number error message
    else if (foodInput.value < 0 || rentInput.value < 0 || clothInput.value < 0 || incomeInput.value < 0) {
        errorMeassage('none', 'block', 'none', 'none');
    }
    else {
        const totalExpenseText = parseFloat(foodInput.value) + parseFloat(rentInput.value) + parseFloat(clothInput.value);
        //total expenses greater that income error message
        if (totalExpenseText > incomeInput.value) {
            errorMeassage('none', 'none', 'none', 'block');
        } else {
            //total calculation
            totalExpense.innerText = totalExpenseText;
            balance.innerText = parseFloat(incomeInput.value) - parseFloat(totalExpense.innerText);
        }
    }
})
//save button click
document.getElementById('save-btn').addEventListener('click', function () {
    const saveResult = (parseFloat(incomeInput.value) * parseFloat(saveInput.value)) / 100;
    //not enough balance error message
    if (saveResult > parseFloat(balance.innerText)) {
        errorMeassage('none', 'none', 'block', 'none');
    }
    else {
        //negative number error message
        if (saveInput.value < 0) {
            errorMeassage('none', 'block', 'none', 'none');
        }
        else {
            //saving Amount
            saveAmount.innerText = saveResult
            //remaining balance
            remainBalance.innerText = parseFloat(balance.innerText) - parseFloat(saveAmount.innerText);
        }
    }
    //all input value empty string
    foodInput.value = '';
    rentInput.value = '';
    clothInput.value = '';
    incomeInput.value = '';
})