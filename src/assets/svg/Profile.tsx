import * as React from "react"
import { SVGProps } from "react"

const SvgProfile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={57}
    height={36}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0s18 8.059 18 18Zm-11.813-3.938a6.188 6.188 0 1 1-12.375 0 6.188 6.188 0 0 1 12.376 0ZM18 28.407c7.313 0 8.719-.843 9-3.656-.844-2.813-1.688-3.375-9-3.375-7.313 0-8.719.563-9 3.375.281 2.813 1.688 3.656 9 3.656Z"
      fill="#F6F6F6"
    />
    <path
      d="M48.794 24.5 41 11l7.794 3.5L56.59 11l-7.795 13.5Z"
      fill="#F6F6F6"
    />
  </svg>
)

export default SvgProfile
