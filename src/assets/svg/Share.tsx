import * as React from "react"
import { SVGProps } from "react"

const SvgShare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={30}
    height={31}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M23 3.086a3.99 3.99 0 0 0-2.828 1.177A4.027 4.027 0 0 0 19 7.104c.002.282.033.564.094.84l-9.082 4.561A4.002 4.002 0 0 0 7 11.122c-1.06 0-2.078.423-2.828 1.177a4.027 4.027 0 0 0 0 5.682 3.983 3.983 0 0 0 5.842-.204l9.076 4.56a4.027 4.027 0 0 0 1.082 3.68 3.99 3.99 0 0 0 5.656 0 4.027 4.027 0 0 0 0-5.682A3.99 3.99 0 0 0 23 19.158a3.987 3.987 0 0 0-3.014 1.381l-9.076-4.56c.06-.275.09-.557.09-.839a4.028 4.028 0 0 0-.094-.838l9.082-4.561A4 4 0 0 0 23 11.122a3.99 3.99 0 0 0 2.828-1.177 4.027 4.027 0 0 0 0-5.682A3.99 3.99 0 0 0 23 3.086Z"
      fill="#000"
    />
  </svg>
)

export default SvgShare