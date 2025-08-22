import * as React from "react"
import { SVGProps } from "react"
const LeftArrowIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={10}
    fill="none"
    {...props}
  >
    <path
      stroke="#3D3D3D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.5 5h-10m0 0 4 4m-4-4 4-4"
    />
  </svg>
)
export default LeftArrowIcon
