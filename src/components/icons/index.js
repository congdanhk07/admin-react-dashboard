import PropTypes from 'prop-types'

import Cancel from './Cancel'
import CheckGreen from './CheckGreen'
import DishCart from './DishCart'
import Eye from './Eye'
import EyeOff from './EyeOff'
import Filter from './Filter'
import Moon from './Moon'
import Pags from './Pags'
import Percent from './Percent'
import ShoppingCart from './ShoppingCart'
import Success from './Success'
import SunIcon from './Sun'
import Tag from './Tag'
import VectorRight from './VectorRight'

const Icons = {
    eyeOff: EyeOff,
    dishCart: DishCart,
    filter: Filter,
    eye: Eye,
    cancel: Cancel,
    pags: Pags,
    shoppingCart: ShoppingCart,
    tag: Tag,
    percent: Percent,
    sun: SunIcon,
    moon: Moon,
    checkGreen: CheckGreen,
    success: Success,
    vectorRight: VectorRight,
}

const IconNames = Object.keys(Icons).map((icon) => icon.toString())

const AppIcon = (props) => {
    const {
        name,
        size,
        color,
        stroke,
        fill,
        width,
        height,
        viewBox,
        scale,
        margin,
    } = props
    const Icon = Icons[name]
    const iconStyle = {
        scale: size,
        color: color,
        fill: fill,
    }
    return (
        <Icon
            style={iconStyle}
            fill={fill}
            stroke={stroke}
            width={width}
            height={height}
            viewBox={viewBox}
            scale={scale}
            margin={margin}
        />
    )
}

AppIcon.propTypes = {
    name: PropTypes.oneOf(IconNames),
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    stroke: PropTypes.string,
    fill: PropTypes.string,
}

AppIcon.defaultProps = {
    name: 'sun',
    width: '46',
    height: '46',
}
export const LIST_DEFAULT_ICONS = IconNames
export default AppIcon
