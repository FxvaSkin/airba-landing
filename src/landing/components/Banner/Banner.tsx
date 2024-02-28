import clsx from 'clsx'

import Image from 'next/image'
import { AirbaTag } from './AirbaTag'

import { bannerBackgroundImage, bannerFrontImage } from './images'
import styles from './Banner.module.css'

import type { FC } from 'react'

interface Props {}

const Banner: FC<Props> = () => {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerContent}>
        <h2 className={styles.bannerHeading}>
          Широкий ассортимент
          <br />
          одежды и обуви из Турции
        </h2>

        <AirbaTag className={styles.airbaTag} />
      </div>

      <div className={styles.bannerBackgroundWrapper}>
        <Image
          src={bannerBackgroundImage}
          alt="back"
          className={clsx(styles.image, styles.bannerBackground)}
        />
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
