import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesService } from '../src/categories/categories.service';
import { ProductsService } from '../src/products/products.service';
import { Category } from '../src/categories/entities/category.entity';
import { Product } from '../src/products/entities/product.entity';
import { TestConfigModule, TestDatabaseModule } from './test-database.config';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('CategoriesService Integration', () => {
  let service: CategoriesService;
  let categoryRepository: Repository<Category>;
  let productRepository: Repository<Product>;
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [
        TestConfigModule,
        TestDatabaseModule,
        TypeOrmModule.forFeature([Category, Product]),
      ],
      providers: [CategoriesService, ProductsService],
    }).compile();

    service = module.get<CategoriesService>(CategoriesService);
    categoryRepository = module.get<Repository<Category>>(
      getRepositoryToken(Category),
    );
    productRepository = module.get<Repository<Product>>(
      getRepositoryToken(Product),
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

  it('should create a category', async () => {
    const categoryDto = {
      id: null,
      name: 'Electronics',
      info: 'Electronic devices and accessories',
    };

    const result = await service.create(categoryDto);
    expect(result.message).toContain('Categoria creada con ID');

    const categories = await service.findAll();
    expect(categories).toHaveLength(1);
    expect(categories[0].name).toBe('Electronics');
  });

  it('should find all categories', async () => {
    // Create test data
    const category1 = categoryRepository.create({
      name: 'Electronics',
      info: 'Electronics info',
    });
    const category2 = categoryRepository.create({
      name: 'Books',
      info: 'Books info',
    });
    await categoryRepository.save([category1, category2]);

    const categories = await service.findAll();
    expect(categories).toHaveLength(2);
  });

  it('should find category by name', async () => {
    const category = categoryRepository.create({
      name: 'Electronics',
      info: 'Electronics info',
    });
    await categoryRepository.save(category);

    const found = await service.findByName('Electronics');
    expect(found.name).toBe('Electronics');
  });

  it('should update a category', async () => {
    const category = categoryRepository.create({
      name: 'Electronics',
      info: 'Electronics info',
    });
    const savedCategory = await categoryRepository.save(category);

    const updateDto = {
      id: null,
      name: 'Updated Electronics',
      info: 'Updated electronics info',
    };

    const result = await service.update(savedCategory.id, updateDto);
    expect(result.message).toBe('Categoria actualizada');

    const updated = await categoryRepository.findOneBy({
      id: savedCategory.id,
    });
    expect(updated.name).toBe('Updated Electronics');
  });

  it('should delete a category', async () => {
    const category = categoryRepository.create({
      name: 'Electronics',
      info: 'Electronics info',
    });
    const savedCategory = await categoryRepository.save(category);

    const result = await service.delete(savedCategory.id);
    expect(result.message).toBe('Categoria borrada');

    const found = await categoryRepository.findOneBy({
      id: savedCategory.id,
    });
    expect(found).toBeNull();
  });
});
