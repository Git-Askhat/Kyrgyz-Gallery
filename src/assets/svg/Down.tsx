import * as React from "react"
import { SVGProps } from "react"

const SvgDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.09 17.882.68 8.772C.177 8.332.177 7.62.68 7.18l1.214-1.063c.501-.438 1.314-.44 1.816-.002l8.29 7.22 8.29-7.22a1.419 1.419 0 0 1 1.816.002l1.214 1.063c.502.44.502 1.152 0 1.59l-10.41 9.11a1.42 1.42 0 0 1-1.82 0Z"
      fill="#5B5B5B"
    />
  </svg>
)

export default SvgDown;
