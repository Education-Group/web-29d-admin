import * as React from "react"
import { SVGProps } from "react"

const RightArrowIcon = (props: SVGProps<SVGSVGElement>)  => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#3D3D3D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 12h10m0 0-4-4m4 4-4 4"
    />
  </svg>
)
export default RightArrowIcon
