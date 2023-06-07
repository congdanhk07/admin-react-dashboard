import { useMemo } from '../../../public/node_modules/@types/react/ts5.0'
import isPlainObject from 'lodash/isPlainObject'

const getRouteInfo = (navTree, key) => {
    console.log('navTree', navTree)
    console.log('key', key)
    if (navTree.key === key) {
        return navTree
    }
    let activedRoute
    let isIncludeActivedRoute = false

    for (let p in navTree) {
        if (
            p !== 'icon' &&
            navTree.hasOwnProperty(p) &&
            typeof navTree[p] === 'object'
        ) {
            activedRoute = getRouteInfo(navTree[p], key)
            if (activedRoute) {
                return activedRoute
            }
        }
    }
    return activedRoute
}

const findNestedRoute = (navTree, key) => {
    let found = navTree.find((node) => {
        return node.key === key
    })
    if (found) {
        return true
    }
    return navTree.some((c) => findNestedRoute(c.subMenu, key))
}

const getTopRouteKey = (navTree, key) => {
    let foundNav = {}
    navTree.forEach((nav) => {
        if (findNestedRoute([nav], key)) {
            foundNav = nav
        }
    })
    return foundNav
}

function useMenuActive(navTree, key) {
    const activedRoute = useMemo(() => {
        // tránh cho việc nhấn lại liên tục vào 1 active trước đó , nếu ko có khi nhấn --> tự render lại
        const route = getRouteInfo(navTree, key)
        return route
    }, [navTree, key])

    const includedRouteTree = useMemo(() => {
        const included = getTopRouteKey(navTree, key)
        return included
    }, [navTree, key])

    return { activedRoute, includedRouteTree }
}

export default useMenuActive
