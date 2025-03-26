import { Card, Flex, Image, Typography } from "antd"
import "./ShortConference.scss"

const ShortConference = () => {
    return (
        <Card hoverable className="short-conference-card">
            <Flex vertical>
                <Image className="conference-image" preview={false} src="/images/conference.jpeg" />
                <Flex vertical gap={15} className="conference-main">
                    <Typography.Text strong className="conference-name">Konferensiya</Typography.Text>
                    <Typography.Text className="conference-date">15-fevral 2025-yil</Typography.Text>
                    <Typography.Text className="conference-info">Raqamli Iqtisodiyotni rivojlantirish yo’llari va suniy intelektni joriy etish!</Typography.Text>
                </Flex>
            </Flex>
        </Card>
    )
}

export default ShortConference