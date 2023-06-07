import PropTypes from 'prop-types'
import React from 'react'

const CheckGreen = (props) => {
  const { viewBox, style, width, height } = props

  return (
    <svg
      viewBox={viewBox}
      style={style}
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50 90C27.9458 90 10 72.0573 10 50C10 27.9458 27.9458 10 50 10C72.0573 10 90 27.9458 90 50C90 72.0573 72.0573 90 50 90ZM50 16.1967C31.3602 16.1967 16.1967 31.3602 16.1967 50C16.1967 68.6398 31.3602 83.8033 50 83.8033C68.6398 83.8033 83.8033 68.6367 83.8033 50C83.8033 31.3602 68.6398 16.1967 50 16.1967Z"
        fill="#267004"
      />
      <path
        d="M45.1669 64.7173C44.3366 64.7173 43.5433 64.3858 42.9577 63.7909L31.5247 52.172C30.3256 50.9512 30.3411 48.9931 31.5619 47.7909C32.7827 46.595 34.7439 46.6073 35.943 47.8281L45.077 57.1108L63.9741 36.2991C65.1297 35.0319 67.088 34.942 68.3489 36.0884C69.6161 37.238 69.7091 39.1961 68.5595 40.4664L47.4597 63.704C46.8866 64.3361 46.0809 64.7017 45.2289 64.7203C45.2072 64.7173 45.1886 64.7173 45.1669 64.7173Z"
        fill="#267004"
      />
    </svg>
  )
}

CheckGreen.propTypes = {
  viewBox: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  style: PropTypes.object
}

CheckGreen.defaultProps = {
  width: '100',
  height: '100',
  viewBox: '0 0 100 100'
}

export default CheckGreen
