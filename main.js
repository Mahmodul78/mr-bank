/** ----------- Login button event handler ----------- */

let loginBtn = document.getElementById("login");
loginBtn.addEventListener('click', function () {
    let loginArea = document.getElementById("loginArea");
    loginArea.style.display = "none";
    let transactionArea = document.getElementById("transactionArea");
    transactionArea.style.display = "block";
})


/** ----------- Deposit button event handler ----------- */
let depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function () {
    // let depositAmount = document.getElementById("depositAmount").value;
    // let depositNumber = parseFloat(depositAmount);
    let depositNumber = getInputNumber("depositAmount");

    if (depositNumber < 0) {
        alert("Deposit Amount does not accept negative value :( ");
    }
    else {
        updateSpanText("currentDeposit", depositNumber);
        updateSpanText("currentBalance", depositNumber);

        document.getElementById("depositAmount").value = "";
    }

    // let currentDeposit = document.getElementById("currentDeposit").innerText;
    // let currentDepositNumber = parseFloat(currentDeposit);
    // let totalDeposit = depositNumber + currentDepositNumber;
    // document.getElementById("currentDeposit").innerText = totalDeposit;

    // updateSpanText("currentDeposit", depositNumber);

    // let currentBalance = document.getElementById("currentBalance").innerText;
    // let currentBalanceNumber = parseFloat(currentBalance);
    // let totalBalance =  depositNumber + currentBalanceNumber;
    // document.getElementById("currentBalance").innerText = totalBalance;

    // updateSpanText("currentBalance", depositNumber);

    // document.getElementById("depositAmount").value = "";


})


/** ----------- Withdraw button event handler ----------- */
let withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function () {
    // let withdrawAmount = document.getElementById("withdrawAmount").value;
    // let withdrawNumber = parseFloat("withdrawAmount");
    // console.log(withdrawNumber);
    let withdrawNumber = getInputNumber("withdrawAmount");

    if (withdrawNumber < 0) {
        alert("Withdraw Amount does not accept negative value :( ");
    }
    else {
        updateSpanText("currentWithdraw", withdrawNumber);
        updateSpanText("currentBalance", -1 * withdrawNumber);

        document.getElementById("withdrawAmount").value = "";
    }

    // updateSpanText("currentWithdraw", withdrawNumber);
    // updateSpanText("currentBalance", -1 * withdrawNumber);

    // document.getElementById("withdrawAmount").value = "";
})

/** ------- Catch the input value ------- */
function getInputNumber(id) {
    let amount = document.getElementById(id).value;
    let amountNumber = parseFloat(amount);
    return amountNumber;
}

function updateSpanText(id, updateNumber) {
    let current = document.getElementById(id).innerText;
    let currentNumber = parseFloat(current);
    let total = updateNumber + currentNumber;
    document.getElementById(id).innerText = total;
}