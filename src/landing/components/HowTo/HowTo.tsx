import Image from 'next/image'
import { Arrow } from './Arrow'

import {
  pointerImage,
  cartImage,
  deliveryImage,
  personImage,
  kaefImage,
} from './images'
import styles from './HowTo.module.css'

import type { FC } from 'react'

interface Props {}

const HowTo: FC<Props> = () => {
  return (
    <div>
      <h3 className={styles.heading}>
        Просто и удобно оформить заказ в онлайн
      </h3>

      <div className={styles.cardListWrapper}>
        <div className={styles.cardList}>
          <div className={styles.howtoCard}>
            <Image src={pointerImage} alt="pointer" />
            <span className={styles.cardText}>
              Зайти на
              <br />
              airba.kz
            </span>
          </div>

          <Arrow className={styles.arrow} />

          <div className={styles.howtoCard}>
            <Image src={cartImage} alt="pointer" />
            <span className={styles.cardText}>
              Выбрать товар из <br />
              каталога
            </span>
          </div>

          <Arrow className={styles.arrow} />

          <div className={styles.howtoCard}>
            <Image src={deliveryImage} alt="pointer" />
            <span className={styles.cardText}>
              Выбрать способ
              <br />
              доставки и оплаты
            </span>
          </div>

          <Arrow className={styles.arrow} />

          <div className={styles.howtoCard}>
            <Image src={personImage} alt="pointer" />
            <span className={styles.cardText}>
              Приложить ИИН
              <br />
              на сайте
            </span>
          </div>

          <Arrow className={styles.arrow} />

          <div className={styles.howtoCard}>
            <Image src={kaefImage} alt="pointer" />
            <span className={styles.cardText}>
              Получить заказ
              <br />
              через 14 дней
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export { HowTo }
