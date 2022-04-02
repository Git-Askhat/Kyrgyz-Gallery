import * as React from "react"
import { SVGProps } from "react"

const SvgViews = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={13}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 12.018c3.314 0 8-1.154 12-6-3.75-4.615-8.686-6-12-6s-8.25 1.385-12 6c4 4.615 8.686 6 12 6Zm0-12c-3.038 0-5.5 2.273-5.5 5.077s2.462 5.077 5.5 5.077c3.037 0 5.5-2.273 5.5-5.077S15.037.018 12 .018Zm2.5 5.077c0 1.274-1.12 2.308-2.5 2.308S9.5 6.369 9.5 5.095c0-1.275 1.12-2.308 2.5-2.308s2.5 1.033 2.5 2.308Z"
        fill="#1D1E20"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(0 .018)" d="M0 0h24v12H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default SvgViews
