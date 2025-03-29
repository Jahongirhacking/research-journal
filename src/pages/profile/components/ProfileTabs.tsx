import { Button, Flex } from "antd"
import { NavLink } from "react-router-dom"
import { ArticlesIcon, EditIcon, SendArticleIcon } from "../../../assets/icons"

const ProfileTabs = () => {
    return (
        <Flex gap={20} className="profile-tabs">
            <NavLink to={"/profile/edit"}>
                <Button icon={<EditIcon />}>Malumotlarni o’zgartirish</Button>
            </NavLink>
            <NavLink to={"/profile/articles"}>
                <Button icon={<ArticlesIcon />}>Mening maqolalarim</Button>
            </NavLink>
            <NavLink to={"/profile/send-article"}>
                <Button icon={<SendArticleIcon />}>Maqola yuborish</Button>
            </NavLink>
        </Flex>
    )
}

export default ProfileTabs