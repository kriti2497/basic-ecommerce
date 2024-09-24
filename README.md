# E-commerce App

This is a simple e-commerce application built with React. It allows users to browse products, add them to a cart, view product details, and manage their cart contents. Below is a brief description of the key features and pages.

## Pages

### 1. Home Page

- Displays a list of all available products.
- Users can add products to the cart.
- Users can increase/decrease the quantity of any product in the cart.
- Products can be removed from the cart.
- Clicking on a product card navigates the user to the product details page.

### 2. Cart Page

- Displays all the products added to the cart along with their quantities.
- Users can increase or decrease the quantity of each product or remove products from the cart.
- The cart displays a summary of the total and the grand total.
- A checkout button is present but currently disabled.

### 3. Details Page

- Shows detailed information about a product, including ratings, ratings count, and description.
- Users can add the product to the cart, change its quantity, or remove it from the cart.

### Header

- The header displays the app logo, which redirects to the home page when clicked.
- It also shows a cart icon with a badge that displays the number of distinct products in the cart (ignoring individual product quantities).

## Technical Details

1. User authentication is not implemented.
2. The state management uses `useReducer`, so the cart will reset when the page is refreshed.
3. The maximum quantity allowed for a single product in the cart is 10.

## Installation and Usage

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.
