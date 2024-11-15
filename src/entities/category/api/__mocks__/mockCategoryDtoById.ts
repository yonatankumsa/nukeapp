import products from '@/entities/product/api/__mocks__/products.json'
import { type CategoryWithProductsDto } from '../types'
import categories from './categories.json'

export function mockCategoryDtoById(
  id: number
): Nullable<CategoryWithProductsDto> {
  const category = categories.find((category) => category.id === id)

  if (!category) {
    return null
  }

  return {
    ...category,
    products: products.filter((product) => product.categoryId === id),
  }
}
