import React from 'react'
import PropTypes from 'prop-types'
import navigationIcon from 'config/navigation-icon.config'

const VerticalIconMenuToggle = (props) => {
    const { onClick, open } = props
    return (
        <>
            <div
                className={`absolute cursor-pointer flex justify-center duration-700 items-center border rounded-full bg-white -right-5 z-50 top-12 w-10 h-10 ${
                    open && 'rotate-180 '
                }`}
                onClick={onClick}
            >
                {navigationIcon?.arrowRight}
            </div>
        </>
    )
}

VerticalIconMenuToggle.propTypes = {}

export default VerticalIconMenuToggle
