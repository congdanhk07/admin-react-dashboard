import React, { Children } from 'react'
import PropTypes from 'prop-types'

const MenuGroupTitle = ({ label = 'DEFAULT TITLE' }) => {
    return (
        <p
            className="text-sm font-[600] text-slate-500 cursor-pointer px-2 uppercase my-4"
            title={label}
        >
            {label}
        </p>
    )
}

MenuGroupTitle.propTypes = {}

export default MenuGroupTitle
