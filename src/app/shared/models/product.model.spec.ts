import { Product } from './products.model';

describe('Products', () => {
  it('should create an instance', () => {
    expect(new Product()).toBeTruthy();
  });
});
