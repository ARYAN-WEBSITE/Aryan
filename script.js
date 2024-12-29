// Initialize balance and transaction history
let balance = 105;  // Initial balance in INR
const balanceElement = document.getElementById("balance");
const transactionList = document.getElementById("transaction-list");

// Sample transactions (In a real-world case, you would fetch this from a database or API)
const transactions = [
    { amount: 90, description: "Deposit", date: "2024-12-25 " },
    { amount: 5, description: "Deposit", date: "2024-12-26 " },
    { amount: -5, description: "Withdraw", date: "2024-12-27 " },
    { amount: 10, description: "Deposit", date: "2024-12-27 " },
    { amount: 5, description: "Deposit", date: "2024-12-29 " },
  
   
];

// Display current balance
balanceElement.textContent = balance.toFixed(2);

// Function to display transactions
function displayTransactions() {
    transactions.forEach(transaction => {
        const transactionItem = document.createElement("li");
        
        const transactionDetails = document.createElement("div");
        transactionDetails.classList.add("details");
        
        // Display date and description
        const transactionDate = document.createElement("div");
        transactionDate.classList.add("date");
        transactionDate.textContent = transaction.date;
        
        const transactionDesc = document.createElement("div");
        transactionDesc.textContent = transaction.description;

        // Display amount (positive for deposit, negative for withdrawal)
        const transactionAmount = document.createElement("div");
        transactionAmount.classList.add("amount");
        transactionAmount.textContent = `₹${transaction.amount.toFixed(2)}`;
        
        if (transaction.amount > 0) {
            transactionAmount.style.color = "green";  // Deposit is green
        } else {
            transactionAmount.style.color = "red";  // Withdrawal is red
        }

        // Append all parts to the transaction item
        transactionDetails.appendChild(transactionDate);
        transactionDetails.appendChild(transactionDesc);
        transactionItem.appendChild(transactionDetails);
        transactionItem.appendChild(transactionAmount);
        
        // Append the transaction item to the list
        transactionList.appendChild(transactionItem);
    });
}

// Call the function to display the transactions when the page loads
displayTransactions();
