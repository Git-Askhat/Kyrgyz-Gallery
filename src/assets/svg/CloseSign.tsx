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
    <path
      d="M19 36.5c9.665 0 17.5-7.835 17.5-17.5S28.665 1.5 19 1.5 1.5 9.335 1.5 19 9.335 36.5 19 36.5Z"
      stroke="#959595"
      strokeWidth={3}
    />
    <path
      d="m25.723 10.833-13.89 13.89c-.46.46-.516 1.15-.126 1.54.39.39 1.08.334 1.54-.126l13.89-13.89c.46-.46.517-1.15.127-1.54-.391-.39-1.08-.334-1.541.126Z"
      fill="#959595"
    />
    <path
      d="m27.137 25.015-13.89-13.89c-.46-.46-1.15-.516-1.54-.125-.39.39-.334 1.08.126 1.54l13.89 13.89c.46.46 1.15.517 1.54.126.39-.39.334-1.08-.126-1.54Z"
      fill="#959595"
    />
  </svg>
)

export default SvgClose;
