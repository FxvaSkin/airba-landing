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
  {
    key: 'adidas',
    src: adidasImage,
    href: 'https://airba.kz/search?search_query=adidas',
  },
  {
    key: 'june',
    src: juneImage,
    size: { w: 231, h: 58 },
    href: 'https://airba.kz/search?search_query=June',
  },
  {
    key: 'nike',
    src: nikeImage,
    href: 'https://airba.kz/search?search_query=Nike',
  },
  {
    key: 'ray-ban',
    src: rayBanImage,
    href: 'https://airba.kz/search?search_query=ray%20ban',
  },
  {
    key: 'puma',
    src: pumaImage,
    href: 'https://airba.kz/search?search_query=puma',
  },
  {
    key: 'karaka',
    src: karacaImage,
    href: 'https://airba.kz/search?page=2&search_query=karaca',
  },
]

const Brands: FC<Props> = () => {
  return (
    <ul className={styles.brandList}>
      {brands.map((brand) => (
        <li
          key={brand.key}
          className={styles.brandContainer}
          onClick={() => window.open(brand.href, '_blank')}
        >
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
