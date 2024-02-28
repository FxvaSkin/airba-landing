import { Product } from 'landing/types'
import { ProductList } from './ProductList'

import {
  male1Image,
  male2Image,
  male3Image,
  male4Image,
  male5Image,
  female1Image,
  female2Image,
  female3Image,
  female4Image,
  female5Image,
} from './images'
import styles from './Products.module.css'

import type { FC } from 'react'

interface Props {}

const forWomen: Product[] = [
  {
    id: '1',
    title: 'Женские сапоги на каблуке из черной кожи Bueno',
    imageSrc: female1Image,
    price: 35876,
    href: 'https://airba.kz/product/zhenskie-sapogi-na-kabluke-iz-chernoj-kozhi-bueno-744297',
  },
  {
    id: '2',
    title: 'Рубашка женская Holly Lolly',
    imageSrc: female2Image,
    price: 25284,
    href: 'https://airba.kz/product/rubashka-zhenskaya-holly-lolly-s-temno-sinij-609165',
  },
  {
    id: '3',
    title: 'Бордово-красная сумка через плечо с принтом Pierre Cardin',
    imageSrc: female3Image,
    price: 30959,
    href: 'https://airba.kz/product/bordovo-krasnaya-sumka-cherez-plecho-s-printom-pierre-cardin-05po22y1554-p-br-688906',
  },
  {
    id: '4',
    title: 'Женская клетчатая рубашка лесоруба EDZ',
    imageSrc: female4Image,
    price: 16400,
    href: 'https://airba.kz/product/rubashka-zhenskaya-holly-lolly-s-temno-sinij-609165',
  },
  {
    id: '5',
    title: 'Платье женское June',
    imageSrc: female5Image,
    price: 19411,
    href: 'https://airba.kz/product/rubashka-zhenskaya-holly-lolly-s-temno-sinij-609165',
  },
]

const forMen: Product[] = [
  {
    id: '1',
    title: 'Толстовка мужская Tena Moda',
    imageSrc: male1Image,
    price: 12208,
    href: 'https://airba.kz/product/tolstovka-muzhskaya-tena-moda-seryj-m-588087',
  },
  {
    id: '2',
    title: 'Мужская кожаная куртка Basics&more',
    imageSrc: male2Image,
    price: 64033,
    href: 'https://airba.kz/product/muzhskaya-kozhanaya-kurtka-basicsandmore-717628',
  },
  {
    id: '3',
    title: 'Серый шерстяной свитер CO Cewo Tricot',
    imageSrc: male3Image,
    price: 31688,
    href: 'https://airba.kz/product/seryj-melanzhevyj-sherstyanoj-sviter-co-cewo-tricot-komfortnogo-kroya-s-v-obraznym-vyrezom-772544',
  },
  {
    id: '4',
    title: 'Мужская футболка-поло Thewildwalking',
    imageSrc: male4Image,
    price: 9302,
    href: 'https://airba.kz/product/muzhskaya-futbolka-polo-s-kruglym-vyrezom-thewildwalking-797930',
  },
  {
    id: '5',
    title: 'Белые льняные туфли zerhan на шнуровке',
    imageSrc: male5Image,
    price: 7262,
    href: 'https://airba.kz/product/belye-lnyanye-tufli-zerhan-na-shnurovke-797452',
  },
]

const Products: FC<Props> = () => {
  return (
    <div>
      <h3 className={styles.heading}>Женщинам</h3>
      <ProductList products={forWomen} />
      <h3 className={styles.heading}>Мужчинам</h3>
      <ProductList products={forMen} />
    </div>
  )
}

export { Products }
