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

let bills = [275,40,430];
let tip = bills.map(bill => calculateTip(bill));
let totals = bills.map((bill, index) => bill +tips[index]);

console.log(bills);
console.log(tips);
console.log(totals);

//Task 5 - Test Data 

let bills1 = [275,40,430];
let bills2 = [125,555,44];

let tips1 = bills1.map(bill => calculateTip(bill));
let totals1 = bills1.map((bill, index) => bill +tips1[index]);

let tips2 = bills2.map(bill => calculateTup(bill));
let totals2 = bills2.map((bill, index)=> bill +tips2[index]);

console.log(bills1, tips1, totals1);
console.log(bills2, tips2, totals2);
