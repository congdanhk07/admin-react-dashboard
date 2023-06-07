import React, { useState } from 'react'
import VerticalIconMenuToggle from '../VerticalMenuContent/VerticalIconMenuToggle'
import VerticalMenuContent from '../VerticalMenuContent'
import { useDispatch, useSelector } from 'react-redux'
import navigationConfig from '../../config/navigation.config'
import {
    activeSidebar,
    selectCurrentRoute,
    selectToggleSidebar,
} from '../../store/app/commonSlice'
import { LOGO_HEIGHT, LOGO_SRC_PATH, LOGO_WIDTH } from 'constant/app.constant'
import Image from 'next/image'
import { useRouter } from 'next/router'

const SideNav = (props) => {
    const open = useSelector(selectToggleSidebar)
    const dispatch = useDispatch()
    const { pathname } = useRouter()
    const parts = pathname.split('/') // Tách đường dẫn thành các phần
    const routeKey = parts[parts.length - 1] // Lấy giá trị sau cùng đẻ so sánh và active color

    return (
        <div className=" flex border-r shadow">
            <div className={` ${open ? 'w-60' : 'w-20 '}  side-nav`}>
                <VerticalIconMenuToggle
                    open={open}
                    onClick={() => dispatch(activeSidebar(!open))}
                />
                <Image
                    priority
                    src={LOGO_SRC_PATH}
                    height={LOGO_HEIGHT}
                    width={LOGO_WIDTH}
                    className="cursor-pointer"
                />
                <VerticalMenuContent
                    routeKey={routeKey}
                    navigationTree={navigationConfig}
                    open={open}
                />
            </div>
        </div>
    )
}

SideNav.propTypes = {}
SideNav.defaultProps = {}

export default SideNav
