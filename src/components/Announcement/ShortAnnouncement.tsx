import { Card, Flex, Image, Typography } from "antd"
import { Link } from "react-router-dom"
import "./ShortAnnouncement.scss"

const ShortAnnouncement = () => {
    return (
        <Card className="short-announcement">
            <Link to={'#'}>
                <Flex gap={16} align="center" justify="center">
                    <Flex vertical gap={15}>
                        <Flex gap={12} wrap>
                            <Typography.Text>Saidamir Shamsiddinov</Typography.Text>
                            <Typography.Text>24.03.2025</Typography.Text>
                        </Flex>
                        <Typography.Text strong>O’zbekiston Respublikasi Prezidenti Shavkat Mirziyoyev Ta’lim, Fan va Innovatsiyalar  Vazirligida .......</Typography.Text>
                    </Flex>
                    <Image src="/images/announcement-1.png" preview={false} />
                </Flex>
            </Link>
        </Card>
    )
}

export default ShortAnnouncement