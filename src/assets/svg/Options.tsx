import * as React from "react"
import { SVGProps } from "react"

const SvgOptions = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={42}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)" fill="#F6F6F6">
      <path d="M26.182 1H1.09C.488 1 0 1.672 0 2.5S.488 4 1.09 4h25.092c.602 0 1.09-.672 1.09-1.5S26.785 1 26.183 1ZM26.182 7H1.09C.488 7 0 7.672 0 8.5S.488 10 1.09 10h25.092c.602 0 1.09-.672 1.09-1.5S26.785 7 26.183 7ZM36 11 30 1l6 2.593L42 1l-6 10Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h42v12H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default SvgOptions;
