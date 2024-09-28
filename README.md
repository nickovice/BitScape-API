<p align="center">
  <a target="blank"><img src="https://i.imgur.com/vDeRbsC.png" width="250" /></a>
</p>

# Work in Progress...

## API Endpoints

### PRODUCTS

### 1. GET /api/products
- **Description**: Returns all products.

### 2. GET /api/products/search?name={name}
- **Description**: Searches for products by name.

### 3. GET /api/products/filter?id_category={id}&brand={brand}
- **Description**: Filters products by category or brand.

### 4. GET /api/products/sort?id_category={id}&sort={asc/desc}
- **Description**: Sorts products by category and ascending/descending order.

### 5. GET /api/products/:id
- **Description**: Returns a product by ID.

### 6. POST /api/products
- **Description**: Creates a new product. It's not necessary to put id on body

### 7. PUT /api/products/:id
- **Description**: Updates a product by ID.

### 8. DELETE /api/products/:id
- **Description**: Deletes a product by ID.

### CATEGORIES

### 1. GET /api/categories
- **Description**: Returns all categories.

### 2. GET  /api/categories/:id
- **Description**: Returns a specific category by ID.

### 3. POST  /api/categories
- **Description**: Creates a new category.

### 4. PUT  /api/categories/:id
- **Description**: Updates a category by ID.

### 5. DELETE  /api/categories/:id
- **Description**: Deletes a category by ID.


## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
