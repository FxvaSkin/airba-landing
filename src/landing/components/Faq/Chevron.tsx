import type { FC } from 'react'

interface Props {
  className?: string
}

const Chevron: FC<Props> = ({ className }) => {
  return (
    <svg
      width="23"
      height="13"
      viewBox="0 0 23 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        id="Vector"
        d="M1 1.5L11.5003 11.5L22 1.5"
        stroke="#10142D"
        stroke-width="2"
        stroke-miterlimit="22.9256"
      />
    </svg>
  )
}

export { Chevron }
