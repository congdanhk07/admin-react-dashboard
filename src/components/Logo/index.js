import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Image from 'next/image'

const Logo = (props) => {
    const {
        type,
        mode,
        gutter,
        className,
        imgClass,
        style,
        logoWidth,
        srcImg,
        alt,
        widthImage,
        heightImage,
    } = props

    return (
        <div
            className={classNames('logo', className, gutter)}
            style={{
                ...style,
                ...{ width: logoWidth },
            }}
        >
            <Image
                className={imgClass}
                width={widthImage}
                priority
                height={heightImage}
                src={srcImg}
                alt={alt}
            />
        </div>
    )
}

Logo.defaultProps = {
    mode: 'light',
    type: 'full',
    logoWidth: 'auto',
}

Logo.propTypes = {
    mode: PropTypes.oneOf(['light', 'dark']),
    type: PropTypes.oneOf(['full', 'streamline']),
    gutter: PropTypes.string,
    imgClass: PropTypes.string,
    logoWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default Logo
