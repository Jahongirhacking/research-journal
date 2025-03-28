import { Button, Flex, Typography } from "antd"
import { Link, Outlet, useLocation } from "react-router-dom"
import { ArticlesIcon, EditIcon, ProfileIcon, SendArticleIcon } from "../../assets/icons"
import ProfileCard from "./components/ProfileCard"
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
                            <Flex gap={20} className="profile-tabs">
                                <Link to={"/profile/edit"}>
                                    <Button icon={<EditIcon />}>Malumotlarni o’zgartirish</Button>
                                </Link>
                                <Link to={"/profile/articles"}>
                                    <Button icon={<ArticlesIcon />}>Mening maqolalarim</Button>
                                </Link>
                                <Link to={"/profile/send-article"}>
                                    <Button icon={<SendArticleIcon />}>Maqola yuborish</Button>
                                </Link>
                            </Flex>
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