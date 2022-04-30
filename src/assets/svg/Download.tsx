import * as React from "react"
import { SVGProps } from "react"

const SvgDownload = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.09 18.048.68 8.898C.177 8.455.177 7.74.68 7.298l1.214-1.067A1.414 1.414 0 0 1 3.71 6.23L12 13.482l8.29-7.252a1.414 1.414 0 0 1 1.816.002l1.214 1.067c.502.442.502 1.157 0 1.598l-10.41 9.151a1.414 1.414 0 0 1-1.82 0Z"
      fill="#F6F6F6"
    />
  </svg>
)

export default SvgDownload;
