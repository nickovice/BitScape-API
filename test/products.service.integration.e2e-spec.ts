import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsService } from '../src/products/products.service';
import { CategoriesService } from '../src/categories/categories.service';
import { Product } from '../src/products/entities/product.entity';
import { Category } from '../src/categories/entities/category.entity';
import { TestConfigModule, TestDatabaseModule } from './test-database.config';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('ProductsService Integration', () => {
  let service: ProductsService;
  let productRepository: Repository<Product>;
  let categoryRepository: Repository<Category>;
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [
        TestConfigModule,
        TestDatabaseModule,
        TypeOrmModule.forFeature([Product, Category]),
      ],
      providers: [ProductsService, CategoriesService],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
    productRepository = module.get<Repository<Product>>(
      getRepositoryToken(Product),
    );
    categoryRepository = module.get<Repository<Category>>(
      getRepositoryToken(Category),
    );
  });

  beforeEach(async () => {
    // Clean the database before each test using raw SQL to handle FK constraints
    await productRepository.query('TRUNCATE TABLE product RESTART IDENTITY CASCADE');
    await categoryRepository.query('TRUNCATE TABLE category RESTART IDENTITY CASCADE');
  });

  afterAll(async () => {
    await module.close();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a product', async () => {
    // First create a category
    const category = categoryRepository.create({
      name: 'Electronics',
      info: 'Electronics info',
    });
    const savedCategory = await categoryRepository.save(category);

    const productDto = {
      id: null,
      category: savedCategory.id,
      id_category: savedCategory.id,
      brand: 'Apple',
      name: 'iPhone 15',
      price: 999,
      info: 'Latest iPhone model',
      image: null,
    };

    const result = await service.create(productDto);
    expect(result.message).toContain('Producto creado con ID');

    const products = await service.findAll();
    expect(products).toHaveLength(1);
    expect(products[0].name).toBe('iPhone 15');
  });

  it('should find all products', async () => {
    // Create a category first
    const category = categoryRepository.create({
      name: 'Electronics',
      info: 'Electronics info',
    });
    const savedCategory = await categoryRepository.save(category);

    // Create test products
    const product1 = productRepository.create({
      category: savedCategory,
      brand: 'Apple',
      name: 'iPhone 15',
      price: 999,
      info: 'Latest iPhone',
    });
    const product2 = productRepository.create({
      category: savedCategory,
      brand: 'Samsung',
      name: 'Galaxy S24',
      price: 899,
      info: 'Latest Galaxy',
    });
    await productRepository.save([product1, product2]);

    const products = await service.findAll();
    expect(products).toHaveLength(2);
  });

  it('should find product by id', async () => {
    // Create a category first
    const category = categoryRepository.create({
      name: 'Electronics',
      info: 'Electronics info',
    });
    const savedCategory = await categoryRepository.save(category);

    const product = productRepository.create({
      category: savedCategory,
      brand: 'Apple',
      name: 'iPhone 15',
      price: 999,
      info: 'Latest iPhone',
    });
    const savedProduct = await productRepository.save(product);

    const found = await service.findOne(savedProduct.id);
    expect(found.name).toBe('iPhone 15');
    expect(found.category).toBeDefined();
  });

  it('should search products by name', async () => {
    // Create a category first
    const category = categoryRepository.create({
      name: 'Electronics',
      info: 'Electronics info',
    });
    const savedCategory = await categoryRepository.save(category);

    const product = productRepository.create({
      category: savedCategory,
      brand: 'Apple',
      name: 'iPhone 15 Pro Max',
      price: 1199,
      info: 'Premium iPhone',
    });
    await productRepository.save(product);

    const queryDto = {
      search: 'iPhone',
      filter: '',
      category: '',
      sort: '',
      brand: '',
    };
    const searchResult = await service.search(queryDto);
    expect(searchResult).toHaveLength(1);
    expect(searchResult[0].name).toBe('iPhone 15 Pro Max');
  });

  it('should filter products by brand', async () => {
    // Create a category first
    const category = categoryRepository.create({
      name: 'Electronics',
      info: 'Electronics info',
    });
    const savedCategory = await categoryRepository.save(category);

    // Create products with different brands
    const product1 = productRepository.create({
      category: savedCategory,
      brand: 'Apple',
      name: 'iPhone 15',
      price: 999,
      info: 'iPhone',
    });
    const product2 = productRepository.create({
      category: savedCategory,
      brand: 'Samsung',
      name: 'Galaxy S24',
      price: 899,
      info: 'Galaxy',
    });
    await productRepository.save([product1, product2]);

    const queryDto = {
      search: '',
      filter: '',
      category: '',
      sort: '',
      brand: 'Apple',
    };
    const appleProducts = await service.brandQuery(queryDto);
    expect(appleProducts).toHaveLength(1);
    expect(appleProducts[0].brand).toBe('Apple');
  });
});
