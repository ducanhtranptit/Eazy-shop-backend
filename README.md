## Eazy Shop App

Eazy Shop App is a modern and flexible solution designed for retail grocery businesses. With a user-friendly interface, diverse features, and high customization capabilities, the app assists grocery store owners in efficiently managing every aspect of their business.

## Key Features:

1. **Product Management:**

    - Easily add, edit, and delete products.
    - Organize products into categories for a streamlined inventory.

2. **Order Management:**

    - Create and manage customer orders.
    - Track order status and notify customers of updates.

3. **Customer Management:**
    - Store customer information for easy retrieval and communication.
    - View customer shopping history for improved service.

## Advantages:

-   **User-Friendly:** A friendly user interface, easy to use even for those with limited technology experience.
-   **High Customization:** Allows customization to meet specific needs, from product management to reporting.

-   **Security capabilities:** The system is integrated with advanced forms of encryption security to help protect against common forms of network attacks such as SQL Injection, Impersonation Attack, DDOS

## Supported Platform:

The application is accessible through web browsers, offering a seamless user experience across various devices.

_With the Grocery Store Management Web App, you can streamline your store management process, provide better service to customers, and optimize your business performance._

## Getting Started

Clone the repo.

```bash
git clone https://github.com/ducanhtranptit/Eazy-shop.git
```

## Run backend

### Install the dependencies.

```bash
cd server
npm install
```

### Setup database.

```bash
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

### Setup environment variables.

Create a `.env` file and set environment variables based on `.env.example` file

### Run backend.

```bash
npm start
```
