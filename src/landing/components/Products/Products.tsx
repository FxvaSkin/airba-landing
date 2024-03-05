import { Product } from 'landing/types'
import { ProductList } from './ProductList'

import {
  male1Image,
  male2Image,
  male3Image,
  male4Image,
  male5Image,
  male6Image,
  male8Image,
  male9Image,
  male10Image,
  female1Image,
  female2Image,
  female3Image,
  female4Image,
  female5Image,
  female6Image,
  female7Image,
  female8Image,
  female9Image,
  female10Image,
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
  {
    id: '6',
    title: 'Гибкая вельветовая трикотажная блузка с перекрестными бретельками',
    imageSrc: female6Image,
    price: 12244,
    href: 'https://airba.kz/product/gibkaya-velvetovaya-trikotazhnaya-bluzka-s-perekrestnymi-bretelkami-652355',
  },
  {
    id: '7',
    title: 'Пальто женское Markapia, серый',
    imageSrc: female7Image,
    price: 50456,
    href: 'https://airba.kz/product/palto-zhenskoe-markapia-seryj-689692',
  },
  {
    id: '8',
    title: 'Платье женское June, синий',
    imageSrc: female8Image,
    price: 19411,
    href: 'https://airba.kz/product/plate-zhenskoe-june-sinij-656090',
  },
  {
    id: '9',
    title: 'Пижама женская For You Sleepwear, темно-синяя',
    imageSrc: female9Image,
    price: 13681,
    href: 'https://airba.kz/product/pizhama-zhenskaya-for-you-sleepwear-s27234-temno-sinyaya-747538',
  },
  {
    id: '10',
    title: 'Пальто женское June, серый',
    imageSrc: female10Image,
    price: 26231,
    href: 'https://airba.kz/product/palto-zhenskoe-june-seryj-808081',
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
  {
    id: '6',
    title: 'Толстовка мужская U.S. Polo Assn.18469 Серая',
    imageSrc: male6Image,
    price: 17922,
    href: 'https://airba.kz/product/tolstovka-muzhskaya-u-s-polo-assn-18469-seraya-635473',
  },
  // {
  //   id: '7',
  //   title: '',
  //   imageSrc: male7Image,
  //   price: ,
  //   href: '',
  // },
  {
    id: '8',
    title: 'Очки солнцезащитные унисекс Ray-Ban RB2140 901 50 Черные',
    imageSrc: male8Image,
    price: 64400,
    href: 'https://airba.kz/product/ochki-solncezaschitnye-uniseks-ray-ban-rb2140-901-50-chernye-783926',
  },
  {
    id: '9',
    title: 'Часы мужские Emporio Armani AR11480 Серебристые',
    imageSrc: male9Image,
    price: 137493,
    href: 'https://airba.kz/product/chasy-muzhskie-emporio-armani-ar11480-serebristye-795479',
  },
  {
    id: '10',
    title: "Bueno Shoes Gray Dark Suede Men's Boots",
    imageSrc: male10Image,
    price: 39232,
    href: 'https://airba.kz/product/bueno-shoes-gray-dark-suede-mens-boots-695759',
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
