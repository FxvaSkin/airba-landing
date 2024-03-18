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
import { formatCurrency } from 'landing/utils/formatCurrency'

interface Props {}

const BlocksBottom: FC<Props> = () => {
  return (
    <div className={clsx(styles.blocksContainer, styles.marginTop)}>
      <div
        className={clsx(styles.block, styles.flex1)}
        onClick={() =>
          window.open(
            'https://airba.kz/category/odezhda-dlya-doma-i-sna-562',
            '_blank',
          )
        }
      >
        <span className={styles.blockTextBig}>
          Уют в <br />
          домашней <br />
          одежде
        </span>
        <Image src={comfortImage} alt="comfort" className={styles.image} />
        <span className={styles.selectButton}>выбрать</span>
      </div>

      <div className={clsx(styles.blocksRowContainer, styles.flex1)}>
        <div className={styles.blocksContainer}>
          <div
            className={clsx(styles.block, styles.gradient1)}
            onClick={() =>
              window.open(
                'https://airba.kz/category/kofty-i-svitery-525',
                '_blank',
              )
            }
          >
            <Image
              src={sweatersImage}
              alt="comfort"
              className={styles.imageSweaters}
            />
            <span className={styles.blockTextSmall}>Свитера</span>
          </div>

          <div
            className={clsx(styles.block, styles.gradient2)}
            onClick={() =>
              window.open(
                'https://airba.kz/category/sportivnyj-kostyum-558',
                '_blank',
              )
            }
          >
            <Image src={sportImage} alt="sport" className={styles.imageSport} />
            <span className={styles.blockTextSmall}>
              Спортивные <br />
              костюмы <br />
              <strong>20%</strong>
            </span>
          </div>
        </div>

        <div
          className={styles.blocksContainer}
          onClick={() =>
            window.open(
              'https://airba.kz/search?search_query=ray%20ban',
              '_blank',
            )
          }
        >
          <div className={clsx(styles.block, styles.gradient3)}>
            <Image
              src={glassesImage}
              alt="glasses"
              className={styles.imageGlasses}
            />
            <span className={styles.blockTextSmall}>
              Очки RayBan
              <br />
              <strong>30% скидка</strong>
            </span>
          </div>

          <div
            className={clsx(styles.block, styles.gradient4)}
            onClick={() =>
              window.open(
                'https://airba.kz/category/krossovki-i-kedy-461',
                '_blank',
              )
            }
          >
            <Image
              src={sneakersImage}
              alt="sneakers"
              className={styles.imageSneakers}
            />
            <span className={styles.blockTextSmall}>
              Кроссовки
              <br />
              от <strong>{formatCurrency(49999)}</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export { BlocksBottom }
