import {
  dress1Image,
  dress2Image,
  dress4Image,
  dress5Image,
  dress6Image,
  dress7Image,
} from './images'

const dresses = [
  {
    key: 'd1',
    src: dress1Image,
    href: 'https://airba.kz/product/goluboe-plate-rozanny-s-cvetochnymi-oborkami-ot-holli-lolli-689186',
  },
  {
    key: 'd2',
    src: dress2Image,
    href: 'https://airba.kz/product/plate-zhenskoe-abiyeniall-kremovyj-808193',
  },
  {
    key: 'd3',
    src: dress7Image,
    href: 'https://airba.kz/category/platya-1377',
  },
  {
    key: 'd4',
    src: dress4Image,
    href: 'https://airba.kz/product/plate-zhenskoe-june-chernyj-674298',
  },
  {
    key: 'd5',
    src: dress5Image,
    href: 'https://airba.kz/product/plate-zhenskoe-guitar-zelenyj-737927',
  },
  {
    key: 'd6',
    src: dress6Image,
    href: 'https://airba.kz/product/zelenoe-plate-hidzhab-s-risunkom-v-stile-neva-33095y-815013',
  },
]

import styles from './Dresses.module.css'

import type { FC } from 'react'
import Image from 'next/image'

interface Props {}

const Dresses: FC<Props> = () => {
  return (
    <div>
      <h3 className={styles.heading}>Платья на любой вкус</h3>

      <div className={styles.dressesWrapper}>
        <ul className={styles.dressList}>
          {dresses.map((dress) => (
            <li
              key={dress.key}
              className={styles.dressCard}
              onClick={() => window.open(dress.href, '_blank')}
            >
              <Image src={dress.src} alt={dress.key} className={styles.image} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export { Dresses }
