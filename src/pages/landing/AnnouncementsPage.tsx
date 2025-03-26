import { Flex, Typography } from "antd"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { ConferenceIcon, NewsIcon } from "../../assets/icons"
import SendArticle from "./components/SendArticle"
import ShortConference from "./components/conference/ShortConference"
import ShortNews from "./components/news/ShortNews"

const AnnouncementsPage = () => {

    useEffect(() => {
        window.scrollTo({ top: 0 })
    }, [])

    return (
        <Flex vertical className="announcements-page">
            <Typography.Title className="main-title" level={2} style={{ margin: 0 }}>
                <NewsIcon /> E’lonlar
            </Typography.Title>
            <Flex vertical className="padding-box" gap={40}>
                <Flex vertical gap={40}>
                    <Typography.Text strong className="sub-title"><ConferenceIcon /> Konferensiyalar</Typography.Text>
                    <Flex className="conference-container" justify="center" gap={20} wrap>
                        {
                            Array.from({ length: 3 }).map((_, index) => (
                                <Link key={index} to={"#"}>
                                    <ShortConference />
                                </Link>
                            ))
                        }
                    </Flex>
                </Flex>
                <Flex vertical gap={40}>
                    <Typography.Text strong className="sub-title"><NewsIcon /> Yangiliklar</Typography.Text>
                    <Flex className="conference-container" justify="center" gap={20} wrap>
                        {
                            Array.from({ length: 3 }).map((_, index) => (
                                <Link to={"#"} key={index}>
                                    <ShortNews />
                                </Link>
                            ))
                        }
                    </Flex>
                </Flex>
            </Flex>
            <SendArticle />
        </Flex>
    )
}

export default AnnouncementsPage