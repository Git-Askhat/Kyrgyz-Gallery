import * as React from "react"
import { SVGProps } from "react"

const SvgPen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={36}
    height={36}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={18} cy={18} r={18} fill="#F6F6F6" />
    <path
      d="m24 8-2.414 2.414 4 4L28 12l-4-4Zm-3.924 3.924L9 23v4h4l11.076-11.076-4-4Z"
      fill="#000"
    />
  </svg>
)

export default SvgPen
