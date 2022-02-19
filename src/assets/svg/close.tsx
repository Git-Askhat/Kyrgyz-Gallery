import * as React from "react"
import { SVGProps } from "react"

const SvgClose = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={38}
    height={38}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={19} cy={19} r={17.5} stroke="#959595" strokeWidth={3} />
    <rect
      x={8}
      y={27.799}
      width={28}
      height={3}
      rx={1.5}
      transform="rotate(-45 8 27.799)"
      fill="#959595"
    />
    <rect
      x={10.121}
      y={8}
      width={28}
      height={3}
      rx={1.5}
      transform="rotate(45 10.121 8)"
      fill="#959595"
    />
  </svg>
)

export default SvgClose;
