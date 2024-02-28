import Image from 'next/image'
import { TechonodomLogo } from './TechonodomLogo'

import styles from './Slogan.module.css'

import type { FC } from 'react'

interface Props {}

const Slogan: FC<Props> = () => {
  return (
    <>
      <h3 className={styles.sloganHeading}>
        Одежда и техника под одной крышей –
        <span className={styles.row}>
          <TechonodomLogo className={styles.logo} /> делает жизнь проще
        </span>
      </h3>
    </>
  )
}

export { Slogan }
