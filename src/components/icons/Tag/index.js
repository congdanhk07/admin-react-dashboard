import PropTypes from 'prop-types'
import React from 'react'

const Tag = (props) => {
  const { viewBox, style, width, height, stroke = '#0A3042' } = props

  return (
    <svg
      style={style}
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 0.00012207H6.84363C6.56869 0.00012207 6.1844 0.159408 5.99013 0.353528L0.291817 6.05182C-0.0972722 6.44047 -0.0972722 7.07767 0.291817 7.46585L4.53468 11.7086C4.92289 12.0972 5.55947 12.0972 5.94827 11.7081L11.6466 6.01071C11.8407 5.81662 12 5.43172 12 5.15736V1.00016C12 0.450265 11.5498 0.00012207 11 0.00012207ZM8.99984 4.00014C8.44754 4.00014 7.9998 3.55193 7.9998 3.0001C7.9998 2.44736 8.44754 2.00006 8.99984 2.00006C9.55214 2.00006 10 2.44736 10 3.0001C10.0001 3.55193 9.55214 4.00014 8.99984 4.00014Z"
        fill={stroke}
      />
    </svg>
  )
}

Tag.propTypes = {
  viewBox: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  style: PropTypes.object
}

Tag.defaultProps = {
  viewBox: '0 0 12 12',
  width: '12',
  height: '12',
  style: {}
}

export default Tag
