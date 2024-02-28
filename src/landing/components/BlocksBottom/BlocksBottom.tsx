import Image from 'next/image'

import {
  comfortImage,
  sweatersImage,
  glassesImage,
  sneakersImage,
  sportImage,
} from './images'
import styles from './BlocksBottom.module.css'

import type { FC } from 'react'
import clsx from 'clsx'

interface Props {}

const BlocksBottom: FC<Props> = () => {
  return (
    <div className={styles.blocksContainer}>
      <div className={clsx(styles.block, styles.flex1)}>
        <span className={styles.blockTextBig}>
          Уют в <br />
          домашней <br />
          одежде
        </span>
        <Image src={comfortImage} alt="comfort" className={styles.image} />
      </div>

      <div className={clsx(styles.blocksRowContainer, styles.flex1)}>
        <div className={styles.blocksContainer}>
          <div className={clsx(styles.block, styles.gradient1)}>
            <Image
              src={sweatersImage}
              alt="comfort"
              className={styles.imageSweaters}
            />
            <span className={styles.blockTextSmall}>Свитера</span>
          </div>

          <div className={clsx(styles.block, styles.gradient2)}>
            <Image src={sportImage} alt="sport" className={styles.imageSport} />
            <span className={styles.blockTextSmall}>
              Спортивные <br />
              костюмы
            </span>
          </div>
        </div>

        <div className={styles.blocksContainer}>
          <div className={clsx(styles.block, styles.gradient3)}>
            <Image
              src={glassesImage}
              alt="glasses"
              className={styles.imageGlasses}
            />
            <span className={styles.blockTextSmall}>Очки RayBan</span>
          </div>

          <div className={clsx(styles.block, styles.gradient4)}>
            <Image
              src={sneakersImage}
              alt="sneakers"
              className={styles.imageSneakers}
            />
            <span className={styles.blockTextSmall}>Кроссовки</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export { BlocksBottom }
