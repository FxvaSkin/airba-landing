import Image from 'next/image'

import { shoesImage, springImage } from './images'
import styles from './Blocks.module.css'

import type { FC } from 'react'
import clsx from 'clsx'

interface Props {}

const Blocks: FC<Props> = () => {
  return (
    <div className={styles.blockList}>
      <div
        className={styles.blockContainer}
        onClick={() =>
          window.open(
            'https://airba.kz/category/verhnyaya-odezhda-507',
            '_blank',
          )
        }
      >
        <Image src={springImage} alt="spring" className={styles.image} />
        <span className={clsx(styles.blockText, styles.blockTextLeft)}>
          Весна
          <br />
          2024
        </span>
      </div>

      <div
        className={styles.blockContainer}
        onClick={() =>
          window.open('https://airba.kz/category/muzhskaya-obuv-455', '_blank')
        }
      >
        <Image src={shoesImage} alt="shoes" className={styles.image} />
        <span className={clsx(styles.blockText, styles.blockTextRight)}>
          Обувь
          <br />
          турецкого
          <br />
          качества
        </span>
      </div>
    </div>
  )
}

export { Blocks }
