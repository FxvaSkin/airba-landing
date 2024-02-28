import { ProductCard } from './ProductCard'

import styles from './Products.module.css'

import type { FC } from 'react'
import type { Product } from 'landing/types'

interface Props {
  products: Product[]
}

const ProductList: FC<Props> = ({ products }) => {
  return (
    <ul className={styles.productCardList}>
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard
            imageSrc={product.imageSrc}
            title={product.title}
            price={product.price}
            href={product.href}
          />
        </li>
      ))}
    </ul>
  )
}

export { ProductList }
