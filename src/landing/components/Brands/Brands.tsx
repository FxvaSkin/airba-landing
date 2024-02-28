import Image from 'next/image'
import styles from './Brands.module.css'

import {
  adidasImage,
  juneImage,
  nikeImage,
  rayBanImage,
  pumaImage,
  karacaImage,
} from './images'

import type { FC } from 'react'

interface Props {}

const brands = [
  { key: 'adidas', src: adidasImage },
  { key: 'june', src: juneImage, size: { w: 231, h: 58 } },
  { key: 'nike', src: nikeImage },
  { key: 'ray-ban', src: rayBanImage },
  { key: 'puma', src: pumaImage },
  { key: 'karaka', src: karacaImage },
]

const Brands: FC<Props> = () => {
  return (
    <ul className={styles.brandList}>
      {brands.map((brand) => (
        <li key={brand.key} className={styles.brandContainer}>
          <Image
            src={brand.src}
            alt={brand.key}
            className={styles.image}
            height={brand.size?.h}
            width={brand.size?.w}
          />
        </li>
      ))}
    </ul>
  )
}

export { Brands }
