import * as React from "react"
import { SVGProps } from "react"

const SvgEditProfile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={250}
    height={250}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M250 125c0 69.036-55.964 125-125 125C55.965 250 0 194.036 0 125 0 55.965 55.965 0 125 0c69.036 0 125 55.965 125 125Zm-82.031-27.344c0 23.731-19.238 42.969-42.969 42.969s-42.969-19.238-42.969-42.969c0-23.73 19.238-42.969 42.969-42.969s42.969 19.238 42.969 42.97ZM125 197.266c50.781 0 60.547-5.86 62.5-25.391-5.859-19.531-11.719-23.437-62.5-23.437s-60.547 3.906-62.5 23.437c1.953 19.531 11.719 25.391 62.5 25.391Z"
      fill="#717A88"
    />
  </svg>
)

export default SvgEditProfile
