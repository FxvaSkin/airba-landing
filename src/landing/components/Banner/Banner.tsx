import clsx from 'clsx'

import Image from 'next/image'
import { AirbaTag } from './AirbaTag'

import { bannerFrontImage } from './images'
import styles from './Banner.module.css'

import type { FC } from 'react'

interface Props {}

const Banner: FC<Props> = () => {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerContent}>
        <div className={styles.airbaTagWrapper}>
          <AirbaTag className={styles.airbaTag} />
        </div>

        <div className={styles.bannerHeadingWrapper}>
          <div className={styles.bannerHeading}>
            <span>Широкий ассортимент</span>
            <br />
            <span>одежды и обуви из Турции</span>

            <div
              className={styles.airbaButtonWrapper}
              onClick={() =>
                window.open(
                  'https://airba.kz/category/zhenskaya-odezhda-500',
                  '_blank',
                )
              }
            >
              <span className={styles.airbaButtonTitle}>Перейти на сайт</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bannerFrontWrapper}>
        <Image
          src={bannerFrontImage}
          alt="satisfied customer"
          className={clsx(styles.image)}
        />
      </div>
    </div>
  )
}

export { Banner }
