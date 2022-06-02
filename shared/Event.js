const EventEmitter = require("events");
const accountController = require("../controllers/accountController");
const categoryController = require("../controllers/categoryController");

emitter = new EventEmitter();

emitter.on("incomeCreated", (income) => {
	let currentValue = income.total;
	let accountId = income.account;
	changeAccountValue(accountId, currentValue, increase);
});

emitter.on("incomeDeleted", (income) => {
	let currentValue = income.total;
	let accountId = income.account;
	changeAccountValue(accountId, currentValue, decrease);
});

emitter.on("incomeModified", (income) => {
	let currentValue = income.total;
	let accountId = income.account;
	changeAccountValue(accountId, currentValue, modify);
});




function changeAccountValue(accountId, currentValue, callback) {
	accountController
		.findById({ params: { id: accountId } }, {})
		.then((account) => {
			let previousValue = account.expense;
			accountController.updateAccountValue(
				accountId,
				callback(previousValue, currentValue)
			);
		});
}

emitter.on("expenseCreated", (expense) => {
	let currentValue = expense.total;
	let accountId = expense.account;
	let categoryId = expense.category;
	changeAccountValue(accountId, currentValue, decrease);
	changeCategoryExpense(categoryId, currentValue, increase);
});

emitter.on("expenseDeleted", (expense) => {
	let currentValue = expense.total;
	let accountId = expense.account;
	let categoryId = expense.category;
	changeAccountValue(accountId, currentValue, increase);
	changeCategoryExpense(categoryId, currentValue, decrease);
});

//previous: 20
//current: -40
//---
//-20
//
//account   80-20=60
//category  20+20=40

//previous: 20
//current: -10
//---
//10
//
//account   80+10=90
//category  20-10=10


function modify(previousValue, currentValue){ 
    return previousValue + ((previousValue - currentValue)*-1); 
}


emitter.on("expenseModified", (expense, previousExpense) => {
	let currentValue = expense.total;
    let diff = previousExpense - currentValue; 
	let accountId = expense.account;
	let categoryId = expense.category;
	changeAccountValue(accountId, diff, increase);
	changeCategoryExpense(categoryId, diff, decrease);
});

function changeCategoryExpense(categoryId, currentValue, callback) {
	categoryController
		.findById({ params: { id: categoryId } }, {})
		.then((category) => {
			let previousValue = category.expense;
			categoryController.updateCategoryExpense(
				categoryId,
				callback(previousValue, currentValue)
			);
		});
}

function increase(previousValue, currentValue) {
	return previousValue + currentValue;
}

function decrease(previousValue, currentValue) {
	return previousValue - currentValue;
}

module.exports = emitter;
