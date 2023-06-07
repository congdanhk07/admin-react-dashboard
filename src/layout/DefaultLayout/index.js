import Header from 'components/Header'
import SideNav from 'components/SideNav'
import UserInformation from 'components/UserInformation'
import PAGE_CONFIG from 'config/app.router'
import { useRouter } from 'next/router'
import React from 'react'

const DefaultLayout = (props) => {
    const { component: Component } = props
    const HeaderActionsEnd = () => {
        return (
            <>
                <UserInformation />
            </>
        )
    }

    return (
        <div className="flex flex-auto flex-col">
            <div className="flex flex-auto min-w-0">
                <SideNav />
                <div className="flex flex-col  min-h-screen min-w-0 relative w-full">
                    <Header
                        className={'shadow'}
                        headerStart={<>Start</>}
                        headerEnd={<HeaderActionsEnd />}
                    />
                    <div className="h-full flex flex-auto flex-col px-4">
                        <Component {...props} component={null} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout
