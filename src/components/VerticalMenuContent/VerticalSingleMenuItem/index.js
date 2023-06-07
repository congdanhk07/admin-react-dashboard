import navigationIcon from 'config/navigation-icon.config'
import Link from 'next/link'
import React from 'react'

const VerticalSingleMenuItem = (props) => {
    const { open, title, nameIcon, href = {}, onClickLink, selected } = props
    return (
        <Link href={href}>
            <li
                onClick={onClickLink}
                className={`side-nav-content my-2
                        ${!open && ' justify-center'}
                        ${selected && ' !bg-main-blue !text-white'}`}
            >
                <div className={`${!open && 'side-nav-small'} `}>
                    {navigationIcon[nameIcon]}
                </div>

                <span className={`${!open && 'hidden break-words'} `}>
                    {title}
                </span>
            </li>
        </Link>
    )
}

export default VerticalSingleMenuItem
