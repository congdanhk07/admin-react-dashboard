import PropTypes from 'prop-types'
import React from 'react'

const ShoppingCart = (props) => {
  const { viewBox, style, width, height, stroke = '#464646' } = props

  return (
    <svg
      viewBox={viewBox}
      style={style}
      width={width}
      height={height}
      fill="none"
    >
      <path
        d="M7.50008 18.3333C7.96032 18.3333 8.33341 17.9602 8.33341 17.5C8.33341 17.0398 7.96032 16.6667 7.50008 16.6667C7.03984 16.6667 6.66675 17.0398 6.66675 17.5C6.66675 17.9602 7.03984 18.3333 7.50008 18.3333Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.6666 18.3333C17.1268 18.3333 17.4999 17.9602 17.4999 17.5C17.4999 17.0398 17.1268 16.6667 16.6666 16.6667C16.2063 16.6667 15.8333 17.0398 15.8333 17.5C15.8333 17.9602 16.2063 18.3333 16.6666 18.3333Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.833252 0.833332H4.16658L6.39992 11.9917C6.47612 12.3753 6.68484 12.72 6.98954 12.9652C7.29424 13.2105 7.6755 13.3408 8.06658 13.3333H16.1666C16.5577 13.3408 16.9389 13.2105 17.2436 12.9652C17.5483 12.72 17.757 12.3753 17.8333 11.9917L19.1666 5H4.99992"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

ShoppingCart.propTypes = {
  viewBox: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  style: PropTypes.object
}

ShoppingCart.defaultProps = {
  viewBox: '0 0 20 20',
  width: '20',
  height: '20',
  style: {}
}

export default ShoppingCart
