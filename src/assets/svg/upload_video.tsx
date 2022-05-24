import * as React from "react"
import { SVGProps } from "react"

const SvgUploadVideo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={83}
    height={55}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 15C0 6.716 6.663 0 14.882 0h32.74c8.22 0 14.882 6.716 14.882 15v1.845l15.031-8.747C79.52 6.943 82 8.387 82 10.696v32.91c0 2.308-2.48 3.752-4.465 2.597l-15.03-8.747V40c0 8.284-6.664 15-14.883 15h-32.74C6.662 55 0 48.284 0 40V15Zm23.802 2.964c0-1.54 1.653-2.502 2.976-1.732l16.37 9.526c1.323.77 1.323 2.695 0 3.464l-16.37 9.527c-1.323.77-2.976-.193-2.976-1.732V17.964Z"
      fill="#383C43"
    />
  </svg>
)

export default SvgUploadVideo
