import * as React from "react"
import { SVGProps } from "react"

const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m23.672 20.752-4.674-4.674a1.124 1.124 0 0 0-.796-.328h-.765a9.702 9.702 0 0 0 2.063-6A9.749 9.749 0 0 0 9.75 0 9.749 9.749 0 0 0 0 9.75a9.749 9.749 0 0 0 9.75 9.75 9.702 9.702 0 0 0 6-2.063v.765c0 .3.117.585.328.796l4.674 4.674c.44.44 1.153.44 1.589 0l1.326-1.327c.44-.44.44-1.153.005-1.593ZM9.75 15.75c-3.314 0-6-2.681-6-6 0-3.314 2.681-6 6-6 3.314 0 6 2.681 6 6 0 3.314-2.681 6-6 6Z"
      fill="#5B5B5B"
    />
  </svg>
)

export default SvgSearch;
