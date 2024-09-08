//Task 1 - Calculate the Tip

let bill = 275;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

//Task 2 - Output Details

console.log('The was bill $${bill}, the tip was $${tip}, and the total value is $${bill + tip}');

//Task 3 - Create a Function

function calculateTup(bill) {
    return bill >= 50 && bill <=300 ? bill * 0.15 : bill * 0.20;
}
let testbill = 100
console.log(calculateTip(testBill));
