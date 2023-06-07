import PropTypes from 'prop-types'
import React from 'react'

const DishCart = (props) => {
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
        d="M14.49 0.65625C13.6811 0.65625 13.0252 1.31211 13.0252 2.12109V19.3432C13.0252 20.2621 12.2775 21.0096 11.3588 21.0096C10.5498 21.0096 9.89394 21.6654 9.89394 22.4744V64.7471C9.89394 65.666 9.14629 66.4135 8.22754 66.4135C7.30879 66.4135 6.56113 65.6658 6.56113 64.7471V22.4744C6.56113 21.6654 5.90527 21.0096 5.09629 21.0096C4.17734 21.0096 3.42988 20.2619 3.42988 19.3432V2.12109C3.42988 1.31211 2.77402 0.65625 1.96504 0.65625C1.15605 0.65625 0.5 1.31211 0.5 2.12109V19.3432C0.5 21.3654 1.81309 23.0869 3.63125 23.7V64.7471C3.63125 67.2814 5.69316 69.3432 8.22734 69.3432C10.7615 69.3432 12.8234 67.2812 12.8234 64.7471V23.7C14.6416 23.0869 15.9547 21.3654 15.9547 19.3432V2.12109C15.9549 1.31211 15.299 0.65625 14.49 0.65625Z"
        fill="#666666"
      />
      <path
        d="M8.22656 17.6768C9.03555 17.6768 9.69141 17.0209 9.69141 16.2119V2.12109C9.69141 1.31211 9.03555 0.65625 8.22656 0.65625C7.41758 0.65625 6.76172 1.31211 6.76172 2.12109V16.2119C6.76172 17.0209 7.41758 17.6768 8.22656 17.6768Z"
        fill="#666666"
      />
      <path
        d="M99.0346 0.65625C93.0471 0.65625 88.1758 5.52754 88.1758 11.515V41.2623C88.1758 42.0713 88.8316 42.7271 89.6406 42.7271H97.5697V64.7471C97.5697 65.666 96.8221 66.4135 95.9033 66.4135C94.9846 66.4135 94.2369 65.6658 94.2369 64.7471V47.525C94.2369 46.716 93.5811 46.0602 92.7721 46.0602C91.9631 46.0602 91.3072 46.716 91.3072 47.525V64.7471C91.3072 67.2814 93.3691 69.3432 95.9033 69.3432C98.4375 69.3432 100.499 67.2814 100.499 64.7471V2.12109C100.499 1.31211 99.8436 0.65625 99.0346 0.65625ZM91.1055 11.5148C91.1055 7.64316 93.8949 4.41055 97.5697 3.72148V39.7975H91.1055V11.5148Z"
        fill="#666666"
      />
      <path
        d="M69.3203 27.1156C68.5539 27.3746 68.1426 28.2061 68.4016 28.9725C69.0562 30.9094 69.3881 32.9371 69.3881 34.9998C69.3881 45.415 60.9146 53.8885 50.4996 53.8885C40.0846 53.8885 31.6111 45.415 31.6111 34.9998C31.6111 26.2623 37.5307 18.716 46.0064 16.6486C46.7924 16.4568 47.2742 15.6643 47.0824 14.8783C46.8908 14.0924 46.098 13.6107 45.3123 13.8023C35.5203 16.191 28.6816 24.9076 28.6816 34.9998C28.6816 47.0305 38.4693 56.8182 50.4998 56.8182C62.5303 56.8182 72.318 47.0305 72.318 34.9998C72.318 32.6176 71.9342 30.274 71.1771 28.0344C70.918 27.2678 70.0865 26.8568 69.3203 27.1156Z"
        fill="#666666"
      />
      <path
        d="M80.7571 18.8172C80.0198 17.4451 78.3224 16.8998 76.8925 17.5762C76.4688 17.7766 76.0171 17.8781 75.5499 17.8781C74.7532 17.8781 73.9813 17.5727 73.3763 17.0178C72.9616 16.6373 72.3657 16.5281 71.8429 16.7371C71.3202 16.9459 70.9634 17.4357 70.9249 17.9971C70.8091 19.6861 69.402 21.0094 67.7216 21.0094C66.3837 21.0094 65.1706 20.157 64.7028 18.8883C64.5267 18.4103 64.1149 18.0582 63.6153 17.9584C63.1153 17.8588 62.6003 18.0256 62.2542 18.399C61.5677 19.1394 60.6052 19.5158 59.6128 19.4316C58.4798 19.3355 57.4196 18.5207 56.912 17.3559C56.5938 16.6256 56.5804 15.9139 56.8702 15.116C57.039 14.6514 56.962 14.1332 56.6655 13.7377C56.369 13.3422 55.8925 13.1236 55.4001 13.1543C55.3214 13.1594 55.244 13.1687 55.1669 13.1795L55.1554 13.181C53.3921 13.159 51.9643 11.7178 51.9643 9.94921C51.9643 9.05136 52.3352 8.21288 53.0091 7.58847C53.3827 7.24218 53.5495 6.72675 53.4497 6.22714C53.3499 5.72753 52.9979 5.31581 52.5198 5.13964C51.5688 4.78906 50.8284 4.00664 50.5395 3.04648C50.1101 1.61933 48.8306 0.709174 47.4263 0.834564C38.5272 1.62597 30.3946 5.78788 24.5265 12.5537C18.5919 19.3963 15.645 28.1713 16.229 37.2627C16.7618 45.5613 20.3683 53.41 26.3839 59.3631C32.3985 65.3152 40.2847 68.841 48.5893 69.2912C49.236 69.3262 49.8804 69.3437 50.5222 69.3437C59.3528 69.3437 67.6677 66.0428 74.114 59.9365C81.0329 53.3826 84.8433 44.5264 84.8433 34.9996C84.8431 29.3871 83.4302 23.7912 80.7571 18.8172ZM72.0989 57.8098C65.7745 63.8008 57.4821 66.8394 48.7477 66.366C41.1597 65.9547 33.9491 62.7281 28.4444 57.2809C22.9392 51.833 19.6392 44.657 19.1522 37.0752C18.6183 28.7574 21.3128 20.7307 26.7395 14.4736C32.1015 8.29121 39.5286 4.48574 47.6567 3.75566C47.6786 3.77597 47.7134 3.82206 47.7341 3.89101C48.0993 5.10488 48.8394 6.16953 49.822 6.94433C49.3075 7.85156 49.0347 8.87714 49.0347 9.94941C49.0347 12.8451 51.0425 15.2809 53.7392 15.9371C53.6958 16.8166 53.8583 17.6826 54.2263 18.5268C55.1577 20.6643 57.1749 22.1654 59.3651 22.3514C60.6136 22.4576 61.8352 22.1844 62.8968 21.5844C64.045 23.0402 65.8163 23.9394 67.7218 23.9394C70.1642 23.9394 72.3046 22.483 73.2886 20.3711C74.0038 20.6578 74.7696 20.8082 75.5501 20.8082C76.4538 20.8082 77.327 20.6119 78.1454 20.2248C78.162 20.217 78.1763 20.2174 78.1845 20.2185C80.6589 24.8287 81.9136 29.8016 81.9136 34.9998C81.9134 43.7139 78.4278 51.8144 72.0989 57.8098Z"
        fill="#666666"
      />
    </svg>
  )
}

DishCart.propTypes = {
  viewBox: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  style: PropTypes.object
}

DishCart.defaultProps = {
  viewBox: '0 0 101 70',
  width: '101',
  height: '70',
  style: {}
}

export default DishCart
