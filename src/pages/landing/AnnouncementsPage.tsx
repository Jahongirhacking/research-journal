import { Flex, Typography } from "antd"
import { NewsIcon } from "../../assets/icons"
import SendArticle from "./components/SendArticle"

const AnnouncementsPage = () => {
    return (
        <Flex vertical className="announcements-page">
            <Typography.Title className="main-title" level={2} style={{ margin: 0 }}>
                <NewsIcon /> E’lonlar
            </Typography.Title>
            <SendArticle />
        </Flex>
    )
}

export default AnnouncementsPage