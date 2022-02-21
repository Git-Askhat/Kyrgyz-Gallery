import * as React from "react"
import { SVGProps } from "react"

const SvgFacebook = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={34}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.762 1.92C8.616 1.92 2.012 8.224 2.012 16c0 7.06 5.447 12.888 12.545 13.906V19.732h-3.649V16.03h3.65v-2.463c0-4.078 2.08-5.868 5.63-5.868 1.701 0 2.6.12 3.026.176v3.23h-2.422c-1.507 0-2.033 1.364-2.033 2.902v2.023h4.417l-.6 3.7H18.76v10.205c7.2-.933 12.753-6.808 12.753-13.936 0-7.776-6.604-14.08-14.75-14.08Z"
      fill="#fff"
    />
  </svg>
)

export default SvgFacebook
