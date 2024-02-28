import { StaticImageData } from 'next/image'

export interface Product {
  id: string
  title: string
  price: number
  href: string
  imageSrc: StaticImageData
}
