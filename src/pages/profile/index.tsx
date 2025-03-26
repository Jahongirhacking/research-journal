import { Flex, Typography } from "antd"
import { Outlet } from "react-router-dom"

const ProfilePage = () => {
    return (
        <Flex vertical className="profile-page">
            <Typography.Title level={2} className="main-title">Profile</Typography.Title>
            <Outlet />
        </Flex>
    )
}

export default ProfilePage