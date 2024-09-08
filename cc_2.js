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

//Task 4 - Utilize Arrays

let bills1 = [275,40,430];
let tips = bills.map(bill => calculateTip(bill));
let totals = bills.map((bill, index) => bill +tips[index]);

console.log('Bills:', bills);
console.log('Tips:', tips);
console.log('Totals:', totals);
