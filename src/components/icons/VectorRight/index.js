import PropTypes from 'prop-types'
import React from 'react'

const VectorRight = (props) => {
    const { viewBox, style, width, height, className } = props

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox={viewBox}
            style={style}
            width={width}
            height={height}
            stroke-width="1.7"
            stroke="currentColor"
            className={className}
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
        </svg>
    )
}

VectorRight.propTypes = {
    viewBox: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    style: PropTypes.object,
}

VectorRight.defaultProps = {
    viewBox: '0 0 32 32',
    // className: 'w-12 h-12',
    width: '32',
    height: '32',
    style: {},
}

export default VectorRight
