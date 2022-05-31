const EventEmitter = require("events");
const accountController = require("../controllers/accountController");
const categoryController = require("../controllers/categoryController");

emitter = new EventEmitter();

emitter.on("incomeCreated", (income) => {
	let value = income.total;
	let accountId = income.account;
	changeAccountValue(accountId, value, increase);
});

emitter.on("incomeDeleted", (income) => {
	let value = income.total;
	let accountId = income.account;
	changeAccountValue(accountId, value, decrease);
});

function changeAccountValue(accountId, value, callback) {
	accountController
		.findById({ params: { id: accountId } }, {})
		.then((account) => {
			let previousValue = account.expense;
			accountController.updateAccountValue(
				accountId,
				callback(previousValue, value)
			);
		});
}

emitter.on("expenseCreated", (expense) => {
	let value = expense.total;
	let accountId = expense.account;
	let categoryId = expense.category;
	changeAccountValue(accountId, value, decrease);
	changeCategoryExpense(categoryId, value, increase);
});

emitter.on("expenseDeleted", (expense) => {
	let value = expense.total;
	let accountId = expense.account;
	let categoryId = expense.category;
	changeAccountValue(accountId, value, increase);
	changeCategoryExpense(categoryId, value, decrease);
});

function changeCategoryExpense(categoryId, value, callback) {
	categoryController
		.findById({ params: { id: categoryId } }, {})
		.then((category) => {
			let previousValue = category.expense;
			categoryController.updateCategoryExpense(
				categoryId,
				callback(previousValue, value)
			);
		});
}

function increase(previousValue, value) {
	return previousValue + value;
}

function decrease(previousValue, value) {
	return previousValue - value;
}

module.exports = emitter;
