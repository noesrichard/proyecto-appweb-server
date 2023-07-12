# Income and Expense Tracker (Express Backend with MongoDB)

This project is an Income and Expense Tracker backend implemented using Express and MongoDB. It provides a RESTful API for managing accounts, expenses, expense categories, and wishlists. The backend server interacts with a MongoDB database to store and retrieve data.

## Prerequisites

Before running this project, make sure you have the following prerequisites installed on your system:

- Node.js
- MongoDB

## Getting Started

To use this Income and Expense Tracker backend, follow the instructions below:

1. Clone this repository to your local machine or download the source code files.
2. Open a terminal or command prompt and navigate to the project directory.
3. Install the required dependencies by running the following command:

   ```shell
   npm install
   ```

4. Rename the `.env.example` file to `.env` and provide the necessary environment variables, such as the MongoDB connection string and port number.
5. Start the server by running the following command:

   ```shell
   npm start
   ```

6. The backend server will start running on the specified port, and you can now make API requests to interact with the Income and Expense Tracker.

## API Endpoints

The following API endpoints are available for interacting with the backend:

- **Accounts**:
  - `GET /accounts`: Retrieve all accounts.
  - `POST /accounts`: Create a new account.
  - `GET /accounts/:id`: Retrieve an account by ID.
  - `PUT /accounts/:id`: Update an account by ID.
  - `DELETE /accounts/:id`: Delete an account by ID.

- **Expenses**:
  - `GET /expenses`: Retrieve all expenses.
  - `POST /expenses`: Create a new expense.
  - `GET /expenses/:id`: Retrieve an expense by ID.
  - `PUT /expenses/:id`: Update an expense by ID.
  - `DELETE /expenses/:id`: Delete an expense by ID.

- **Expense Categories**:
  - `GET /categories`: Retrieve all expense categories.
  - `POST /categories`: Create a new expense category.
  - `GET /categories/:id`: Retrieve an expense category by ID.
  - `PUT /categories/:id`: Update an expense category by ID.
  - `DELETE /categories/:id`: Delete an expense category by ID.

- **Wishlist**:
  - `GET /wishlist`: Retrieve the wishlist.
  - `POST /wishlist`: Add an item to the wishlist.
  - `GET /wishlist/:id`: Retrieve a wishlist item by ID.
  - `PUT /wishlist/:id`: Update a wishlist item by ID.
  - `DELETE /wishlist/:id`: Delete a wishlist item by ID.

## Technologies Used

The Income and Expense Tracker backend is developed using the following technologies:

- Express: A fast and minimalist web application framework for Node.js.
- MongoDB: A popular NoSQL database for storing and retrieving data.
- Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js.
- JavaScript: The programming language used for server-side development.
