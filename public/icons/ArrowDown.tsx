import React from 'react'

const ArrowDown = (props: SVGProps) => {
    const {width = 10, height = 10} = props;
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 10 6" fill="none">
            <path d="M9 1L5 5L1 1" stroke="#010101" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

export default ArrowDown