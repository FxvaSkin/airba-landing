import Image from 'next/image'

import clsx from 'clsx'
import { formatCurrency } from 'landing/utils/formatCurrency'

import styles from './Products.module.css'

import type { FC } from 'react'
import { Product } from 'landing/types'

interface Props {
  imageSrc: Product['imageSrc']
  price: Product['price']
  title: Product['title']
  href: Product['href']
}

const ProductCard: FC<Props> = ({ imageSrc, price, title, href }) => {
  return (
    <a href={href} className={styles.productCard}>
      <div className={styles.imageWrapper}>
        <Image src={imageSrc} alt={title} className={styles.image} />
      </div>

      <span className={styles.productPrice}>{formatCurrency(price)}</span>
      <div className={styles.productTitle}>{title}</div>

      <div className={styles.buttons}>
        <div className={clsx(styles.button, styles.buttonPrimary)}>Купить</div>
        <div className={clsx(styles.button, styles.buttonSecondary)}>
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.967 3.50317C13.7204 1.49894 16.7896 1.49894 18.543 3.50318C19.2939 4.36149 19.666 5.43868 19.666 6.50904C19.666 8.76672 18.2008 11.1285 16.5516 13.0606C14.8631 15.0388 12.7927 16.7841 11.2207 17.8321C10.8848 18.056 10.4472 18.056 10.1113 17.8321C8.53935 16.7841 6.4689 15.0388 4.78042 13.0606C3.13118 11.1285 1.66602 8.76672 1.66602 6.50904C1.66602 5.43868 2.03811 4.36149 2.789 3.50318C4.54241 1.49894 7.6116 1.49894 9.365 3.50318L10.666 4.9903L11.967 3.50317ZM17.0378 4.82006C16.0812 3.72665 14.4289 3.72665 13.4723 4.82006L11.4186 7.16748C11.2288 7.38454 10.9544 7.50904 10.666 7.50904C10.3776 7.50904 10.1033 7.38454 9.91338 7.16748L7.85974 4.82006C6.90317 3.72665 5.25084 3.72665 4.29427 4.82006C3.87767 5.29625 3.66602 5.89923 3.66602 6.50904C3.66602 8.00304 4.70085 9.88679 6.30162 11.7622C7.66883 13.3639 9.31818 14.8085 10.666 15.7822C12.0138 14.8085 13.6632 13.3639 15.0304 11.7622C16.6312 9.88679 17.666 8.00304 17.666 6.50904C17.666 5.89923 17.4544 5.29625 17.0378 4.82006Z"
              fill="#10142D"
            />
          </svg>
        </div>
      </div>
    </a>
  )
}

export { ProductCard }
