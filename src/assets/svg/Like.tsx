import * as React from "react"
import { SVGProps } from "react"

const SvgLike = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.5.086c-1.74 0-3.41.81-4.5 2.09C8.91.896 7.24.086 5.5.086c-3.08 0-5.5 2.42-5.5 5.5 0 3.78 3.4 6.86 8.55 11.54l1.45 1.31 1.45-1.32C16.6 12.446 20 9.366 20 5.586c0-3.08-2.42-5.5-5.5-5.5Zm-4.4 15.55-.1.1-.1-.1C5.14 11.326 2 8.476 2 5.586c0-2 1.5-3.5 3.5-3.5 1.54 0 3.04.99 3.57 2.36h1.87c.52-1.37 2.02-2.36 3.56-2.36 2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05Z"
      fill="#000"
    />
  </svg>
)

export default SvgLike
