<p align="center">
  <a target="blank"><img src="https://i.imgur.com/vDeRbsC.png" width="250" /></a>
</p>

# REST API for the site
https://bitscape-api.onrender.com <br>

## Endpoints

### PRODUCTS

### 1. GET /products
- **Description**: Returns all products.

### 2. GET /products?search={name}
- **Description**: Searches for products by name.

### 3. GET /products?category={id}
- **Description**: Filters products by category.

### 4. GET /products?brand={brand}
- **Description**: Filters products by brand.

### 5. GET /products?category={category}&sort={asc/desc}
- **Description**: Sorts products of a certain category by ascending/descending order.

### 6. GET /products/:id
- **Description**: Returns a product by ID.

### 7. POST /products
- **Description**: Creates a new product. It's not necessary to put id on body

### 8. PUT /products/:id
- **Description**: Updates a product by ID.

### 9. DELETE /products/:id
- **Description**: Deletes a product by ID.

### CATEGORIES

### 1. GET /categories
- **Description**: Returns all categories.

### 2. GET  /categories/:name
- **Description**: Returns a specific category by name.

### 3. GET  /categories?getid={name}
- **Description**: Returns the id of a category by its name.

### 4. POST  /categories
- **Description**: Creates a new category.

### 5. PUT  /categories/:id
- **Description**: Updates a category by ID.

### 6. DELETE  /categories/:id
- **Description**: Deletes a category by ID.


## Docker Usage

Run
```bash
$ docker compose up
```

Adjust environment variables to use another database

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

## Environment variables and running per-environment

This project loads environment files based on NODE_ENV:

- `.env.development`
- `.env.production`


Usage examples:

```bash
# Run in development (loads .env.development)
NODE_ENV=development npm run start:dev

# Build and run production (loads .env.production)
npm run build
NODE_ENV=production npm run start:prod
```

For production, prefer Docker secrets, environment injection from your cloud provider, or a secrets manager rather than committing credentials to files in the repository.
