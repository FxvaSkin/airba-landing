import type { FC } from 'react'

interface Props {
  className?: string
}

const Arrow: FC<Props> = ({ className }) => {
  return (
    <svg
      width="44"
      height="16"
      viewBox="0 0 44 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        id="Arrow 1"
        d="M43.7071 8.70711C44.0976 8.31658 44.0976 7.68342 43.7071 7.29289L37.3431 0.928932C36.9526 0.538408 36.3195 0.538408 35.9289 0.928932C35.5384 1.31946 35.5384 1.95262 35.9289 2.34315L41.5858 8L35.9289 13.6569C35.5384 14.0474 35.5384 14.6805 35.9289 15.0711C36.3195 15.4616 36.9526 15.4616 37.3431 15.0711L43.7071 8.70711ZM0 9H43V7H0V9Z"
        fill="#AAB0D3"
      />
    </svg>
  )
}

export { Arrow }
