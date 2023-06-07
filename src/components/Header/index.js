import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { HEADER_HEIGHT_CLASS } from 'constant/theme.constant'

const Header = (props) => {
    const { className, container, headerStart, headerMiddle, headerEnd } = props
    return (
        <header className={classNames('header', className)}>
            <div
                className={classNames(
                    'header-wrapper',
                    HEADER_HEIGHT_CLASS,
                    container && 'container mx-auto'
                )}
            >
                <div className="header-action header-action-start">
                    {headerStart}
                </div>
                {headerMiddle && (
                    <div className="header-action header-action-middle">
                        {headerMiddle}
                    </div>
                )}
                <div className="header-action header-action-end">
                    {headerEnd}
                </div>
            </div>
        </header>
    )
}

Header.propTypes = {}

export default Header
