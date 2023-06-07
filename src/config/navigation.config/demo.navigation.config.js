// import { DOCS_PREFIX_PATH } from 'constants/route.constant'

import {
    NAV_ITEM_TYPE_ITEM,
    NAV_ITEM_TYPE_TITLE,
} from 'constant/navigation.constant'

const demoNavigationConfig = [
    {
        key: 'nav.home',
        path: '',
        title: 'Beauty DnD',
        translateKey: 'nav.pages.pages',
        nameIcon: 'home',
        type: NAV_ITEM_TYPE_TITLE,
        subMenu: [
            {
                prefixPath: 'dashboard',
                href: '/dashboard',
                title: 'Dashboard',
                nameIcon: 'home',
                type: NAV_ITEM_TYPE_ITEM,
                subMenu: [],
            },
            {
                prefixPath: 'inbox',
                path: '',
                href: '/inbox',
                title: 'Inbox',
                nameIcon: 'singleMenu',
                type: NAV_ITEM_TYPE_ITEM,
                subMenu: [],
            },
        ],
    },
]

export default demoNavigationConfig
