import React from 'react'
import PropTypes from 'prop-types'
import VerticalSingleMenuItem from './VerticalSingleMenuItem'
import MenuGroupTitle from './MenuGroupTitle'
import {
    NAV_ITEM_TYPE_ITEM,
    NAV_ITEM_TYPE_TITLE,
} from 'constant/navigation.constant'
import { useRouter } from 'next/router'

const VerticalMenuContent = (props) => {
    const { navigationTree, open, routeKey } = props

    const getNavItem = (nav, index) => {
        const { subMenu, type, title, nameIcon, key } = nav
        if (subMenu.length === 0 && type === NAV_ITEM_TYPE_ITEM) {
            // Render item not have Title
            return (
                <VerticalSingleMenuItem
                    open={open}
                    title={title}
                    nameIcon={nameIcon}
                />
            )
        }
        if (type === NAV_ITEM_TYPE_TITLE) {
            if (subMenu.length > 0) {
                return (
                    <>
                        {open && <MenuGroupTitle label={title} />}
                        {subMenu.map((subNav) => {
                            console.log('subNav', subNav)
                            const { title, nameIcon, href, prefixPath } = subNav
                            return subNav.subMenu.length === 0 ? (
                                <VerticalSingleMenuItem
                                    open={open}
                                    title={title}
                                    selected={prefixPath === routeKey}
                                    nameIcon={nameIcon}
                                    href={href}
                                />
                            ) : (
                                // Collapse Vertical here (in future)
                                <></>
                            )
                        })}
                    </>
                )
            } else {
                // Render item just have title
                return <> {open && <MenuGroupTitle label={title} />}</>
            }
        }
    }
    return (
        <>
            <ul className="pt-6">
                {navigationTree.map((nav, idx) => getNavItem(nav))}
            </ul>
        </>
    )
}

VerticalMenuContent.propTypes = {}

export default VerticalMenuContent
