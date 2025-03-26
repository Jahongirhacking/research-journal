import { Card, Flex, Image, Typography } from "antd"
import { CalendarIcon, ProfileIcon } from "../../../../assets/icons"
import "./ShortNews.scss"

const ShortNews = () => {
    return (
        <Card hoverable className="short-news-card">
            <Flex vertical gap={34}>
                <Flex gap={24}>
                    <Image src="/images/conference.jpeg" preview={false} className="news-image" />
                    <Flex vertical justify="space-between" gap={20}>
                        <Typography.Text strong>Jurnalimizning yangi maqolalar soni qo’shildi. Yangi Elektron jurnalda qanday afzalliklar bor!?</Typography.Text>
                        <Flex vertical className="meta-info" gap={4}>
                            <Typography.Text><CalendarIcon /> 15.02.2025</Typography.Text>
                            <Typography.Text><ProfileIcon /> Administrator</Typography.Text>
                        </Flex>
                    </Flex>
                </Flex>
                <Typography.Text strong className="news-info">
                    Jurnal pedagogika, moliya, yurispridensiya, raqamli iqtisodiyot, pedagogika va psixologiya sohalaridagi ilmiy-amaliy innovatsion yangiliklarni har tomonlama yoritishni, jurnalxonlarning pedagogik, iqtisodiy, ilmiy-innovatsion axborotga bo‘lgan talab-ehtiyojlarini yanada to‘laroq qondirishni, jurnal imkoniyatlaridan keng va samara
                </Typography.Text>
            </Flex>
        </Card>
    )
}

export default ShortNews