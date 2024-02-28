import {
  dress1Image,
  dress2Image,
  dress3Image,
  dress4Image,
  dress5Image,
  dress6Image,
} from './images'

const dresses = [
  { key: 'd1', src: dress1Image },
  { key: 'd2', src: dress2Image },
  { key: 'd3', src: dress3Image },
  { key: 'd4', src: dress4Image },
  { key: 'd5', src: dress5Image },
  { key: 'd6', src: dress6Image },
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
            <li key={dress.key} className={styles.dressCard}>
              <Image src={dress.src} alt={dress.key} className={styles.image} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export { Dresses }
