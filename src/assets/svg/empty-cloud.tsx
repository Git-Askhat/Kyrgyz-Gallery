import * as React from "react"
import { SVGProps } from "react"

const SvgEmptyCloud = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={100}
    height={100}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path fill="url(#a)" d="M0 0h100v100H0z" />
    <defs>
      <pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#b" transform="scale(.01)" />
      </pattern>
      <image
        id="b"
        width={100}
        height={100}
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
)

export default SvgEmptyCloud
