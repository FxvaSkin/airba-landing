import Image from 'next/image'

import {
  airbaImage,
  forteImage,
  freedomImage,
  eurasianImage,
  halykImage,
  homeCreditImage,
} from './images'
import styles from './Partners.module.css'

import type { FC } from 'react'

interface Props {}

const Partners: FC<Props> = () => {
  return (
    <div className={styles.partnersContainer}>
      <div className={styles.row}>
        <span className={styles.partnersText}>0-0-12 от партнеров</span>
        <Image src={airbaImage} alt="airba logo" width={446} height={56} />
      </div>

      <div className={styles.row}>
        <Image src={forteImage} alt="forte logo" />
        <Image src={freedomImage} alt="freedom logo" />
        <Image src={halykImage} alt="halyk logo" />
        <Image src={eurasianImage} alt="eurasian logo" />
        <Image src={homeCreditImage} alt="home credit logo" />
      </div>
    </div>
  )
}

export { Partners }
