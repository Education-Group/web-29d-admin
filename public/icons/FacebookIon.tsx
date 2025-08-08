import React from 'react'

const FacebookIcon = (props: SVGProps) => {
    const {width = 24, height = 24} = props;
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM13.0423 17.8798V12.4393H14.5441L14.7432 10.5644H13.0423L13.0449 9.62604C13.0449 9.13706 13.0913 8.87505 13.7937 8.87505H14.7325V7H13.2305C11.4263 7 10.7913 7.9095 10.7913 9.43899V10.5646H9.66667V12.4395H10.7913V17.8798H13.0423Z" fill="black"/>
        </svg>
    )
}

export default FacebookIcon

