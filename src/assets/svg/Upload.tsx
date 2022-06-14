import * as React from "react"
import { SVGProps } from "react"

const SvgUpload = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.694.27c-1.67.554-2.372 2.44-2.226 4.194.108 1.304.201 2.512.285 3.668l-.594-.025L5.643 8l-1.391.054h-.696l-.642.053-.12.01c-.347.03-.69.094-1.024.195l-.033.01-.37.148c-.11.044-.216.1-.314.166-.32.214-.562.528-.669.897-.458 1.585-.52 2.78-.115 3.996.555 1.669 2.442 2.37 4.195 2.225 1.73-.143 3.29-.26 4.784-.365.12 1.753.253 3.612.424 5.74a3.028 3.028 0 0 0 1.959 2.592l.03.011.484.108.381.087c.21.049.425.073.64.073h.149a1.533 1.533 0 0 0 1.513-1.294l.075-.472.193-1.606.16-1.659.162-1.659.212-2.352c1.683-.116 3.469-.244 5.498-.407a3.027 3.027 0 0 0 2.593-1.96l.012-.03.106-.483.088-.382a2.85 2.85 0 0 0 .073-.64v-.148a1.534 1.534 0 0 0-1.294-1.514l-.472-.075-1.606-.192-1.659-.161-1.659-.161-1.217-.11.022-.536.107-2.516-.053-1.391v-.696l-.054-.642-.01-.12a5.008 5.008 0 0 0-.195-1.024l-.01-.033-.148-.37c-.044-.11-.1-.216-.166-.314a1.631 1.631 0 0 0-.897-.669c-1.585-.458-2.779-.52-3.995-.115Z"
        fill="#F6F6F6"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default SvgUpload
