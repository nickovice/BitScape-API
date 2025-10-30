import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { HomeModule } from '../src/home.module';
import { TestDatabaseModule } from './test-database.config';
import { CategoriesService } from 'src/categories/categories.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Category } from 'src/categories/entities/category.entity';
import { Repository } from 'typeorm';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let service: CategoriesService;
  let categoryRepository: Repository<Category>;
  let moduleFixture: TestingModule;

  beforeAll(async () => {
    // Set test environment
    process.env.NODE_ENV = 'test';

    moduleFixture = await Test.createTestingModule({
      imports: [TestDatabaseModule, HomeModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    service = moduleFixture.get<CategoriesService>(CategoriesService);

    categoryRepository = moduleFixture.get<Repository<Category>>(
      getRepositoryToken(Category),
    );

    await app.init();
  });

  beforeEach(async () => {
    const categorias = await categoryRepository.find();
    categorias.forEach(async (categoria) => {
      await categoryRepository.remove(categoria);
    });
  });

  afterAll(async () => {
    await moduleFixture.close();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect((res) => {
        expect(res.text).toContain('Hola!');
        expect(res.text).toContain('Llegaste a la API del sitio');
        expect(res.text).toContain('<html>');
      });
  });

  it('/categories (GET)', () => {
    return request(app.getHttpServer())
      .get('/categories')
      .expect(200)
      .expect((res) => {
        expect(res.text).toContain('[]');
      });
  });

  it('should create a category', async () => {
    const categoryDto = {
      id: null,
      name: 'Perifericos',
      info: 'Cosas de computacion',
    };

    const result = await service.create(categoryDto);
    expect(result.message).toContain('Categoria creada con ID');

    const categories = await service.findAll();
    expect(categories).toHaveLength(1);
    expect(categories[0].name).toBe('Perifericos');
  });
});
