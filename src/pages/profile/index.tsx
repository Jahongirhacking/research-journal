import { Flex, Typography } from "antd"
import { Outlet, useLocation } from "react-router-dom"
import { ProfileIcon } from "../../assets/icons"
import ProfileCard from "./components/ProfileCard"
import ProfileTabs from "./components/ProfileTabs"
import "./style.scss"

const ProfilePage = () => {
    const location = useLocation();

    return (
        <Flex vertical className="profile-page">
            {
                !location.pathname.includes("send-article") ? (
                    <>
                        <Typography.Title level={2} className="main-title"><ProfileIcon /> Profil</Typography.Title>
                        <Flex className="padding-box" vertical gap={48}>
                            <Flex>
                                <ProfileCard />
                            </Flex>
                            <ProfileTabs />
                            <Outlet />
                        </Flex>
                    </>
                ) : (
                    <Outlet />
                )
            }
        </Flex>
    )
}

export default ProfilePage