import clsx from 'clsx'

import {
  Banner,
  Blocks,
  Brands,
  Dresses,
  Slogan,
  BlocksBottom,
  Products,
  HowTo,
  Partners,
  Faq,
} from './components'

import { Montserrat } from 'next/font/google'

import styles from './Landing.module.css'

import type { FC } from 'react'

const montserrat = Montserrat({ subsets: ['latin'] })

const Landing: FC = () => {
  return (
    <main className={clsx(styles.pageContainer, montserrat.className)}>
      {/* technodom header, TODO: should be removed */}
      <div style={{ height: '124px' }} />
      <Banner />
      <Brands />
      <Slogan />
      <Blocks />
      <Dresses />
      <BlocksBottom />
      <Products />
      <HowTo />
      <Partners />
      <Faq />
    </main>
  )
}

export { Landing }
