import PropTypes from 'prop-types'
import React from 'react'

const Filter = (props) => {
  const { viewBox, style, width, height, stroke = '#333' } = props

  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      style={style}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.33398 1H14.6673L9.33398 7.30667V13L6.66732 11.6667V7.30667L1.33398 1Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

Filter.propTypes = {
  viewBox: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  style: PropTypes.object
}

Filter.defaultProps = {
  width: '16',
  height: '14',
  viewBox: '0 0 16 14'
}

export default Filter
