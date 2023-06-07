import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'

const UserInformation = ({
    userName,
    role,
    src = '/img/avatars/avatar_13.jpg',
}) => {
    return (
        <div className="py-2 px-3 flex items-center gap-2">
            <Image
                className="rounded-full"
                priority
                src={src}
                width={40}
                height={40}
            />
            <div className=" hidden lg:block">
                <div className="font-bold text-gray-900 ">{userName}</div>
                <div className="text-xs">{role}</div>
            </div>
        </div>
    )
}

UserInformation.propTypes = {
    userName: PropTypes.string,
    email: PropTypes.string,
    src: PropTypes.string,
}
UserInformation.defaultProps = {
    userName: 'Trần Công Danh',
    role: 'Admin',
}

export default UserInformation
